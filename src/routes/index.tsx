import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { LeadModal } from "@/components/LeadModal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { TeltechLogo } from "@/components/TeltechLogo";
import {
  ArrowRight,
  PlayCircle,
  Zap,
  Boxes,
  Wallet,
  FileText,
  Bike,
  LineChart,
  Check,
  X,
  Quote,
  Sparkles,
  ShieldCheck,
  Clock,
  AlertTriangle,
} from "lucide-react";

import dashboardAsset from "@/assets/pdv-dashboard.jpg";
import estoqueAsset from "@/assets/pdv-estoque.jpg";
import auditoriaAsset from "@/assets/pdv-auditoria.jpg";
import videoAsset from "@/assets/Video-site.mp4";
import velocidadeAsset from "@/assets/velocidade-site.mp4";

export const Route = createFileRoute("/")({
  head: () => {
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Teltech PDV",
      "operatingSystem": "Windows, Web, Android, iOS",
      "applicationCategory": "BusinessApplication",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
      },
      "description":
        "Sistema de PDV e Frente de Caixa desenvolvido para adegas, disks de bebidas, bares e distribuidoras. Controle de venda composta (copão, doses), rastreamento de lotes, fiado de colaborador e operação offline em contingência.",
      "featureList": [
        "Venda composta de copão, doses e cigarro solto com baixa automática de insumos",
        "Rastreamento de estoque por lotes e controle de validade",
        "Emissão de pedido de compra rápido formatado para WhatsApp",
        "Entrada de mercadoria pelo celular no atacado",
        "Resiliência offline em contingência para vendas em picos de movimento",
        "Controle de consumo de colaboradores e fiado interno com extrato individual",
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qual o melhor sistema de PDV para adegas, disk bebidas e distribuidoras?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "O Teltech PDV é o sistema desenvolvido sob medida para adegas, disks de bebidas, bares e distribuidoras. Ele oferece recursos como baixa automática em vendas compostas (copão, doses e gelo), controle de lotes, controle de fiado e funcionamento 100% offline.",
          },
        },
        {
          "@type": "Question",
          "name": "Como funciona o controle de copão e doses fracionadas no Teltech PDV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Ao vender um copão no Teltech PDV, o sistema realiza a baixa fracionada automática de cada ingrediente do estoque (ex: 1 copo, 1 gelo de sabor, dose de 100ml de bebida), garantindo margem de lucro exata e impedindo perdas.",
          },
        },
        {
          "@type": "Question",
          "name": "O sistema PDV continua vendendo se a internet cair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Sim! O Teltech PDV possui resiliência offline em contingência. Se a internet oscilar no pico do movimento de sexta ou sábado, o caixa continua vendendo normalmente e sincroniza os dados na nuvem assim que a conexão retornar.",
          },
        },
        {
          "@type": "Question",
          "name": "Como funciona o controle de fiado e consumo de colaboradores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "O Teltech PDV registra todo o consumo de funcionários e parentes no turno com a modalidade 'Consumo Colaborador', gerando extratos individuais completos por pessoa sem necessidade de fichas manuais ou caderninhos.",
          },
        },
      ],
    };

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Teltech",
      "url": "https://adegapdv.teltech.com.br",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-14-99760-3870",
        "contactType": "sales",
        "areaServed": "BR",
        "availableLanguage": "Portuguese",
      },
    };

    return {
      meta: [
        { title: "Teltech PDV — O sistema feito sob medida para sua Adega, Disk e Distribuidora" },
        {
          name: "description",
          content:
            "PDV desenvolvido para disk bebidas, adegas, bares e distribuidoras. Venda composta, copão, doses fracionadas, rastreamento completo de estoque e operação offline.",
        },
        {
          name: "keywords",
          content:
            "pdv adega, sistema para adega, pdv disk bebidas, sistema distribuidora de bebidas, controle de copao e doses, sistema de caixa offline, pdv para bar, controle de estoque adega",
        },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://adegapdv.teltech.com.br/" },
        { property: "og:title", content: "Teltech PDV — Sistema para Adega, Disk Bebidas e Distribuidora" },
        {
          property: "og:description",
          content:
            "Venda composta de copão e doses, controle de estoque por lotes, consumo de colaborador e caixa offline. Teste grátis hoje.",
        },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: "Teltech PDV" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Teltech PDV — Sistema para Adega e Disk Bebidas" },
        {
          name: "twitter:description",
          content: "Controle estoque, doses, copão e fiado em um sistema rápido que funciona até offline.",
        },
      ],
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "canonical", href: "https://adegapdv.teltech.com.br/" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(orgSchema),
        },
      ],
    };
  },
  component: LandingPage,
});

