import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import toolRoutes from './routes/tool.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/tools', toolRoutes);

app.get('/', (_, res) => {
  res.json({
    message: 'AI Tools Hub API',
    author: 'Shigosag'
  });
});

app.use(errorHandler);

export default app;