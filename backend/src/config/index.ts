import { z } from 'zod';

const envSchema = z.object({
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  DATABASE_URL: z.string().optional(),
  NODE_ENV: z.string().optional(),
  PORT: z.string().optional()
});

const parsed = envSchema.parse(process.env);

const config = {
  SUPABASE_URL: parsed.SUPABASE_URL,
  SUPABASE_ANON_KEY: parsed.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: parsed.SUPABASE_SERVICE_ROLE_KEY,
  DATABASE_URL: parsed.DATABASE_URL,
  NODE_ENV: parsed.NODE_ENV || 'development',
  PORT: parsed.PORT ? Number(parsed.PORT) : 4000
};

export default config;
