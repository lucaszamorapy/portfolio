# 📦 Prisma — Instalação e Uso (Next.js App Router)

Este projeto utiliza **Prisma ORM** para acesso ao banco de dados **PostgreSQL**, integrado ao **Next.js (App Router)**.

Este guia cobre **instalação, configuração, generate, db push, migrations e uso em Server Actions**.

---

## ✅ Requisitos

- Node.js **18+**
- PostgreSQL
- npm / pnpm / yarn

---

## 📥 Instalação

Instale o **Prisma CLI** e o **Prisma Client** (devem estar na mesma versão):

```bash
npm install -D prisma
npx prisma init
npm install @prisma/client
```

## Estrutura Esperada

prisma/
├─ schema.prisma
├─ prisma.config.ts (não é obrigatório)
└─ migrations/
app/
└─ lib/
└─ prisma.ts
.env
.env.production

## Variáveis de ambiente

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/db_name"
DIRECT_URL="postgresql://USER:PASSWORD@localhost:5432/db_name"

## Comandos Úteis

npx prisma generate # Gera o client (sempre que atualizar o schema.prisma)
npx prisma db push # Sincroniza schema → banco
npx prisma migrate dev # Cria migrations (DEV)
npx prisma migrate deploy # Aplica migrations (PROD)
npx prisma migrate reset # Reseta banco (DEV)
npx prisma studio # Interface visual

**IMPORTANTE**
Na build colocar o script prisma generate, assim ao fazer npm run build ele já vai gerar a pasta generated do prisma
