import Express from 'express';
import { Request, Response } from 'express';
import { render } from './src/entry-server';

const app = Express();
const port = 3000;

app.use('/static', Express.static('static'));

// const renderFullPage = (html, preloadedState) => {
//   return
// }

const handleRender = (req: Request, res: Response) => {
  const html = render(req.url).stream;
  const preloadedState = render(req.url).preloadedState;
  // res.send(renderFullPage(html, preloadedState));
};

app.use(handleRender);
app.listen(port);
