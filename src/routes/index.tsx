import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
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

import dashboardAsset from "@/assets/pdv-dashboard.png.asset.json";
import estoqueAsset from "@/assets/pdv-estoque.png.asset.json";
import auditoriaAsset from "@/assets/pdv-auditoria.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teltech PDV — O sistema que substitui o que ficou em 2015" },
      {
        name: "description",
        content:
          "PDV moderno para mercados, conveniências, distribuidoras e adegas. Estoque inteligente, caixa auditado, NFC-e, integração iFood e dashboard em tempo real.",
      },
    ],
  }),
  component: LandingPage,
});

/* ------------------------------- Primitives ------------------------------- */

function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,calc(100%-2rem))]">
      <div className="glass rounded-full flex items-center justify-between pl-5 pr-2 py-2">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-[var(--gradient-primary)] shadow-[0_8px_24px_-8px_oklch(0.62_0.24_264/0.7)]">
            <Sparkles className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-bold tracking-tight">Teltech</span>
          <span className="text-muted-foreground text-sm hidden sm:inline">PDV</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#produto" className="hover:text-foreground transition-colors">Produto</a>
          <a href="#estoque" className="hover:text-foreground transition-colors">Estoque</a>
          <a href="#fiscal" className="hover:text-foreground transition-colors">Fiscal</a>
          <a href="#ifood" className="hover:text-foreground transition-colors">iFood</a>
          <a href="#comparativo" className="hover:text-foreground transition-colors">Comparativo</a>
        </nav>
        <a href="#cta" className="btn-primary text-sm py-2 px-4">
          Demonstração <ArrowRight className="w-4 h-4" />
        </a>
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
    <section id={id} className={`relative min-h-screen w-full flex items-center py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
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
            Novo · PDV Teltech v4
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[0.95] text-gradient">
            Seu sistema está
            <br />
            preso em <span className="text-gradient-blue">2015.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Enquanto você perde tempo com travamentos, lentidão e processos manuais,
            o <span className="text-foreground font-medium">PDV da Teltech</span> transforma
            sua operação em uma máquina de vendas.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#cta" className="btn-primary">
              Solicitar Demonstração <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#produto" className="btn-ghost">
              <PlayCircle className="w-4 h-4" />
              Ver o Sistema em Ação
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
      {/* glow */}
      <div
        className="absolute inset-x-10 -bottom-10 h-40 blur-3xl -z-10 opacity-70"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />
      <div className="glass rounded-2xl p-2 glow-blue">
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-muted/40">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">teltech.app/dashboard</span>
          </div>
          <img
            src={dashboardAsset.url}
            alt="Dashboard do PDV Teltech mostrando vendas em tempo real"
            className="w-full block"
            loading="eager"
          />
        </div>
      </div>

      {/* floating cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute -left-10 top-20 glass rounded-xl px-4 py-3 items-center gap-3"
      >
        <div className="w-9 h-9 grid place-items-center rounded-lg bg-success/15 text-success">
          <Check className="w-4 h-4" strokeWidth={3} />
        </div>
        <div className="text-left">
          <div className="text-xs text-muted-foreground">Venda confirmada</div>
          <div className="text-sm font-semibold">R$ 247,80</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute -right-8 bottom-16 glass rounded-xl px-4 py-3 items-center gap-3"
      >
        <div className="w-9 h-9 grid place-items-center rounded-lg bg-primary/15 text-primary">
          <Zap className="w-4 h-4" strokeWidth={2.5} />
        </div>
        <div className="text-left">
          <div className="text-xs text-muted-foreground">Tempo médio caixa</div>
          <div className="text-sm font-semibold">0,4s por item</div>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------- Chapter 1 ------------------------------- */

function Chapter1Problem() {
  const items = [
    { icon: Clock, title: "Tela travando", desc: "Sistemas que congelam no pico do movimento." },
    { icon: AlertTriangle, title: "Estoque errado", desc: "Saldo que nunca bate com a prateleira." },
    { icon: Wallet, title: "Caixa divergente", desc: "Fechamentos que somem R$ no fim do dia." },
    { icon: Boxes, title: "Sem controle", desc: "Produtos sem cadastro, preço ou validade." },
  ];

  return (
    <Section>
      <ChapterEyebrow n="01" label="O problema" />
      <Reveal>
        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-[-0.03em] max-w-3xl text-gradient">
          Sistemas antigos custam dinheiro.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Muitos mercados ainda utilizam sistemas criados há décadas. Interfaces
          confusas, lentidão e falta de integração fazem parte da rotina — e
          aparecem como prejuízo no fim do mês.
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
  const modules = ["Dashboard", "Estoque", "Auditoria de Caixa", "Pedidos", "Produtos"];
  return (
    <Section id="produto" className="overflow-hidden">
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[900px] h-[600px] -z-10 animate-pulse-glow"
        style={{ background: "var(--gradient-radial-glow)" }}
        aria-hidden
      />
      <ChapterEyebrow n="02" label="A solução" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
              <span className="text-gradient">O PDV que nasceu para o </span>
              <span className="text-gradient-blue">varejo moderno.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Um sistema único que reúne tudo o que sua operação precisa.
              Modular, rápido, e desenhado para escalar com o seu negócio.
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
              <img src={dashboardAsset.url} alt="Visão geral do PDV Teltech" className="rounded-xl w-full" loading="lazy" />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-6 hidden md:block glass rounded-xl p-3 w-56"
            >
              <img src={estoqueAsset.url} alt="Controle de estoque" className="rounded-lg" loading="lazy" />
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
      <ChapterEyebrow n="03" label="Velocidade" />
      <div className="grid lg:grid-cols-2 gap-16 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
              Seu operador não pode esperar.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Cada segundo perdido no caixa significa filas, clientes irritados e
              menos vendas. O PDV Teltech responde no toque — sem espera, sem
              "carregando".
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "0.4s", l: "por item" },
                { k: "100%", l: "offline-ready" },
                { k: "60fps", l: "interface" },
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
          <div className="grid grid-cols-1 gap-4">
            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Sistema antigo</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground">Carregando...</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "55%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="h-full bg-destructive/70"
                />
              </div>
            </div>

            <div className="glass rounded-2xl p-5 glow-blue">
              <div className="text-xs text-primary uppercase tracking-wider font-semibold">PDV Teltech</div>
              <div className="mt-3 flex items-center gap-3">
                <Zap className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground">Instantâneo.</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-[var(--gradient-primary)] w-full" />
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
    "Controle físico",
    "Alertas de reposição",
    "Entrada de estoque",
    "Categorias",
    "Fornecedores",
    "Lucratividade por produto",
  ];
  return (
    <Section id="estoque">
      <ChapterEyebrow n="04" label="Estoque inteligente" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <Reveal>
          <div className="glass rounded-2xl p-2">
            <img src={estoqueAsset.url} alt="Controle de estoque do PDV Teltech" className="rounded-xl w-full" loading="lazy" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-gradient">
              Saiba exatamente o que entra, o que sai e o que gera lucro.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-muted-foreground">SKUs</div>
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
    "Fechamento de caixa",
    "Histórico completo",
    "Auditoria",
    "Segurança operacional",
  ];
  return (
    <Section>
      <ChapterEyebrow n="05" label="Gestão financeira" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
              Cada centavo <span className="text-gradient-blue">rastreado.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Abra e feche caixa com auditoria automática. Saiba quem operou,
              quando, com que fundo e qual o resultado final — sem planilhas, sem
              suposições.
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
            <img src={auditoriaAsset.url} alt="Auditoria e histórico de caixas" className="rounded-xl w-full" loading="lazy" />
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
  const flow = ["iFood", "PDV", "Cozinha", "Entrega"];
  return (
    <Section id="ifood">
      <ChapterEyebrow n="07" label="Integração iFood" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient">
              Os pedidos chegam <span className="text-gradient-blue">sozinhos.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sem redigitação. Sem erros. Sem perder pedido no horário de pico.
              O PDV recebe, organiza e dispara para a cozinha e entrega.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm">
              {["Integração automática", "Sem redigitação", "Menos erros", "Mais agilidade"].map((i) => (
                <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" strokeWidth={3} /> {i}</li>
              ))}
            </ul>
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
                  <div className="flex-1 font-medium">{step}</div>
                  {i === 0 && <Bike className="w-4 h-4 text-primary" />}
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
            <img src={dashboardAsset.url} alt="Dashboard executivo Teltech" className="rounded-xl w-full" loading="lazy" />
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
  const old = ["Lentos", "Difíceis de usar", "Sem integração", "Relatórios limitados", "Interface ultrapassada"];
  const novo = ["Rápido", "Moderno", "Completo", "Integrado", "Inteligente"];
  return (
    <Section id="comparativo">
      <ChapterEyebrow n="09" label="Comparativo" />
      <Reveal>
        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient max-w-3xl">
          O abismo entre o antigo e o agora.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl p-8 border border-border bg-muted/20">
            <div className="chip mb-4">Sistemas antigos</div>
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
      q: "Aumentamos nossa produtividade em 40% após migrar para o PDV Teltech.",
      a: "Marcos R.",
      r: "Rede de Mercados — 4 lojas",
    },
    {
      q: "O fechamento de caixa caiu de 40 minutos para 5. Auditoria virou rotina.",
      a: "Camila S.",
      r: "Conveniência 24h — Curitiba",
    },
    {
      q: "Integração com iFood acabou com a redigitação. Errar pedido virou exceção.",
      a: "Diego A.",
      r: "Distribuidora — Interior de SP",
    },
  ];

  return (
    <Section>
      <ChapterEyebrow n="10" label="Prova social" />
      <Reveal>
        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-[-0.03em] text-gradient max-w-3xl">
          Quem migrou, não voltou.
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
          {["Mercado Vila", "Adega Norte", "Conv 24h", "Atacado Sul", "Empório Bom Sabor"].map((b) => (
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

function FinalCTA() {
  return (
    <section id="cta" className="relative min-h-screen flex items-center px-6 py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 60% at 50% 50%, oklch(0.62 0.24 264 / 0.25), transparent 70%)" }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" aria-hidden />

      <div className="max-w-5xl mx-auto text-center w-full">
        <Reveal>
          <span className="chip mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Pronto para evoluir
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.035em] leading-[0.95] text-gradient">
            Seu mercado evoluiu.
            <br />
            Seu sistema <span className="text-gradient-blue">também deveria.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Controle estoque, vendas, caixa, notas fiscais e integrações em uma
            única plataforma.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="btn-primary text-base py-4 px-7">
              Solicitar Demonstração <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="btn-ghost text-base py-4 px-7">
              Falar com Especialista
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" />Sem cartão de crédito</span>
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" />Migração assistida</span>
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" />Suporte humano</span>
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
            <Sparkles className="w-3 h-3 text-primary-foreground" strokeWidth={2.5} />
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
  return (
    <main className="relative">
      <Nav />
      <Hero />
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
      <FinalCTA />
      <Footer />
    </main>
  );
}
