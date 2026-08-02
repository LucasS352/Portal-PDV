# ── Build Stage ──────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# ── Production Stage ─────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copiar os arquivos estáticos compilados de produção
COPY --from=builder /app/dist ./dist

EXPOSE 3535

# Servidor HTTP de produção ultra-rápido (Sem travamentos do vite preview)
CMD ["npx", "-y", "serve", "-s", "dist/client", "-l", "3535"]
