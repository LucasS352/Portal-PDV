import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Phone, User, CheckCircle2, X, Zap, ShieldCheck, Clock } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "5514997603870";
const DEMO_URL = "https://pdv.smartek.com.br/login";

export function LeadModal({ isOpen, onOpenChange }: LeadModalProps) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = whatsapp.replace(/\D/g, "");

    if (!nome.trim()) {
      setError("Informe seu nome para continuar.");
      return;
    }
    if (cleanPhone.length < 10) {
      setError("Informe um WhatsApp válido com DDD.");
      return;
    }

    setError("");
    setIsSubmitted(true);

    try {
      const leads = JSON.parse(localStorage.getItem("pdv_leads") || "[]");
      leads.push({ nome, whatsapp, date: new Date().toISOString() });
      localStorage.setItem("pdv_leads", JSON.stringify(leads));
    } catch {
      // ignore
    }

    const message = encodeURIComponent(
      `Olá! Meu nome é *${nome.trim()}* (${whatsapp.trim()}). Acabei de solicitar o acesso de teste ao PDV Teltech!`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      window.location.href = DEMO_URL;
    }, 2000);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setIsSubmitted(false);
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
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full max-w-[460px] overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(180deg, oklch(0.13 0.015 260) 0%, oklch(0.09 0.008 260) 100%)",
                border: "1px solid oklch(1 0 0 / 0.08)",
                boxShadow: "0 40px 100px -20px oklch(0 0 0 / 0.8), 0 0 80px -20px oklch(0.62 0.24 264 / 0.2)",
              }}
            >
              {/* Glow accent */}
              <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[200px] pointer-events-none"
                style={{
                  background: "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 264 / 0.2), transparent 70%)",
                }}
              />

              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 grid place-items-center rounded-full cursor-pointer transition-all duration-200 hover:bg-white/10"
                style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.08)" }}
              >
                <X className="w-3.5 h-3.5 text-white/50" />
              </button>

              <div className="relative p-8">
                {isSubmitted ? (
                  /* ---- Success State ---- */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                      className="w-16 h-16 mx-auto rounded-full grid place-items-center mb-6"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.72 0.18 155 / 0.2), oklch(0.72 0.18 155 / 0.05))",
                        border: "1px solid oklch(0.72 0.18 155 / 0.3)",
                      }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: "oklch(0.72 0.18 155)" }} />
                    </motion.div>

                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      Acesso liberado!
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "oklch(0.65 0.015 260)" }}>
                      Abrimos seu WhatsApp para contato direto.<br />
                      Redirecionando para o sistema...
                    </p>

                    <div className="mt-8">
                      <a
                        href={DEMO_URL}
                        onClick={handleClose}
                        className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                        style={{
                          background: "var(--gradient-primary)",
                          boxShadow: "0 10px 30px -10px oklch(0.62 0.24 264 / 0.5)",
                        }}
                      >
                        Acessar o PDV Teltech <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* ---- Form State ---- */
                  <>
                    {/* Header */}
                    <div className="mb-7">
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5"
                        style={{
                          background: "oklch(0.62 0.24 264 / 0.1)",
                          border: "1px solid oklch(0.62 0.24 264 / 0.2)",
                          color: "oklch(0.78 0.18 258)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.72 0.18 155)" }} />
                        Teste grátis
                      </div>

                      <h2 className="text-[1.65rem] font-bold tracking-tight leading-tight text-white">
                        Conheça o sistema por dentro
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "oklch(0.55 0.015 260)" }}>
                        Preencha abaixo e acesse o ambiente de demonstração agora mesmo.
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
                            background: "oklch(0.62 0.23 25 / 0.1)",
                            border: "1px solid oklch(0.62 0.23 25 / 0.2)",
                            color: "oklch(0.8 0.15 25)",
                          }}
                        >
                          {error}
                        </motion.div>
                      )}

                      {/* Nome */}
                      <div>
                        <label htmlFor="lead-nome" className="flex items-center gap-1.5 mb-2 text-xs font-medium" style={{ color: "oklch(0.7 0.01 260)" }}>
                          <User className="w-3.5 h-3.5" style={{ color: "oklch(0.62 0.24 264)" }} />
                          Nome
                        </label>
                        <div
                          className="relative rounded-xl overflow-hidden transition-all duration-300"
                          style={{
                            border: focusedField === "nome"
                              ? "1px solid oklch(0.62 0.24 264 / 0.5)"
                              : "1px solid oklch(1 0 0 / 0.08)",
                            boxShadow: focusedField === "nome"
                              ? "0 0 20px -5px oklch(0.62 0.24 264 / 0.15)"
                              : "none",
                          }}
                        >
                          <input
                            id="lead-nome"
                            type="text"
                            placeholder="Como podemos te chamar?"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            onFocus={() => setFocusedField("nome")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full h-12 px-4 bg-transparent text-sm text-white placeholder:text-white/20 outline-none"
                            style={{ background: "oklch(1 0 0 / 0.03)" }}
                            autoFocus
                          />
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label htmlFor="lead-whatsapp" className="flex items-center gap-1.5 mb-2 text-xs font-medium" style={{ color: "oklch(0.7 0.01 260)" }}>
                          <Phone className="w-3.5 h-3.5" style={{ color: "oklch(0.62 0.24 264)" }} />
                          WhatsApp
                        </label>
                        <div
                          className="relative rounded-xl overflow-hidden transition-all duration-300"
                          style={{
                            border: focusedField === "whatsapp"
                              ? "1px solid oklch(0.62 0.24 264 / 0.5)"
                              : "1px solid oklch(1 0 0 / 0.08)",
                            boxShadow: focusedField === "whatsapp"
                              ? "0 0 20px -5px oklch(0.62 0.24 264 / 0.15)"
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
                            className="w-full h-12 px-4 bg-transparent text-sm text-white placeholder:text-white/20 outline-none"
                            style={{ background: "oklch(1 0 0 / 0.03)" }}
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full h-[52px] rounded-2xl text-sm font-semibold text-white cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                          style={{
                            background: "var(--gradient-primary)",
                            boxShadow: "0 12px 35px -10px oklch(0.62 0.24 264 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.15)",
                          }}
                        >
                          Acessar demonstração
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>

                    {/* Trust signals */}
                    <div className="mt-6 flex items-center justify-center gap-5">
                      {[
                        { icon: Zap, label: "Acesso imediato" },
                        { icon: ShieldCheck, label: "Sem compromisso" },
                        { icon: Clock, label: "Leva 10 segundos" },
                      ].map((item) => (
                        <span
                          key={item.label}
                          className="flex items-center gap-1.5 text-[10px] font-medium"
                          style={{ color: "oklch(0.5 0.01 260)" }}
                        >
                          <item.icon className="w-3 h-3" style={{ color: "oklch(0.72 0.18 155)" }} />
                          {item.label}
                        </span>
                      ))}
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
