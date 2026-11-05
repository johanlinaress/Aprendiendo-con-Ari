/**
 * Utilidad de accesibilidad por teclado (WAI-ARIA Authoring Practices)
 * Implementa:
 * - Roving tabindex (0 en el elemento activo, -1 en los demás)
 * - Navegación con flechas (ArrowRight, ArrowLeft, ArrowDown, ArrowUp, Home, End)
 *   para grupos con role="tablist" y role="radiogroup"
 * - Asociación automática aria-controls / role="tabpanel" cuando existe contenedor de panel
 */
let panelIdSeq = 1;

function configureCompositeGroup(groupEl, itemRole, activeAttr) {
  if (!groupEl || groupEl.dataset.a11yBound === 'true') return;
  groupEl.dataset.a11yBound = 'true';

  const getItems = () =>
    Array.from(groupEl.querySelectorAll(`[role="${itemRole}"]:not([disabled])`));

  const syncTabIndexes = () => {
    const items = getItems();
    if (items.length === 0) return;
    let activeItem = items.find((el) => el.getAttribute(activeAttr) === 'true');
    if (!activeItem) {
      activeItem = items[0];
    }
    items.forEach((item) => {
      const isCurrent = item === activeItem;
      item.setAttribute('tabindex', isCurrent ? '0' : '-1');
    });
  };

  syncTabIndexes();

  // Si es un tablist, vincula el panel de contenido adyacente como tabpanel
  if (itemRole === 'tab') {
    const items = getItems();
    const activeTab = items.find((el) => el.getAttribute('aria-selected') === 'true') || items[0];
    const sectionContainer = groupEl.closest('section, .exercise-container, .practice-view, .progress-view, .levels-map-view');
    const candidatePanel =
      groupEl.nextElementSibling ||
      sectionContainer?.querySelector('#lesson-aprendo-panel, .exercise-card, .practice-grid, .levels-grid, .progress-grid');

    if (candidatePanel && !candidatePanel.getAttribute('role')) {
      candidatePanel.setAttribute('role', 'tabpanel');
    }
    if (candidatePanel) {
      if (!candidatePanel.id) {
        candidatePanel.id = `ari-tabpanel-${panelIdSeq++}`;
      }
      items.forEach((tab, idx) => {
        if (!tab.id) {
          tab.id = `${candidatePanel.id}-tab-${idx + 1}`;
        }
        tab.setAttribute('aria-controls', candidatePanel.id);
      });
      if (activeTab?.id) {
        candidatePanel.setAttribute('aria-labelledby', activeTab.id);
      }
    }
  }

  groupEl.addEventListener('keydown', (e) => {
    const validKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'];
    if (!validKeys.includes(e.key)) return;

    const items = getItems();
    if (items.length <= 1) return;

    const currentIndex = items.indexOf(document.activeElement);
    const activeIndex =
      currentIndex !== -1
        ? currentIndex
        : Math.max(0, items.findIndex((el) => el.getAttribute(activeAttr) === 'true'));

    let nextIndex = activeIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (activeIndex + 1) % items.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (activeIndex - 1 + items.length) % items.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = items.length - 1;
    }

    e.preventDefault();
    const targetItem = items[nextIndex];
    if (!targetItem) return;

    items.forEach((item, idx) => {
      item.setAttribute('tabindex', idx === nextIndex ? '0' : '-1');
    });

    // Guardamos el id o selector del elemento para restaurar el foco tras un rerender sincrónico
    const targetId = targetItem.id;
    const targetRole = targetItem.getAttribute('role');
    const targetDataset = { ...targetItem.dataset };

    targetItem.focus();
    targetItem.click();

    // Si click() disparó un rerender del DOM, restauramos el foco en el nuevo nodo equivalente
    requestAnimationFrame(() => {
      if (document.activeElement && document.activeElement !== document.body && document.activeElement.id !== 'main-content') {
        return;
      }
      let replacement = null;
      if (targetId) {
        replacement = document.getElementById(targetId);
      }
      if (!replacement && targetRole) {
        const candidates = Array.from(document.querySelectorAll(`[role="${targetRole}"]`));
        replacement = candidates.find((el) =>
          Object.entries(targetDataset).every(([k, v]) => k === 'a11yBound' || el.dataset[k] === v)
        );
      }
      if (replacement) {
        replacement.focus();
      }
    });
  });
}

export function enhanceA11yKeyboardNavigation(root = document) {
  if (!root) return;
  root.querySelectorAll('[role="tablist"]').forEach((tablist) => {
    configureCompositeGroup(tablist, 'tab', 'aria-selected');
  });
  root.querySelectorAll('[role="radiogroup"]').forEach((radiogroup) => {
    configureCompositeGroup(radiogroup, 'radio', 'aria-checked');
  });
}
