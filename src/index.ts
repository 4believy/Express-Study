import express from 'express';
import 'dotenv/config';

const port = process.env.SERVER_PORT;

const app = express();

app.get('/test', (request: express.Request, response: express.Response) => {
  console.log(request.query);
  response.json('Hello world');
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
