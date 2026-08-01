import { Request, Response, NextFunction } from 'express';
import pinoHttp from 'pino-http';

const logger = pinoHttp();

export default function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  // pino-http returns a middleware; we call it directly
  // NOTE: We don't call logger(req, res) here to avoid double-invocation when used globally.
  // This function is kept for future extension.
  next();
}
