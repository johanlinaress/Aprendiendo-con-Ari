const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 4173;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg'
};

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    const safePath = path.normalize(path.join(ROOT_DIR, pathname));
    if (!safePath.startsWith(ROOT_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Acceso denegado');
      return;
    }

    fs.stat(safePath, (err, stats) => {
      if (err || !stats.isFile()) {
        // Fallback to index.html for SPA routes if requested path has no file extension
        if (!path.extname(pathname)) {
          const indexPath = path.join(ROOT_DIR, 'index.html');
          fs.readFile(indexPath, (readErr, content) => {
            if (readErr) {
              res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
              res.end('Error interno del servidor');
              return;
            }
            res.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
            res.end(content);
          });
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Archivo no encontrado');
        return;
      }

      const ext = path.extname(safePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      if (req.method === 'HEAD') {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Length': stats.size,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache'
        });
        res.end();
        return;
      }

      // Soporte de solicitudes parciales (HTTP 206 Partial Content) para reproducción fluida de audio en navegadores
      if (req.headers.range) {
        const range = req.headers.range;
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
        const chunksize = end - start + 1;
        const stream = fs.createReadStream(safePath, { start, end });
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${stats.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType
        });
        stream.pipe(res);
        return;
      }

      fs.readFile(safePath, (readErr, content) => {
        if (readErr) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('Error leyendo el archivo');
          return;
        }
        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Length': stats.size,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache'
        });
        res.end(content);
      });
    });
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Error procesando la solicitud');
  }
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Aprendiendo con Ari disponible en http://localhost:${PORT}`);
  });
}

module.exports = { server, PORT };
