import { LEVELS_DATA, ACHIEVEMENTS_DATA } from '../data/levelsData.js';
import { StorageService, ARI_ACCESSORIES } from '../services/StorageService.js';
import { SoundService } from '../services/SoundService.js';
import { SupabaseService } from '../services/SupabaseService.js';
import { Router } from '../router/Router.js';
import { renderAriMascot, bindAriMascotEvents } from './AriMascot.js';
import { showConfirmModal } from './ConfirmModal.js';
import { showAriToast } from './ToastNotification.js';
import { fireConfetti } from '../utils/confetti.js';
import { LEVEL_STATUS_META, renderStarsHtml } from '../utils/levelStatus.js';
import { escapeHtml } from '../utils/escapeHtml.js';

export function renderProgressView(focus = 'resumen') {
  const activeTab = focus === 'logros' ? 'logros' : 'resumen';
  const state = StorageService.getState();
  const safeName = escapeHtml(state.playerName);
  const totalStars = StorageService.getTotalStars();
  const maxStars = StorageService.getMaxPossibleStars();
  const completedLevels = StorageService.getCompletedCount();
  const mathPercent = StorageService.getSubjectProgress('matematicas');
  const espPercent = StorageService.getSubjectProgress('espanol');
  const syncCode = escapeHtml(SupabaseService.getOrCreateSyncCode());
  const globalAccuracy =
    state.totalQuestionsAnswered > 0
      ? Math.round((state.totalCorrectAnswers / state.totalQuestionsAnswered) * 100)
      : 0;

  return `
    <section class="progress-view view-fade-anim" data-component="ProgressView" data-focus="${activeTab}">
      <div class="section-header-row">
        <div>
          <span class="hero-pill">🏅 Panel del Estudiante • ${state.selectedGrade}° Grado</span>
          <h1 class="section-title">Progreso y Medallas de ${safeName}</h1>
          <p class="section-subtitle">
            Última actividad: <strong id="prog-last-activity">${escapeHtml(state.lastActivityLabel || 'Inicio de aventura')}</strong>
          </p>
        </div>
        <div class="progress-header-actions">
          <button type="button" class="btn btn-primary" id="btn-progress-to-map">
            🗺️ Ir al Mapa
          </button>
          <button type="button" class="btn btn-secondary" id="btn-export-backup" title="Descargar archivo de respaldo con tus estrellas y avance">
            📥 Guardar Partida
          </button>
          <button type="button" class="btn btn-secondary" id="btn-import-backup" title="Restaurar tu partida desde un archivo de respaldo">
            📤 Cargar Partida
          </button>
          <input type="file" id="input-import-backup" accept=".json,application/json" style="display:none" aria-hidden="true" />
          <button type="button" class="btn btn-danger" id="btn-reset-progress">
            🗑️ Reiniciar Progreso
          </button>
        </div>
      </div>

      <div class="category-tabs progress-subtabs-bar" role="tablist" aria-label="Secciones de progreso">
        <button
          type="button"
          role="tab"
          id="btn-prog-tab-resumen"
          class="category-tab-btn ${activeTab === 'resumen' ? 'active' : ''}"
          data-progress-tab="/progreso"
          aria-selected="${activeTab === 'resumen' ? 'true' : 'false'}"
        >
          📊 Resumen General
        </button>
        <button
          type="button"
          role="tab"
          id="btn-prog-tab-logros"
          class="category-tab-btn ${activeTab === 'logros' ? 'active' : ''}"
          data-progress-tab="/logros"
          aria-selected="${activeTab === 'logros' ? 'true' : 'false'}"
        >
          🏆 Medallas (${state.achievements.length}/${ACHIEVEMENTS_DATA.length})
        </button>
      </div>

      <div class="progress-overview-grid">
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🏆</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Puntaje Total</span>
            <strong class="summary-stat-value" id="prog-total-score">${state.totalScore} pts</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">⭐</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Estrellas Totales</span>
            <strong class="summary-stat-value" id="prog-total-stars">${totalStars} / ${maxStars}</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🎯</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Precisión Global</span>
            <strong class="summary-stat-value" id="prog-global-accuracy">${globalAccuracy}% (${state.totalCorrectAnswers}/${state.totalQuestionsAnswered})</strong>
          </div>
        </article>
        <article class="summary-stat-card">
          <div class="summary-stat-icon">🔥</div>
          <div class="summary-stat-info">
            <span class="summary-stat-label">Mejor Racha</span>
            <strong class="summary-stat-value" id="prog-best-streak">${state.bestStreak} seguidas</strong>
          </div>
        </article>
      </div>

      <!-- Barras de Progreso por Materia (Sección 13.1) -->
      <div class="subject-progress-cards-row">
        <article class="subject-progress-summary-card">
          <div class="subject-progress-row">
            <span>➕ Progreso en Matemáticas</span>
            <strong id="prog-math-percent">${mathPercent}%</strong>
          </div>
          <div class="subject-bar-track">
            <div class="subject-bar-fill fill-green" style="width: ${mathPercent}%"></div>
          </div>
        </article>

        <article class="subject-progress-summary-card">
          <div class="subject-progress-row">
            <span>📖 Progreso en Español</span>
            <strong id="prog-esp-percent">${espPercent}%</strong>
          </div>
          <div class="subject-bar-track">
            <div class="subject-bar-fill fill-purple" style="width: ${espPercent}%"></div>
          </div>
        </article>
      </div>

      <!-- Sincronización Segura en la Nube (Supabase) -->
      <article class="cloud-sync-card" aria-label="Sincronización de progreso en la nube con Supabase">
        <div class="cloud-sync-header">
          <div>
            <span class="cloud-sync-badge">☁️ Base de Datos en la Nube • Supabase</span>
            <h2 class="cloud-sync-title">Guarda y lleva tu progreso a otro dispositivo</h2>
            <p class="cloud-sync-desc">
              Usa tu <strong>Código de Explorador</strong> para guardar tus estrellas en la nube o recuperarlas en otro celular, tablet o computador.
            </p>
          </div>
          <div class="cloud-code-box">
            <span class="cloud-code-label">Tu Código de Explorador:</span>
            <div class="cloud-code-pill-row">
              <code class="cloud-code-value" id="cloud-sync-code-display">${syncCode}</code>
              <button type="button" class="btn btn-sm btn-secondary" id="btn-copy-sync-code" title="Copiar código de explorador">
                📋 Copiar
              </button>
              <button type="button" class="btn btn-sm btn-primary" id="btn-cloud-save" title="Subir progreso actual a Supabase">
                ☁️ Guardar ahora
              </button>
            </div>
          </div>
        </div>

        <form class="cloud-restore-form" id="form-cloud-load" aria-label="Recuperar partida desde otro dispositivo">
          <label for="input-cloud-sync-code" class="cloud-restore-label">
            ¿Ya tienes un código de otro dispositivo?
          </label>
          <div class="cloud-restore-controls">
            <input
              type="text"
              id="input-cloud-sync-code"
              class="input-player-name cloud-code-input"
              placeholder="Ej: ARI-7K9M-P4X2"
              maxlength="32"
              autocomplete="off"
            />
            <button type="submit" class="btn btn-sm btn-secondary" id="btn-cloud-load">
              📥 Recuperar desde la nube
            </button>
          </div>
        </form>
        <p class="cloud-sync-feedback" id="cloud-sync-feedback" aria-live="polite"></p>
      </article>

      <div class="progress-main-columns">
        <div class="achievements-section" id="achievements-panel">
          <h2 class="subsection-title">🎖️ Medallas y Logros (${state.achievements.length}/${ACHIEVEMENTS_DATA.length})</h2>
          <div class="achievements-grid">
            ${ACHIEVEMENTS_DATA.map((ach) => {
              const unlocked = state.achievements.includes(ach.id);
              return `
                <article
                  class="achievement-card ${unlocked ? 'achievement-unlocked' : 'achievement-locked'}"
                  id="achievement-${ach.id}"
                  data-unlocked="${unlocked}"
                >
                  <div class="achievement-icon-wrapper ${unlocked ? 'icon-unlocked' : 'icon-silhouette'}">
                    <span class="achievement-icon" aria-hidden="true">${ach.icon}</span>
                    ${!unlocked ? '<span class="achievement-lock-overlay" aria-label="Bloqueada">🔒</span>' : ''}
                  </div>
                  <div class="achievement-info">
                    <div class="achievement-header-row">
                      <h3>${escapeHtml(ach.title)}</h3>
                      <span class="achievement-status-tag ${unlocked ? 'status-unlocked' : 'status-locked'}">
                        ${unlocked ? '✅ Desbloqueado' : '🔒 Bloqueado'}
                      </span>
                    </div>
                    <div class="achievement-requirement-box">
                      <strong class="req-title">🎯 Requisito:</strong>
                      <span class="req-text">${escapeHtml(ach.description)}</span>
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>

        <aside class="progress-mascot-aside">
          ${renderAriMascot({
            mood: completedLevels >= LEVELS_DATA.length ? 'celebrating' : 'happy',
            message:
              completedLevels >= LEVELS_DATA.length
                ? '🎓 ¡Felicidades! Has superado todas las unidades de Aprendiendo con Ari y obtenido el grado de Superestudiante.'
                : `Llevas ${completedLevels} de ${LEVELS_DATA.length} unidades completadas y ${state.achievements.length} medallas desbloqueadas. ¡Sigue adelante!`,
            compact: false,
            showGreetButton: true
          })}

          <!-- Armario de Personalización de Ari -->
          <div class="ari-wardrobe-card" aria-label="Personalizar accesorio de Ari">
            <h3 class="wardrobe-title">🎨 Personaliza a Ari con tus ⭐</h3>
            <p class="wardrobe-subtitle">Desbloquea sombreros especiales recolectando estrellas:</p>
            <div class="wardrobe-grid">
              ${ARI_ACCESSORIES.map((acc) => {
                const isUnlocked = totalStars >= acc.requiredStars;
                const isEquipped = (state.ariAccessory || 'cap') === acc.id;
                return `
                  <button
                    type="button"
                    class="wardrobe-item-btn ${isEquipped ? 'is-equipped' : ''} ${!isUnlocked ? 'is-locked' : ''}"
                    data-ari-accessory="${acc.id}"
                    ${!isUnlocked ? 'disabled' : ''}
                    title="${isUnlocked ? `Equipar ${acc.label}` : `Requiere ${acc.requiredStars} estrellas`}"
                  >
                    <span class="wardrobe-item-icon" aria-hidden="true">${acc.icon}</span>
                    <span class="wardrobe-item-name">${escapeHtml(acc.label)}</span>
                    <small class="wardrobe-item-req">
                      ${isEquipped ? '✅ Puesto' : isUnlocked ? '✨ Usar' : `🔒 ${acc.requiredStars} ⭐`}
                    </small>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </aside>
      </div>

      <!-- Resumen para Padres/Tutores y Certificado Imprimible -->
      <article class="parents-report-card" aria-label="Reporte pedagógico para padres y certificado imprimible">
        <div class="parents-report-header">
          <div>
            <h2 class="subsection-title">👨‍👩‍👧 Resumen Pedagógico para Padres y Docentes</h2>
            <p class="parents-report-desc">
              Diagnóstico curricular de <strong>${safeName}</strong> en <strong>${state.selectedGrade}° Grado de Primaria</strong>:
              Matemáticas al <strong>${mathPercent}%</strong> · Español al <strong>${espPercent}%</strong> · Precisión global del <strong>${globalAccuracy}%</strong>.
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm" id="btn-print-certificate">
            🎓 Imprimir Certificado Oficial
          </button>
        </div>

        <div class="official-certificate-preview" id="official-certificate-card">
          <div class="certificate-inner-border">
            <span class="certificate-badge">🦉 DIPLOMA OFICIAL • APRENDIENDO CON ARI</span>
            <h3 class="certificate-student-name">${safeName}</h3>
            <p class="certificate-body-text">
              Por su dedicación, curiosidad y esfuerzo en <strong>${state.selectedGrade}° Grado de Primaria</strong>,
              alcanzando <strong>${totalStars} de ${maxStars} estrellas (⭐)</strong>,
              <strong>${completedLevels} de ${LEVELS_DATA.length} unidades superadas</strong> y
              <strong>${state.totalScore} puntos</strong> en Matemáticas y Español.
            </p>
            <div class="certificate-footer-sign">
              <span>📅 Fecha: ${new Date().toLocaleDateString('es-CO')}</span>
              <span>🦉 Firma: <strong>Ari el Búho Sabio · Johan Linares</strong></span>
            </div>
          </div>
        </div>
      </article>

      <div class="levels-breakdown-section">
        <h2 class="subsection-title">📊 Detalle por Unidad</h2>
        <div class="table-responsive-wrapper">
          <table class="levels-progress-table" aria-label="Tabla de progreso por nivel">
            <thead>
              <tr>
                <th>Unidad / Nivel</th>
                <th>Estado</th>
                <th>Estrellas</th>
                <th>Mejor Puntaje</th>
                <th>Mejor Precisión</th>
                <th>Intentos</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              ${LEVELS_DATA.map((lvl) => {
                const isUnlocked = StorageService.isLevelUnlocked(lvl.id);
                const ls = StorageService.getLevelState(lvl.id);
                const statusKey = StorageService.getLevelStatus(lvl.id);
                const statusMeta = LEVEL_STATUS_META[statusKey];
                return `
                  <tr data-progress-row="${lvl.id}">
                    <td><strong>${lvl.icon} Nivel ${lvl.id}: ${escapeHtml(lvl.unitLabel)}</strong></td>
                    <td>
                      <span class="status-pill ${ls.completed ? 'pill-completed' : isUnlocked ? 'pill-unlocked' : 'pill-locked'} ${statusMeta.className}">
                        ${statusMeta.label}
                      </span>
                    </td>
                    <td>${renderStarsHtml(ls.stars, 'star-item')}</td>
                    <td>${ls.bestScore} pts</td>
                    <td>${ls.bestAccuracy}%</td>
                    <td>${ls.attempts}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-sm ${isUnlocked ? 'btn-primary' : 'btn-locked'}"
                        data-table-play="${lvl.id}"
                        ${!isUnlocked ? 'disabled' : ''}
                      >
                        ${isUnlocked ? 'Jugar' : 'Bloqueado'}
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

export function bindProgressViewEvents(rootElement, rerenderCallback, focus = 'resumen') {
  bindAriMascotEvents(rootElement);

  rootElement.querySelectorAll('[data-progress-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate(tab.getAttribute('data-progress-tab'));
    });
  });

  if (focus === 'logros') {
    const achPanel = rootElement.querySelector('#achievements-panel');
    if (achPanel && typeof achPanel.scrollIntoView === 'function') {
      setTimeout(() => {
        achPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }

  const toMapBtn = rootElement.querySelector('#btn-progress-to-map');
  if (toMapBtn) {
    toMapBtn.addEventListener('click', () => {
      SoundService.play('click');
      Router.navigate('/niveles');
    });
  }

  // Exportar respaldo de partida (JSON)
  const exportBtn = rootElement.querySelector('#btn-export-backup');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      SoundService.play('collect');
      StorageService.exportProgressBackup();
      fireConfetti({ count: 50, duration: 2500 });
      showAriToast('¡Tu partida ha sido descargada en tu dispositivo! Puedes conservarla o llevarla a otro computador o tablet.', 'success');
    });
  }

  // Importar respaldo de partida
  const importBtn = rootElement.querySelector('#btn-import-backup');
  const importFileInput = rootElement.querySelector('#input-import-backup');
  if (importBtn && importFileInput) {
    importBtn.addEventListener('click', () => {
      SoundService.play('click');
      importFileInput.click();
    });

    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result;
        if (typeof content === 'string') {
          const res = StorageService.importProgressBackup(content);
          if (res.success) {
            SoundService.play('levelComplete');
            fireConfetti({ count: 90, duration: 3500 });
            showAriToast(res.message, 'success');
            rerenderCallback();
          } else {
            SoundService.play('wrong');
            showAriToast(res.message, 'error');
          }
        }
        importFileInput.value = '';
      };
      reader.readAsText(file);
    });
  }

  // Sincronización en la nube con Supabase
  const syncFeedbackEl = rootElement.querySelector('#cloud-sync-feedback');
  const setCloudFeedback = (text, isError = false) => {
    if (!syncFeedbackEl) return;
    syncFeedbackEl.textContent = text;
    syncFeedbackEl.classList.toggle('is-error', isError);
    syncFeedbackEl.classList.toggle('is-success', !isError);
  };

  const copySyncCodeBtn = rootElement.querySelector('#btn-copy-sync-code');
  if (copySyncCodeBtn) {
    copySyncCodeBtn.addEventListener('click', async () => {
      SoundService.play('click');
      const currentCode = SupabaseService.getOrCreateSyncCode();
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(currentCode);
        }
        setCloudFeedback(`✅ ¡Código ${currentCode} copiado! Guárdalo para usar tu partida en otro dispositivo.`);
      } catch (e) {
        setCloudFeedback(`Tu código de explorador es: ${currentCode}`);
      }
    });
  }

  const cloudSaveBtn = rootElement.querySelector('#btn-cloud-save');
  if (cloudSaveBtn) {
    cloudSaveBtn.addEventListener('click', async () => {
      SoundService.play('click');
      cloudSaveBtn.disabled = true;
      setCloudFeedback('⏳ Guardando estrellas y progreso en Supabase...');
      const res = await SupabaseService.saveProfileToCloud(
        StorageService.getState(),
        StorageService.getCompletedCount()
      );
      cloudSaveBtn.disabled = false;
      if (res.success) {
        SoundService.play('collect');
        fireConfetti({ count: 40, duration: 2000 });
        setCloudFeedback(`☁️ ${res.message}`);
      } else {
        SoundService.play('wrong');
        setCloudFeedback(res.message, true);
      }
    });
  }

  const cloudLoadForm = rootElement.querySelector('#form-cloud-load');
  const cloudLoadInput = rootElement.querySelector('#input-cloud-sync-code');
  if (cloudLoadForm && cloudLoadInput) {
    cloudLoadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      SoundService.play('click');
      const codeVal = cloudLoadInput.value.trim();
      setCloudFeedback('⏳ Buscando tu aventura en la nube...');
      const res = await SupabaseService.loadProfileFromCloud(codeVal);
      if (res.success && res.stateSnapshot) {
        StorageService.restoreCloudSnapshot(res.stateSnapshot);
        SoundService.play('levelComplete');
        fireConfetti({ count: 80, duration: 3000 });
        setCloudFeedback(
          `✅ ¡Partida de ${res.profile.player_name} (${res.profile.star_points} ⭐) restaurada desde la nube!`
        );
        setTimeout(() => {
          rerenderCallback();
        }, 700);
      } else {
        SoundService.play('wrong');
        setCloudFeedback(res.message, true);
      }
    });
  }

  const resetBtn = rootElement.querySelector('#btn-reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      SoundService.play('click');
      showConfirmModal({
        title: '¿Reiniciar todo el progreso?',
        message:
          'Se borrarán los puntos, las estrellas, las medallas y los niveles desbloqueados para comenzar desde el inicio.',
        confirmLabel: 'Sí, reiniciar progreso',
        cancelLabel: 'Cancelar',
        onConfirm: () => {
          StorageService.resetProgress();
          rerenderCallback();
        }
      });
    });
  }

  const tablePlayBtns = rootElement.querySelectorAll('[data-table-play]');
  tablePlayBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lvlId = Number(btn.getAttribute('data-table-play'));
      if (StorageService.isLevelUnlocked(lvlId)) {
        SoundService.play('click');
        Router.navigate(`/nivel/${lvlId}`);
      }
    });
  });

  // Personalización de accesorios de Ari
  rootElement.querySelectorAll('[data-ari-accessory]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const accId = btn.getAttribute('data-ari-accessory');
      if (!accId) return;
      SoundService.play('collect');
      StorageService.setAriAccessory(accId);
      showAriToast('¡Ari se puso su nuevo accesorio! 🦉✨', 'success');
      rerenderCallback();
    });
  });

  // Imprimir Certificado Oficial
  const printCertBtn = rootElement.querySelector('#btn-print-certificate');
  if (printCertBtn) {
    printCertBtn.addEventListener('click', () => {
      SoundService.play('levelComplete');
      fireConfetti({ count: 60, duration: 2500 });
      if (typeof window !== 'undefined' && typeof window.print === 'function') {
        window.print();
      }
    });
  }
}
