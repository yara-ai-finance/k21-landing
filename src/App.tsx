import "./App.css";
import React, { useState } from "react";

/**
 * FINAL LAYOUT — NO WHATSAPP
 * - Button "Start Free / Começar Grátis" points to STRIPE_CHECKOUT_URL
 * - Replace STRIPE_CHECKOUT_URL with your real Stripe checkout URL when ready
 */

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/PLACEHOLDER";

export default function App() {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const t = (en: string, pt: string) => (lang === "en" ? en : pt);

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#0b1020", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ background: "linear-gradient(90deg,#ff007f,#6b00ff)", color: "#fff", padding: "10px 14px", borderRadius: 10, fontWeight: 800 }}>
            K_21
          </div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>K_21 Assist</div>
        </div>

        <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            onClick={() => setLang(lang === "en" ? "pt" : "en")}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 700
            }}
            aria-label="toggle language"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
          <a href="#start" style={{ textDecoration: "none", color: "#fff", fontWeight: 700 }}>
            {t("Start Free", "Começar")}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "28px auto", padding: "0 20px", textAlign: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
          <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)", padding: 28, borderRadius: 16, border: "1px solid rgba(255,255,255,0.04)" }}>
            <h1 style={{ fontSize: 34, margin: 0, lineHeight: 1.05 }}>
              {t("Transform Your Business with Intelligent AI Automation", "Transforme seu negócio com Automação IA")}
            </h1>

            <p style={{ marginTop: 14, fontSize: 18, color: "rgba(255,255,255,0.85)", maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
              {t(
                "AI that captures leads, writes copy, automates support and sells 24/7. Start today — no code, instant deploy.",
                "IA que captura leads, escreve textos, automatiza suporte e vende 24/7. Comece hoje — sem código, deploy instantâneo."
              )}
            </p>

            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                id="start"
                href={STRIPE_CHECKOUT_URL}
                style={{
                  background: "linear-gradient(90deg,#ff007f,#6b00ff)",
                  padding: "14px 26px",
                  borderRadius: 12,
                  color: "#fff",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(107,0,255,0.16)"
                }}
                aria-label={t("Start Free", "Começar Grátis")}
              >
                {t("Start Free", "Começar Grátis")}
              </a>

              <a
                href="#pricing"
                style={{
                  background: "transparent",
                  padding: "12px 20px",
                  borderRadius: 12,
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontWeight: 700
                }}
              >
                {t("See Plans", "Ver Planos")}
              </a>
            </div>

            <div style={{ marginTop: 18, color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
              {t("No credit card required • Start in minutes", "Sem cartão • Comece em minutos")}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1100, margin: "18px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>{t("What K_21 Assist Does", "O que o K_21 Assist faz")}</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12 }}>
          {[
            { title: t("AI Sales Assistant", "Assistente de Vendas IA"), desc: t("Capture, qualify & convert leads 24/7", "Captura, qualifica e converte leads 24/7") },
            { title: t("Content Engine", "Gerador de Conteúdo"), desc: t("Automate posts, ads, emails and landing text", "Automatize posts, anúncios, emails e textos") },
            { title: t("Multilingual Support", "Suporte Multilingue"), desc: t("English, PT, ES — global-ready", "Inglês, PT, ES — pronto para o mundo") },
            { title: t("No-Code Deployment", "Deploy sem Código"), desc: t("Live site in minutes — Vercel powered", "Site no ar em minutos — rodando na Vercel") }
          ].map((f, i) => (
            <div key={i} style={{ padding: 18, borderRadius: 12, background: "#07102a", border: "1px solid rgba(255,255,255,0.03)" }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{f.title}</div>
              <div style={{ color: "rgba(255,255,255,0.7)" }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ maxWidth: 1100, margin: "26px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>{t("Pricing (USD)", "Preços (USD)")}</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
          <div style={{ padding: 18, borderRadius: 12, background: "#07102a", border: "1px solid rgba(255,255,255,0.03)" }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Free</div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Basic AI assistant, 100 messages/month</div>
            <div style={{ marginTop: 12, fontWeight: 800 }}>$0</div>
          </div>

          <div style={{ padding: 18, borderRadius: 12, background: "linear-gradient(180deg,#07102a,#051025)", border: "1px solid rgba(255,255,255,0.04)" }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Growth</div>
            <div style={{ color: "rgba(255,255,255,0.8)", marginTop: 8 }}>Full assistant, content generation, analytics</div>
            <div style={{ marginTop: 12, fontWeight: 800 }}>$49 / month</div>
            <a href={STRIPE_CHECKOUT_URL} style={{ display: "inline-block", marginTop: 12, padding: "8px 12px", background: "#7c3aed", color: "#fff", borderRadius: 8, textDecoration: "none", fontWeight: 800 }}>
              {t("Choose Plan", "Escolher")}
            </a>
          </div>

          <div style={{ padding: 18, borderRadius: 12, background: "#07102a", border: "1px solid rgba(255,255,255,0.03)" }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Agency</div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Multi-seat, priority support, white-label</div>
            <div style={{ marginTop: 12, fontWeight: 800 }}>$199 / month</div>
            <a href={STRIPE_CHECKOUT_URL} style={{ display: "inline-block", marginTop: 12, padding: "8px 12px", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", borderRadius: 8, textDecoration: "none", fontWeight: 800 }}>
              {t("Contact Sales", "Falar com Vendas")}
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 900, margin: "28px auto", padding: "0 20px", textAlign: "left" }}>
        <h2 style={{ fontSize: 24 }}>{t("How it works", "Como funciona")}</h2>
        <ol style={{ color: "rgba(255,255,255,0.8)", marginTop: 12, lineHeight: 1.8 }}>
          <li>{t("Sign up & connect your channels (website, social)", "Registre-se e conecte seus canais (site, redes)")}</li>
          <li>{t("Pick a template and customize your assistant", "Escolha um template e personalize o assistente")}</li>
          <li>{t("Start capturing leads and scaling revenue", "Comece a capturar leads e escalar receita")}</li>
        </ol>
      </section>

      {/* Small FAQ */}
      <section style={{ maxWidth: 900, margin: "18px auto 80px", padding: "0 20px" }}>
        <h3 style={{ fontSize: 20 }}>{t("FAQ", "Perguntas Frequentes")}</h3>
        <div style={{ marginTop: 8, color: "rgba(255,255,255,0.8)" }}>
          <div style={{ marginBottom: 8 }}>
            <strong>{t("Is it free?", "É grátis?")} </strong> {t("Yes — free plan available", "Sim — existe plano gratuito")}
          </div>
          <div>
            <strong>{t("Do I need a credit card?", "Preciso de cartão?")} </strong> {t("No — start without a card", "Não — comece sem cartão")}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.03)", padding: "24px 20px", textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
        <div style={{ marginBottom: 8 }}>© {new Date().getFullYear()} K_21 Assist</div>
        <div style={{ fontSize: 13 }}>{t("Built for creators & agencies • Sell in USD", "Criado para criadores e agências • Venda em USD")}</div>
      </footer>
    </div>
  );
                       }
                    
