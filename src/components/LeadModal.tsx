import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Phone, User, CheckCircle2, X, Zap, ShieldCheck, Clock, Sparkles, PlayCircle, Lock } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const DEMO_URL = "https://pdvdemo.teltech.com.br/demo";

export function LeadModal({ isOpen, onOpenChange }: LeadModalProps) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formatPhone = (value: string) => {
    const nums = value.replace(/\D/g, "");
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    if (nums.length <= 11) return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = whatsapp.replace(/\D/g, "");

    if (!nome.trim()) {
      setError("Informe seu nome para acessar a demonstração.");
      return;
    }
    if (cleanPhone.length < 10) {
      setError("Informe um WhatsApp válido com DDD.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    let redirectUrl = DEMO_URL;

    try {
      const isLocal = window.location.hostname.includes("localhost");
      const apiHost = isLocal ? "http://localhost:3524" : "https://pdvdemo.teltech.com.br";
      const frontendHost = isLocal ? "http://localhost:3525" : "https://pdvdemo.teltech.com.br";

      const res = await fetch(`${apiHost}/api/demo/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nome.trim(), whatsapp: cleanPhone }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.access_token && data.user) {
          const tokenStr = data.access_token;
          const userStr = encodeURIComponent(JSON.stringify(data.user));
          const opStr = data.operator ? encodeURIComponent(JSON.stringify(data.operator)) : "";
          const regStr = data.cashRegister ? encodeURIComponent(JSON.stringify(data.cashRegister)) : "";

          redirectUrl = `${frontendHost}/demo?token=${tokenStr}&user=${userStr}&operator=${opStr}&register=${regStr}`;
        }
      }
    } catch (e) {
      console.error("Erro ao registrar lead na API demo", e);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Redirecionamento instantâneo após preencher
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 600);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setNome("");
      setWhatsapp("");
      setError("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full max-w-[480px] overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(180deg, oklch(0.14 0.02 260) 0%, oklch(0.08 0.01 260) 100%)",
                border: "1px solid oklch(1 0 0 / 0.12)",
                boxShadow: "0 40px 100px -20px oklch(0 0 0 / 0.9), 0 0 90px -20px oklch(0.62 0.24 264 / 0.3)",
              }}
            >
              {/* Top Banner Persuasivo */}
              <div 
                className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(90deg, oklch(0.62 0.24 264), oklch(0.72 0.18 155))",
                  color: "#ffffff"
                }}
              >
                <Zap className="w-3.5 h-3.5 fill-current animate-bounce" />
                <span>Ambiente Interativo Liberado Instalação Zero</span>
              </div>

              {/* Glow accent */}
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-[340px] h-[220px] pointer-events-none"
                style={{
                  background: "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 264 / 0.25), transparent 70%)",
                }}
              />

              {/* Botão Fechar */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-4 z-10 w-8 h-8 grid place-items-center rounded-full cursor-pointer transition-all duration-200 hover:bg-white/10"
                style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.08)" }}
              >
                <X className="w-4 h-4 text-white/60" />
              </button>

              <div className="relative p-7 sm:p-8">
                {isSubmitted ? (
                  /* ---- Success & Immediate Redirect State ---- */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 mx-auto rounded-full grid place-items-center mb-5"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.72 0.18 155 / 0.25), oklch(0.72 0.18 155 / 0.05))",
                        border: "1px solid oklch(0.72 0.18 155 / 0.4)",
                      }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: "oklch(0.72 0.18 155)" }} />
                    </motion.div>

                    <h3 className="text-2xl font-black tracking-tight text-white">
                      Entrando no PDV...
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "oklch(0.75 0.015 260)" }}>
                      Seu perfil de teste foi configurado.<br />
                      Redirecionando você para a tela do caixa agora mesmo!
                    </p>

                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  </motion.div>
                ) : (
                  /* ---- Form State ---- */
                  <>
                    {/* Header Persuasivo */}
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-[1.7rem] font-black tracking-tight leading-tight text-white">
                        Experimente o Sistema <span style={{ color: "oklch(0.78 0.18 258)" }}>Ao Vivo Agora</span>
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: "oklch(0.7 0.015 260)" }}>
                        Ao colocar seu nome abaixo, você entrará diretamente na tela do caixa com dados de teste já carregados.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="px-4 py-2.5 rounded-xl text-xs font-medium"
                          style={{
                            background: "oklch(0.62 0.23 25 / 0.15)",
                            border: "1px solid oklch(0.62 0.23 25 / 0.3)",
                            color: "oklch(0.85 0.15 25)",
                          }}
                        >
                          {error}
                        </motion.div>
                      )}

                      {/* Campo Nome */}
                      <div>
                        <label htmlFor="lead-nome" className="flex items-center justify-between mb-1.5 text-xs font-semibold" style={{ color: "oklch(0.85 0.01 260)" }}>
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" style={{ color: "oklch(0.62 0.24 264)" }} />
                            Seu Nome
                          </span>
                          <span className="text-[10px] text-emerald-400 font-normal">Necessário para abrir seu caixa demo</span>
                        </label>
                        <div
                          className="relative rounded-xl overflow-hidden transition-all duration-300"
                          style={{
                            border: focusedField === "nome"
                              ? "1px solid oklch(0.62 0.24 264 / 0.8)"
                              : "1px solid oklch(1 0 0 / 0.12)",
                            boxShadow: focusedField === "nome"
                              ? "0 0 20px -5px oklch(0.62 0.24 264 / 0.3)"
                              : "none",
                          }}
                        >
                          <input
                            id="lead-nome"
                            type="text"
                            placeholder="Como deseja ser chamado?"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            onFocus={() => setFocusedField("nome")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full h-12 px-4 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                            style={{ background: "oklch(1 0 0 / 0.04)" }}
                            autoFocus
                          />
                        </div>
                      </div>

                      {/* Campo WhatsApp */}
                      <div>
                        <label htmlFor="lead-whatsapp" className="flex items-center justify-between mb-1.5 text-xs font-semibold" style={{ color: "oklch(0.85 0.01 260)" }}>
                          <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" style={{ color: "oklch(0.62 0.24 264)" }} />
                            WhatsApp (DDD + Número)
                          </span>
                          <span className="text-[10px] text-zinc-400 font-normal">Para enviar dados de acesso</span>
                        </label>
                        <div
                          className="relative rounded-xl overflow-hidden transition-all duration-300"
                          style={{
                            border: focusedField === "whatsapp"
                              ? "1px solid oklch(0.62 0.24 264 / 0.8)"
                              : "1px solid oklch(1 0 0 / 0.12)",
                            boxShadow: focusedField === "whatsapp"
                              ? "0 0 20px -5px oklch(0.62 0.24 264 / 0.3)"
                              : "none",
                          }}
                        >
                          <input
                            id="lead-whatsapp"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={whatsapp}
                            onChange={handlePhoneChange}
                            onFocus={() => setFocusedField("whatsapp")}
                            onBlur={() => setFocusedField(null)}
                            maxLength={15}
                            className="w-full h-12 px-4 bg-transparent text-sm text-white placeholder:text-white/30 outline-none font-mono"
                            style={{ background: "oklch(1 0 0 / 0.04)" }}
                          />
                        </div>
                      </div>

                      {/* Botão de Ação Destacado e Persuasivo */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-[54px] rounded-2xl text-sm font-bold text-white cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70"
                          style={{
                            background: "linear-gradient(135deg, oklch(0.62 0.24 264) 0%, oklch(0.52 0.24 264) 100%)",
                            boxShadow: "0 12px 35px -10px oklch(0.62 0.24 264 / 0.6), inset 0 1px 0 oklch(1 0 0 / 0.2)",
                          }}
                        >
                          {isSubmitting ? (
                            <span>Iniciando ambiente...</span>
                          ) : (
                            <>
                              <span>ACESSAR O SISTEMA AGORA</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>

                    {/* Explicação Clara do que vai acontecer */}
                    <div className="mt-5 p-3.5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-[11px] text-zinc-300 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">O que acontece ao clicar?</strong>
                        Você entra direto na tela do PDV com R$ 51.000 em estoque e 30 dias de vendas prontas para você simular vendas, sangrias e relatórios!
                      </div>
                    </div>

                    {/* Trust Signals */}
                    <div className="mt-5 flex items-center justify-between text-[10px] font-medium text-zinc-400 border-t border-white/5 pt-4">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-emerald-400" />
                        Entrada Direta
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        Sem Cartão de Crédito
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        Acesso em 5 Segundos
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
