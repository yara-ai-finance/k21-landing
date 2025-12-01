import "./App.css";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
      }}
    >
      {/* HEADER */}
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        🚀 K_21 Assist – IA para Ganhar em Dólar / AI to Scale Your Business
      </h1>
      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 40px" }}>
        Inteligência artificial que vende, cria conteúdo e automatiza o seu
        negócio 24h.  
        AI that automates sales, content and support — built to grow your revenue.
      </p>

      {/* CTA BUTTONS */}
      <div style={{ marginBottom: "40px" }}>
        <a
          href="#start"
          style={{
            padding: "14px 30px",
            backgroundColor: "#7c3aed",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "10px"
          }}
        >
          Start Free
        </a>

        <a
          href="#features"
          style={{
            padding: "14px 30px",
            backgroundColor: "#1f1f1f",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            border: "1px solid #7c3aed"
          }}
        >
          Ver Funcionalidades
        </a>
      </div>

      {/* FEATURES SECTION */}
      <h2 id="features" style={{ fontSize: "26px", marginBottom: "20px" }}>
        ⚡ Tudo o que você precisa para lucrar / Everything you need to scale
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
          fontSize: "18px",
          lineHeight: "1.6"
        }}
      >
        <li>• IA que atende clientes automaticamente (24/7)</li>
        <li>• AI that captures and qualifies leads for you</li>
        <li>• Criação automática de posts, scripts e textos</li>
        <li>• Automatic content, ads, emails and scripts generator</li>
        <li>• Responde em qualquer idioma</li>
        <li>• Multilingual support (English, PT, ES and more)</li>
        <li>• Faz vendas, suporte e geração de conteúdo</li>
        <li>• Full automation for sales + support + content</li>
      </ul>

      {/* FINAL CTA */}
      <h2 style={{ marginTop: "60px", fontSize: "28px" }}>
        Pronta para ganhar em dólar? / Ready to scale in USD?
      </h2>

      <a
        id="start"
        href="#"
        style={{
          padding: "16px 40px",
          backgroundColor: "#7c3aed",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
          display: "inline-block",
          marginTop: "20px"
        }}
      >
        Começar Agora / Start Now
      </a>
    </div>
  );
        }
