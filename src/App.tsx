import './App.css'

function App() {

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#0a0a0a",
      color: "white",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      
      <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "20px" }}>
        🚀 K_21 Assist — IA para Ganhar Dinheiro Online
      </h1>

      <p style={{
        fontSize: "20px",
        maxWidth: "600px",
        margin: "0 auto 30px",
        opacity: 0.9
      }}>
        Plataformas automáticas, bots inteligentes e serviços digitais focados em gerar renda no piloto automático. Tudo integrado. Tudo simples. Tudo escalável.
      </p>

      <a 
        href="#servicos"
        style={{
          display: "inline-block",
          padding: "14px 30px",
          background: "linear-gradient(90deg, #ff007f, #6b00ff)",
          color: "white",
          borderRadius: "10px",
          fontSize: "18px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Ver Produtos e Serviços
      </a>

      <section id="servicos" style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
          💼 Serviços e Soluções
        </h2>

        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "left",
          background: "#111",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #333"
        }}>
          <ul style={{ lineHeight: "1.8", fontSize: "18px" }}>
            <li>✔️ Criação de assistentes virtuais</li>
            <li>✔️ Bots automáticos de atendimento</li>
            <li>✔️ Automação de redes sociais</li>
            <li>✔️ Ferramentas digitais para vendas</li>
            <li>✔️ Integração de IA nos negócios</li>
          </ul>
        </div>
      </section>

      <p style={{ marginTop: "50px", opacity: 0.6, fontSize: "14px" }}>
        © 2025 K_21 Assist — Powered by Inteligência Artificial
      </p>

    </div>
  )
}

export default App