/* ------------------------------- Primitives ------------------------------- */

function Nav({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,calc(100%-2rem))]">
      <div className="glass rounded-full flex items-center justify-between pl-5 pr-2 py-2">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-[var(--gradient-primary)] shadow-[0_8px_24px_-8px_oklch(0.62_0.24_264/0.7)]">
            <TeltechLogo size={18} color="white" />
          </span>
          <span className="font-bold tracking-tight">Teltech</span>
          <span className="text-muted-foreground text-sm hidden sm:inline">PDV</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#produto" className="hover:text-foreground transition-colors">Produto</a>
          <a href="#estoque" className="hover:text-foreground transition-colors">Estoque</a>
          <a href="#fiscal" className="hover:text-foreground transition-colors">Fiscal</a>
          <a href="#delivery" className="hover:text-foreground transition-colors">Delivery</a>
          <a href="#comparativo" className="hover:text-foreground transition-colors">Comparativo</a>
        </nav>
        <button onClick={onOpenDemo} className="btn-primary text-sm py-2 px-4 cursor-pointer">
          Demonstração <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}

function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ChapterEyebrow({ n, label }: { n: string; label: string }) {
  return (
    <span className="chip">
      <span className="text-primary font-mono">{n}</span>
      <span className="w-px h-3 bg-border" />
      {label}
    </span>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative w-full py-20 md:py-28 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero({ onOpenDemo }: { onOpenDemo: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* background ambience */}
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] -z-10 animate-pulse-glow"
        style={{ background: "var(--gradient-radial-glow)" }}
        aria-hidden
      />

      <motion.div style={{ y, scale, opacity }} className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <span className="chip mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Novo · Teltech PDV
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[0.95] text-gradient">
            O PDV que sua
            <br />
            adega <span className="text-gradient-blue">merece.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sistema completo para <span className="text-foreground font-medium">disks, adegas, bares e distribuidoras</span>.
            Controle de estoque, vendas por copão e dose, caixa que funciona até offline.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button onClick={onOpenDemo} className="btn-primary cursor-pointer">
              Demonstração Grátis <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/5514997603870?text=Ol%C3%A1!%20Quero%20o%20PDV%20Teltech%20na%20minha%20loja!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <PlayCircle className="w-4 h-4" />
              Quero na minha adega
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <HeroMockup />
        </Reveal>
      </motion.div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mt-20 mx-auto max-w-5xl">
      {/* Blue ambient glow behind frame */}
      <div
        className="absolute inset-x-10 -bottom-10 h-40 blur-3xl -z-10 opacity-70"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />
      {/* Solid dark frame bezel with glow-blue shadow */}
      <div className="rounded-2xl p-2 bg-[#12131a] border border-white/10 glow-blue">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0b0f]">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-[#181920]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">teltech.app/dashboard</span>
          </div>
          <video
            src={videoAsset}
            autoPlay
            loop
            muted
            playsInline
            className="w-full block"
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Chapter 1 ------------------------------- */

function Chapter1Problem() {
  const items = [
    { icon: Clock, title: "Dose sem controle", desc: "Copão, dose e cigarro solto vendidos sem baixa automática no estoque." },
    { icon: AlertTriangle, title: "Fornecedor no achismo", desc: "Pedido de compra feito de cabeça, sem histórico de preço por lote." },
    { icon: Wallet, title: "Fiado invisível", desc: "Consumo de colaborador e fiado interno sem rastreio nenhum." },
    { icon: Boxes, title: "Sistema genérico e confuso", desc: "Interfaces poluídas com telas que você nunca vai usar no seu dia a dia." },
  ];

  return (
    <Section>
      <ChapterEyebrow n="01" label="O problema" />
      <Reveal>
        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-[-0.03em] max-w-3xl text-gradient">
          Sua adega merece mais que um sistema genérico.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Sistemas genéricos são poluídos com telas de oficina mecânica e ordem de serviço.
          Enquanto isso, sua operação real — doses, copão, lotes, fiado — fica sem controle.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(80% 60% at 50% 0%, oklch(0.62 0.24 25 / 0.15), transparent 70%)" }} />
              <it.icon className="w-6 h-6 text-destructive relative" strokeWidth={1.8} />
              <h3 className="mt-5 font-semibold relative">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground relative">{it.desc}</p>
              <div className="mt-5 h-1 w-full rounded-full bg-muted overflow-hidden relative">
                <motion.div
                  initial={{ width: "20%" }}
                  whileInView={{ width: ["20%", "70%", "30%", "85%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  viewport={{ once: false }}
                  className="h-full bg-destructive/70 rounded-full"
                />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Chapter 2 ------------------------------- */

function Chapter2Emerge() {
  const modules = ["Venda Composta (Copão/Doses)", "Controle de lotes e validade", "Pedido de compra via WhatsApp", "Entrada de Estoque no Celular", "Consumo de Colaborador", "Caixa Offline"];
  return (
    <Section id="produto" className="overflow-hidden">
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[900px] h-[600px] -z-10 animate-pulse-glow"
        style={{ background: "var(--gradient-radial-glow)" }}
        aria-hidden
      />
      <ChapterEyebrow n="02" label="Feito pra você" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
              <span className="text-gradient">Tudo que sua adega precisa. </span>
              <span className="text-gradient-blue">Nada que não precisa.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Cada funcionalidade foi construída ouvindo donos de adega, disk e distribuidora.
              Nada genérico — tudo pensado para a sua rotina real.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {modules.map((m, i) => (
                <motion.li
                  key={m}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-7 h-7 rounded-full grid place-items-center bg-primary/15 border border-primary/30 text-primary">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{m}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="glass rounded-2xl p-2 glow-blue">
              <img src={dashboardAsset} alt="Visão geral do PDV Teltech" className="rounded-xl w-full" loading="lazy" />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-6 hidden md:block glass rounded-xl p-3 w-56"
            >
              <img src={estoqueAsset} alt="Controle de estoque" className="rounded-lg" loading="lazy" />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Chapter 3 ------------------------------- */

function Chapter3Speed() {
  return (
    <Section>
      <ChapterEyebrow n="03" label="Operação na sexta à noite" />
      <div className="grid lg:grid-cols-2 gap-16 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
              Sexta-feira lotou? O caixa não para.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              No pico do movimento, a internet oscilou? O PDV Teltech continua vendendo em
              <span className="text-foreground font-medium"> modo offline</span>. As vendas ficam salvas
              e sincronizam automaticamente quando a conexão voltar.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "0.4s", l: "por item" },
                { k: "100%", l: "ativo offline" },
                { k: "15min", l: "pra aprender" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-xl px-4 py-5 text-center">
                  <div className="text-2xl font-bold text-gradient-blue">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-col gap-4 max-w-lg mx-auto w-full">
            {/* Comparison Cards */}
            <div className="glass rounded-2xl p-4">
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Sistema antigo</div>
              <div className="mt-2 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground">Carregando...</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "55%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="h-full bg-destructive/70"
                />
              </div>
            </div>

            <div className="glass rounded-2xl p-4 glow-blue">
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-primary uppercase tracking-wider font-semibold">PDV Teltech</div>
                <motion.span
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, times: [0, 0.22, 0.85, 1] }}
                  className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold"
                >
                  <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} /> Venda concluída!
                </motion.span>
              </div>
              <div className="mt-2 flex items-center gap-2.5">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono text-xs text-foreground">Instantâneo (0.4s)</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%", "100%", "0%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    times: [0, 0.25, 0.85, 1],
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
                    boxShadow: "0 0 12px rgba(37, 99, 235, 0.9)",
                  }}
                />
              </div>
            </div>

            {/* Live Speed Video */}
            <div className="glass rounded-2xl p-2 glow-blue">
              <div className="rounded-xl overflow-hidden border border-border bg-card">
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-border bg-muted/40 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                    <span className="ml-2 font-mono text-muted-foreground text-[10px]">Venda na Prática</span>
                  </div>
                  <span className="flex items-center gap-1 text-primary font-semibold text-[10px]">
                    <Zap className="w-3 h-3 text-primary" /> 0,4s por item
                  </span>
                </div>
                <video
                  src={velocidadeAsset}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Chapter 4 ------------------------------- */

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {prefix}
          <motion.span
            initial={{ "--n": 0 } as any}
            animate={{ "--n": to } as any}
            transition={{ duration: 1.8, ease: "easeOut" }}
            onUpdate={(latest: Record<string, number>) => {
              if (ref.current) {
                const v = latest["--n"] ?? 0;
                ref.current.querySelector("[data-n]")!.textContent = Math.round(v).toLocaleString("pt-BR");
              }
            }}
          >
            <span data-n>0</span>
          </motion.span>
          {suffix}
        </motion.span>
      ) : (
        <>{prefix}0{suffix}</>
      )}
    </span>
  );
}

function Chapter4Stock() {
  const features = [
    "Controle de lotes e validade",
    "Custo rastreado por entrada",
    "Alertas de estoque mínimo",
    "Entrada pelo celular",
    "Importação pela nota fiscal (XML)",
    "Margem real por produto",
  ];
  return (
    <Section id="estoque">
      <ChapterEyebrow n="04" label="Rastreamento de estoque" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <Reveal>
          <div className="glass rounded-2xl p-2">
            <img src={estoqueAsset} alt="Rastreamento completo de estoque" className="rounded-xl w-full" loading="lazy" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-gradient">
              Fornecedor subiu o preço? Sua margem não fura.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              O sistema rastreia o custo exato <span className="text-foreground font-medium">entrada por entrada</span>. Quando o fornecedor aumenta de R$ 4,25 para R$ 4,50, você sabe exatamente qual fardo é qual — e sua margem continua protegida.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-muted-foreground">Produtos</div>
                <div className="text-2xl font-bold mt-1"><Counter to={433} /></div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-muted-foreground">Margem média</div>
                <div className="text-2xl font-bold mt-1 text-success">
                  <Counter to={42} suffix="%" />
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-muted-foreground">Alertas</div>
                <div className="text-2xl font-bold mt-1 text-primary"><Counter to={367} /></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                  <Check className="w-4 h-4 text-primary" strokeWidth={3} /> {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Chapter 5 ------------------------------- */

function Chapter5Cash() {
  const items = [
    "Controle de operadores",
    "Consumo de colaborador rastreado",
    "Fiado interno com extrato individual",
    "Fechamento com auditoria automática",
    "Histórico completo por turno",
  ];
  return (
    <Section>
      <ChapterEyebrow n="05" label="Caixa e fiado" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
              Funcionário pegou cerveja? <span className="text-gradient-blue">Tá registrado.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Controle o consumo de colaboradores e fiado interno com extrato individual por pessoa.
              Fechamento de caixa em minutos, com auditoria automática — sem caderninho, sem suposição.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="glass rounded-2xl p-2 glow-blue">
            <img src={auditoriaAsset} alt="Auditoria e histórico de caixas" className="rounded-xl w-full" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Chapter 6 ------------------------------- */

function Chapter6Fiscal() {
  const steps = ["Produto", "Venda", "Nota Fiscal"];
  return (
    <Section id="fiscal">
      <ChapterEyebrow n="06" label="Emissão fiscal" />
      <div className="mt-6 max-w-3xl">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
            Venda, emita e entregue sem sair do sistema.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-14 glass rounded-3xl p-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3, duration: 0.5 }}
                  className="px-6 py-4 rounded-2xl glass min-w-[160px] text-center"
                >
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Etapa {i + 1}</div>
                  <div className="mt-1 font-semibold">{s}</div>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 + 0.2, duration: 0.5 }}
                    className="hidden md:block w-16 h-px origin-left bg-[var(--gradient-primary)]"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {["NFC-e", "NF-e", "SAT", "Integrações fiscais"].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-center text-sm">
                <FileText className="w-4 h-4 inline mr-2 text-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* -------------------------------- Chapter 7 ------------------------------- */

function Chapter7Ifood() {
  const platforms = ["iFood", "Rappi", "99Food", "Aiqfome", "Uber Eats", "Outros"];
  const flow = ["Pedido chega pelo delivery", "Registra a venda no PDV", "Define a forma de pagamento", "Tudo integrado ao caixa"];
  return (
    <Section id="delivery">
      <ChapterEyebrow n="07" label="Vendas por delivery" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
              Integre vendas de <span className="text-gradient-blue">qualquer delivery.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Não importa qual plataforma de delivery você usa. No PDV, basta registrar a venda,
              selecionar a forma de pagamento e os valores dos produtos são mantidos automaticamente.
              Tudo integrado ao seu caixa e relatórios.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm">
              {["Qualquer plataforma", "Forma de pagamento flexível", "Valores mantidos", "Controle total no caixa"].map((i) => (
                <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" strokeWidth={3} /> {i}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span key={p} className="chip text-xs">
                  <Bike className="w-3 h-3 text-primary" />
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="glass rounded-2xl p-6">
            <div className="space-y-3">
              {flow.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-muted/30 px-4 py-3"
                >
                  <div className="w-8 h-8 grid place-items-center rounded-lg bg-primary/15 text-primary text-xs font-bold">
                    0{i + 1}
                  </div>
                  <div className="flex-1 font-medium text-sm">{step}</div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className="text-xs text-success font-mono"
                  >
                    ✓ ok
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Chapter 8 ------------------------------- */

function Chapter8Dashboard() {
  const indicators = ["Vendas", "Ticket Médio", "Lucro", "Mais vendidos", "Fluxo de Caixa"];
  return (
    <Section>
      <ChapterEyebrow n="08" label="Dashboard executivo" />
      <div className="mt-6 max-w-3xl">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
            Seu negócio em <span className="text-gradient-blue">tempo real.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Decisões tomadas com dados — não com achismo. Toda a operação
            condensada em uma tela que cabe no seu bolso.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 relative">
          <div className="glass rounded-2xl p-2 glow-blue">
            <img src={dashboardAsset} alt="Dashboard executivo Teltech" className="rounded-xl w-full" loading="lazy" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {indicators.map((i) => (
              <span key={i} className="chip">
                <LineChart className="w-3.5 h-3.5 text-primary" />
                {i}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* -------------------------------- Chapter 9 ------------------------------- */

function Chapter9Compare() {
  const old = ["Sistemas complicados", "100 telas inúteis", "Treinamento de semanas", "Sem venda composta", "Sem controle de lotes"];
  const novo = ["Interface simples e intuitiva", "Só o que você usa de verdade", "Aprenda em 15 minutos", "Copão, doses e cigarro solto", "Rastreamento completo de estoque"];
  return (
    <Section id="comparativo">
      <ChapterEyebrow n="09" label="Comparativo" />
      <Reveal>
        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient max-w-3xl">
          Feito pra sua rotina real.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl p-8 border border-border bg-muted/20">
            <div className="chip mb-4">Sistemas genéricos</div>
            <ul className="space-y-3">
              {old.map((i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground line-through decoration-destructive/50">
                  <X className="w-4 h-4 text-destructive flex-none" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl p-8 glass glow-blue">
            <div className="chip mb-4" style={{ background: "oklch(0.62 0.24 264 / 0.15)", borderColor: "oklch(0.62 0.24 264 / 0.3)", color: "oklch(0.85 0.12 258)" }}>
              PDV Teltech
            </div>
            <ul className="space-y-3">
              {novo.map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <Check className="w-4 h-4 text-primary flex-none" strokeWidth={3} />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------- Chapter 10 ------------------------------- */

function Chapter10Social() {
  const testimonials = [
    {
      q: "O copão com baixa automática de dose + gelo resolveu minha vida. Antes eu perdia litros por semana sem saber.",
      a: "Eduardo M.",
      r: "Adega & Conveniência — Interior de SP",
    },
    {
      q: "Fechamento de caixa caiu de 40 minutos para 5. E agora sei exatamente o que cada funcionário consumiu.",
      a: "Renan S.",
      r: "Disk Bebidas — Bauru/SP",
    },
    {
      q: "O pedido via WhatsApp pro fornecedor é genial. Monto o pedido por fardo e envio em 1 clique.",
      a: "Patricia L.",
      r: "Distribuidora — Marília/SP",
    },
  ];

  return (
    <Section>
      <ChapterEyebrow n="10" label="Quem já usa" />
      <Reveal>
        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient max-w-3xl">
          Donos de adega que largaram o caderninho.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={t.a} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 h-full flex flex-col">
              <Quote className="w-6 h-6 text-primary" />
              <p className="mt-4 text-foreground/90 leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.a}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {["Disk Gelados", "Disk Beverage", "Disk do Zé", "Disk Premium", "Disk Mania"].map((b) => (
            <span key={b} className="text-sm font-semibold tracking-wider text-muted-foreground">
              {b.toUpperCase()}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* --------------------------------- Final ---------------------------------- */

function FinalCTA({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <section id="cta" className="relative flex items-center px-6 py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 60% at 50% 50%, oklch(0.62 0.24 264 / 0.25), transparent 70%)" }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" aria-hidden />

      <div className="max-w-5xl mx-auto text-center w-full">
        <Reveal>
          <span className="chip mb-6">
            <TeltechLogo size={15} color="oklch(0.78 0.18 258)" />
            Comece agora
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.035em] leading-[0.95] text-gradient">
            Pronto para transformar
            <br />
            sua <span className="text-gradient-blue">adega?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estoque rastreado, venda por copão e dose, caixa offline e controle de fiado.
            Tudo incluso. Treinamento em 15 minutos. Suporte humano e ágil.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button onClick={onOpenDemo} className="btn-primary text-base py-4 px-7 cursor-pointer">
              Demonstração Grátis <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="https://wa.me/5514997603870?text=Ol%C3%A1!%20Quero%20o%20PDV%20Teltech%20na%20minha%20loja!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base py-4 px-7"
            >
              Quero na minha adega
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" />Teste grátis sem cartão</span>
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" />Cadastro de produtos incluso</span>
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" />Suporte humano e ágil</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-6 h-6 rounded-md bg-[var(--gradient-primary)]">
            <TeltechLogo size={16} color="white" />
          </span>
          <span className="font-semibold text-foreground">Teltech</span>
          <span>· PDV para o varejo moderno</span>
        </div>
        <div>© {new Date().getFullYear()} Teltech. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

/* --------------------------------- Page ---------------------------------- */

function LandingPage() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleOpenDemo = () => setIsLeadModalOpen(true);

  return (
    <main className="relative">
      <Nav onOpenDemo={handleOpenDemo} />
      <Hero onOpenDemo={handleOpenDemo} />
      <Chapter1Problem />
      <Chapter2Emerge />
      <Chapter3Speed />
      <Chapter4Stock />
      <Chapter5Cash />
      <Chapter6Fiscal />
      <Chapter7Ifood />
      <Chapter8Dashboard />
      <Chapter9Compare />
      <Chapter10Social />
      <FinalCTA onOpenDemo={handleOpenDemo} />
      <Footer />

      <LeadModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
      <WhatsAppFloat />
    </main>
  );
}
