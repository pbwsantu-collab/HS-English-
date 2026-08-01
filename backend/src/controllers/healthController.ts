import { Request, Response } from 'express';

export async function health(_req: Request, res: Response) {
  // Lightweight health response. DB or external checks can be added here.
  return res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
}
