import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Debug from 'debug';
import logger from 'morgan';
import env from './helper/config';
import router from './routes';
import connectToDB from './database/config';

if (process.env.NODE_ENV !== 'production') dotenv.config();

const app = express();
const debug = Debug(env.debug);
const isTest = process.env.NODE_ENV === 'test';
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(express.json());

process.on('uncaughtException', (err) => {
  debug(err.stack);
  process.exit(1);
});

// Handle non existing routes
app.all('*', (req, res) => res.status(404).json({
  status: 404,
  error: 'Page not found',
}));

connectToDB().then(async () => {
  if (!isTest) {
    app.listen(PORT, () => {
      debug(`Server running on port:${PORT}`);
    });
  }
});
export default app;
