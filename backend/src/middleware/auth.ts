import { Request, Response, NextFunction } from 'express';
import { User } from '../../shared/src/types';

// Basic auth middleware structure — real auth integration (Supabase/JWT) will be added later.
export default function authMiddleware(req: Request & { user?: User | null }, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) {
    // Not authenticated — continue as anonymous for now
    req.user = null;
    return next();
  }

  // Placeholder: parse token and populate req.user
  // e.g., verify JWT or Supabase session
  req.user = null;
  return next();
}
