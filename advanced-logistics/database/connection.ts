// Placeholder for future Supabase PostgreSQL database connection
export interface SupabaseConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

export interface DatabaseConnectionStub {
  status: 'placeholder';
  config: SupabaseConfig;
  connect: () => Promise<null>;
}

const normalizeUrl = (url?: string): string => {
  if (!url) return '';
  return url.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
};

export const getSupabaseConfig = (): SupabaseConfig => ({
  supabaseUrl: normalizeUrl(process.env.SUPABASE_URL) || 'https://placeholder.supabase.co',
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || 'placeholder-anon-key',
});

export const databaseConnection: DatabaseConnectionStub = {
  status: 'placeholder',
  config: getSupabaseConfig(),
  connect: async () => null,
};

export default databaseConnection;
