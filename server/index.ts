import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import serialize from 'serialize-javascript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const port = 3000;
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response) => {
    const url = req.originalUrl;
    let template = fs.readFileSync(path.resolve(__dirname, '../index.html')).toString();
    template = await vite.transformIndexHtml(url, template);
    const { render } = await vite.ssrLoadModule('/server/entry-server.tsx');
    const parts = template.split('"Not rendered"');
    res.write(parts[0]);
    const { stream, preloadedState } = await render(url, {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.write(parts[1]);
        res.write(serialize(preloadedState).replace(/</g, '\\u003c'));
        res.write(parts[2]);
        res.end();
      },
      onError() {
        res.end('error');
      },
    });
  });
  app.listen(port);
}

createServer();

// app.use('/static', express.static('static'));
// app.use('/assets', express.static(path.resolve(__dirname, './dist/assets')))
