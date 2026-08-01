import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';
import healthRouter from './routes/health';
import errorHandler from './middleware/errorHandler';
import config from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(pinoHttp());

// API versioning prefix
app.use('/api/v1/health', healthRouter);

// Root health quick path
app.get('/health', (_req, res) => res.json({ status: 'ok', version: 'v1' }));

// Global error handler
app.use(errorHandler);

export default app;
