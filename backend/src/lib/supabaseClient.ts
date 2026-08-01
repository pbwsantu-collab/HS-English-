import { createClient } from '@supabase/supabase-js';
import config from '../config';

// This module exposes a function to create a Supabase client. No secrets are committed.
export function createSupabaseClient() {
  if (!config.SUPABASE_URL || !config.SUPABASE_SERVICE_ROLE_KEY) {
    // Caller must ensure credentials are provided in environment for real use
    return null;
  }

  return createClient(config.SUPABASE_URL, config.SUPABASE_SERVICE_ROLE_KEY);
}
