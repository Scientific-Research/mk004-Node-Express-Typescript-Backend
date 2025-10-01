// import http from 'http';
// import * as http from 'http';

// import http from 'http';
import express from 'express';
import fs from 'fs';
// import { IncomingMessage, ServerResponse } from 'http';
// import { generateMainContent } from './content';

const app = express();
const port = 8000;

const jobs = JSON.parse(fs.readFileSync('./src/data/jobs.json', 'utf-8'));
console.log(jobs);

// using http.createServer
// http
//   .createServer((req: IncomingMessage, res: ServerResponse) => {
//     // const html = await generateMainContent(); // HTML bei jedem Request neu generieren
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     // res.write('info site');
//     // res.write(html);
//     res.write(JSON.stringify(jobs));
//     res.end();
//   })
//   .listen(port);

// using express
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('job site api');
});

app.get('/jobs', (req: express.Request, res: express.Response) => {
  res.send(jobs); // showing the jobs on the browser or test.rest or Postmann => http://localhost:8000/jobs
  // res.json(jobs);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
