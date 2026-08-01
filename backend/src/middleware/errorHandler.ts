import { Request, Response, NextFunction } from 'express';
import pino from 'pino';

const logger = pino();

export default function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  logger.error({ err }, 'Unhandled error');

  const status = (err as any)?.status || 500;
  const message = (err as any)?.message || 'Internal Server Error';

  res.status(status).json({ error: message });
}
