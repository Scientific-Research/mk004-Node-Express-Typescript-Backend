// import http from 'http';
// import * as http from 'http';

import http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import { generateMainContent } from './content';

const port = 8000;

(() => {
  http
    .createServer(async (req: IncomingMessage, res: ServerResponse) => {
      const html = await generateMainContent(); // HTML bei jedem Request neu generieren
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // res.write('info site');
      res.write(html);
      res.end();
    })
    .listen(port);

  console.log(`listening on http://localhost:${port}`);
})();
