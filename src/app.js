import express from 'express';
import logger from '#config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// The options object must be the SECOND argument INSIDE morgan()
app.use(morgan('combined', { 
  stream: { 
    write: (message) => logger.info(message.trim()) 
  } 
}));

app.get('/', (req, res) => {
  logger.info('Hello from Acquistions!');
  res.status(200).send('hello from acquistions API');
});

export default app;
