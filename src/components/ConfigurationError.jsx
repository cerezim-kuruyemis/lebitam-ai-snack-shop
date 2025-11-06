export default function ConfigurationError() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "24px"
    }}>
      <h1 style={{ fontSize: "28px", marginBottom: "12px" }}>⚠️ Konfigürasyon Eksik</h1>
      <p style={{ fontSize: "18px", opacity: 0.8, maxWidth: 440 }}>
        Supabase bağlantı anahtarları ayarlanmamış görünüyor.<br/>
        Lütfen .env dosyasında veya Vercel environment bölümünde<br/>
        <b>VITE_SUPABASE_URL</b> ve <b>VITE_SUPABASE_ANON_KEY</b> ekle.
      </p>
    </div>
  )
}
