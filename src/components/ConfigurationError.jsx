export default function ConfigurationError() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Configuration Error</h2>
      <p>Missing Supabase Project URL or Public Anon Key.</p>
      <p>Please set your environment variables properly.</p>
    </div>
  );
}

