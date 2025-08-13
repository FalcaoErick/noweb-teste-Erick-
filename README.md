# 🌐 Noweb Test — Guia Completo (React + Tailwind + TypeScript + ViaCEP)

Uma landing page desenvolvida em **React + Vite + TypeScript** com **TailwindCSS**, incluindo um **modal de busca de CEP** integrado à **API ViaCEP**. O projeto é totalmente responsivo e preparado para deploy na **Vercel**.

[📂 Repositório](#) • [🌎 Deploy Online](#)

---

## 📌 Objetivo

Criar uma página institucional seguindo layout de Figma, com:
- Modal acionado pelo botão “Buscar CEP”.
- Busca via **ViaCEP** permitindo entrada com ou sem traço.
- Preenchimento automático de **Logradouro, Complemento, Bairro, UF, Estado (Localidade)**.
- Campos **bloqueados para edição**.
- Layout responsivo **mobile-first**.

---

## ⚙️ Funcionalidades

- **🔍 Busca CEP Inteligente:** Sanitização e validação de entrada (com/sem traço).
- **📡 Integração ViaCEP:** Consumo de API pública para preenchimento automático de campos.
- **📜 Histórico de Buscas:** Armazena até 10 consultas recentes para reutilização.
- **🖥️ Responsividade Completa:** Layout adaptável para mobile, tablet e desktop.
- **📦 Estado Global (Zustand):** Controle centralizado do modal, resultado e histórico.

---

## 🛠️ Arquitetura e Estrutura

```
noweb-test/
├─ README.md
├─ index.html
├─ package.json
├─ tsconfig.json
├─ postcss.config.cjs
├─ tailwind.config.ts
├─ vite.config.ts
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ index.css
   ├─ lib/
   │  └─ viacep.ts
   ├─ store/
   │  └─ useUiStore.ts
   ├─ types/
   │  └─ viacep.ts
   ├─ components/
   │  ├─ Header.tsx
   │  ├─ Hero.tsx
   │  ├─ Metrics.tsx
   │  ├─ Services.tsx
   │  ├─ Workflow.tsx
   │  ├─ CtaBand.tsx
   │  ├─ Footer.tsx
   │  └─ SearchCepModal.tsx
   └─ utils/
      └─ format.ts
```

---

## 🧰 Tecnologias Utilizadas

| Categoria         | Ferramenta / Tecnologia |
|-------------------|-------------------------|
| **Frontend**      | React, TypeScript, Vite |
| **Estilo**        | TailwindCSS             |
| **Estado Global** | Zustand                 |
| **Integração API**| ViaCEP                  |
| **Deploy**        | Vercel                  |

---

## 🚀 Como Executar

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Rodar localmente
```bash
npm run dev
```

### 3️⃣ Gerar build
```bash
npm run build
npm run preview
```

---

## 📦 Deploy na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Acesse [Vercel](https://vercel.com) → **New Project** → importe o repositório.
3. Framework: **Vite** | Build: `npm run build` | Output: `dist`.
4. Deploy e copie a URL.

---

## 🧠 Dicas de Fidelidade ao Figma

- **Spacing**: `max-w-6xl mx-auto px-4` com `py` para seções.
- **Tipografia**: Hero com `text-5xl/6xl`, subtítulos `text-2xl/3xl`, corpo `text-sm/base`.
- **Cor de Acento**: `bg-primary (#A8FF35)` para CTAs.
- **Grid**: 3 colunas no desktop, 1 no mobile.
- **Hierarquia Visual**: CTA principal mais chamativo que secundário.

---

## ✅ Checklist do Projeto

- [x] React + Tailwind + TypeScript
- [x] Modal acionado pelo botão no header
- [x] Integração com ViaCEP
- [x] CEP com e sem traço
- [x] Campos auto-preenchidos `readOnly`
- [x] Layout responsivo
- [x] Estado global com histórico de buscas
- [x] Deploy na Vercel

---

## 👨‍💻 Autor

Feito por [Erick Nascimento Falcão](https://www.linkedin.com/in/erick-nascimento-39077826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
