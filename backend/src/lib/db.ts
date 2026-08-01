import { Pool } from 'pg';
import config from '../config';

// Database connection layer using pg Pool. If DATABASE_URL is not provided, pool is not created.
let pool: Pool | null = null;

export function getPool() {
  if (!pool && config.DATABASE_URL) {
    pool = new Pool({ connectionString: config.DATABASE_URL });
  }
  return pool;
}

export async function query(text: string, params?: any[]) {
  const p = getPool();
  if (!p) throw new Error('Database pool not initialized');
  return p.query(text, params);
}
