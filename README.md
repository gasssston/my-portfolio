# 🚀 Gastón.dev – Personal Portfolio (Astro + Tailwind + i18n + Supabase)

This is my personal developer portfolio built with **Astro**, **TailwindCSS**, **TypeScript**, **Supabase**, and a fully dynamic **i18n system**.  
It includes animations, dark mode, a premium About section, a dynamic project list from a database, and a clean modern UI.

This README explains everything step‑by‑step, as simply as possible.

---

# 📦 Tech Stack

- **Astro** – Static-first framework with islands architecture.
- **TailwindCSS** – Utility-first CSS.
- **TypeScript** – Type safety everywhere.
- **Supabase** – Free PostgreSQL database for dynamic content.
- **i18next** – Dynamic multilingual system (ES/EN).
- **AOS** – Scroll animations.
- **Vercel** – Deployment platform.

---

# 🧑‍💻 Features

### ✔ Dynamic Projects (Supabase)

Projects are stored in a free Supabase database and fetched at build time.

### ✔ Full i18n System (ES / EN)

Language switching works instantly without reloading the page.

### ✔ Premium About Section

Includes:

- Photo + title + subtitle.
- Long biography.
- Skills grid.
- Experience timeline.

### ✔ Dark Mode

Stored in `localStorage` and toggled with a button.

### ✔ Language Dropdown

Modern dropdown with ES/EN options and persistence.

### ✔ Loader Animation

A smooth intro loader with translation support.

### ✔ Responsive & Modern UI

Fully responsive, clean, and minimal.

---

# 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── avatar.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   ├── T.jsx
│   │   └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── supabase.ts
│   ├── i18n/
│   │   ├── i18n.js
│   │   ├── en.json
│   │   └── es.json
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

---

# 🛠 Installation

Clone the repo:

```sh
git clone https://github.com/gasssston/my-portfolio
cd portfolio
```

Install dependencies:

```sh
npm install
```

Run the dev server:

```sh
npm run dev
```

Your site will be available at:

```
http://localhost:4321
```

---

# 🌐 Environment Variables (Supabase)

Create a `.env` file in the project root:

```
PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

⚠️ **Variables MUST start with `PUBLIC_` or Astro will not expose them.**

---

# 🗄️ Supabase Setup

1. Create a free Supabase project.
2. Go to **Table Editor**.
3. Create a table named `projects`:

Columns:

| Name           | Type   | Notes                  |
| -------------- | ------ | ---------------------- |
| id             | bigint | Primary key (identity) |
| title          | text   | Project title          |
| descriptionKey | text   | i18n key               |
| tech           | text[] | Array of technologies  |
| link           | text   | GitHub or live link    |

4. Insert your projects.
5. Enable RLS.
6. Add a policy:

**Allow public read:**

```
USING (true)
```

---

# 🌍 i18n System (ES / EN)

The project uses **i18next** with:

- JSON translation files.
- A global initializer.
- A `<T />` component to render keys.
- A dropdown to switch languages.
- `localStorage` persistence.

Example usage:

```astro
<T client:load k="hero.title" />
```

---

# 🎨 UI Features

### 🌙 Dark Mode

- Toggles with a button.
- Saves preference in `localStorage`.
- Applies `dark` class to `<html>`.

### 🌐 Language Dropdown

- Shows current language.
- Dropdown menu with ES/EN.
- Calls `setLang()` from i18n.
- Saves preference in `localStorage`.

### 🌀 Loader

- Full-screen loader.
- Fades out after page load.
- Text is translated dynamically.

### 🧩 About

Includes:

- Profile photo.
- Title + subtitle.
- Long biography (i18n).
- Skills grid.
- AOS animations.

---

# 🧱 Dynamic Projects (Supabase)

Projects are fetched at build time:

```ts
const { data: projects } = await supabase.from("projects").select("*");
```

Then rendered:

```astro
{projects.map((p) => <ProjectCard {...p} />)}
```

---

# 🚀 Deployment (Vercel)

1. Push your repo to GitHub.
2. Import the repo in Vercel.
3. Add environment variables:

```
PUBLIC_SUPABASE_URL
PUBLIC_SUPABASE_ANON_KEY
```

4. Add them to:

- Production.
- Preview.
- Development (only paying).

5. Redeploy

Your site will be live in seconds.

---

# 📄 Scripts

| Command           | Description           |
| ----------------- | --------------------- |
| `npm run dev`     | Start dev server      |
| `npm run build`   | Build for production  |
| `npm run preview` | Preview build locally |

---

# 🧩 Notes

- Astro prerenders pages, so Supabase must be available at build time.
- All environment variables must start with `PUBLIC_`.
- The project is fully static except for Supabase fetches.
- You can extend the database with more tables (blog, messages, etc.).

---

# 🎉 Final Words

This portfolio is built to be:

- Fast.
- Modern.
- Maintainable.
- Multilingual.
- Database‑powered.
- Easy to extend.

---
