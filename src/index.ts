import 'dotenv/config';
import app from './application/app';

const port = process.env.SERVER_PORT;

const startServer = async () => {
  app.listen(port, () => {
    console.log(`server started at port ${port}`);
  });
};

// app.get('/test', (request: express.Request, response: express.Response) => {
//   response.json('Hello world');
// });

startServer();
