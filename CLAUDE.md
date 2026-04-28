# CLAUDE.md

## Purpose

This document defines how Claude Code should interact with my Astro-based portfolio project. It establishes coding standards, architectural rules, file structure conventions, and expectations for assistance. Claude should follow these instructions when generating, modifying, or reviewing code within this repository.

---

## Project Overview

This repository contains my personal portfolio built with:

- Astro
- TypeScript
- Tailwind CSS
- Reusable components and layouts
- Dark mode support
- SEO optimization
- Internationalization (i18n)
- Smooth animations
- Responsive design
- Deployment on Vercel
- Optional Supabase integration for dynamic content

The goal of the project is to present a clean, modern, corporate-ready portfolio with a scalable architecture and maintainable codebase.

---

## High-Level Architecture

Claude should preserve and respect the following structure:

- `src/components/`  
  Reusable UI components (cards, buttons, navbars, footers, sections).

- `src/layouts/`  
  Page-level layouts with shared structure, metadata, and theming.

- `src/pages/`  
  Astro pages. Each page should be minimal and rely on layouts and components.

- `src/styles/`  
  Global styles, Tailwind configuration, design tokens if needed.

- `src/content/`  
  Markdown or JSON-based content for projects, skills, or blog posts.

- `src/lib/`  
  Utility functions, helpers, and shared logic.

- `src/i18n/`  
  Languages functions.

- `public/`  
  Static assets.

- `astro.config.mjs`  
  Astro configuration, integrations, and build settings.

---

## Coding Standards

### General

- Use TypeScript for all logic.
- Keep components small, focused, and reusable.
- Prefer composition over duplication.
- Maintain consistent naming conventions: PascalCase for components, camelCase for functions and variables.
- Avoid unnecessary abstractions.

### Astro

- Keep `.astro` files clean and declarative.
- Move logic to `.ts` files when possible.
- Use layouts for shared structure.
- Use frontmatter only for metadata and imports.

### Tailwind

- Use utility classes for layout and spacing.
- Use custom classes only when necessary.
- Keep class lists readable and ordered logically (layout > spacing > typography > effects).

### Accessibility

- Use semantic HTML.
- Provide alt text for images.
- Ensure keyboard navigation works.
- Maintain color contrast in both light and dark modes.

---

## Design System Guidelines

Claude should follow these principles when generating UI:

- Minimal, modern, and clean.
- Consistent spacing scale (Tailwind defaults unless overridden).
- Use a unified color palette defined in Tailwind config.
- Prefer card-based layouts for projects and sections.
- Avoid clutter and unnecessary pagination.
- Ensure responsive behavior across breakpoints.

---

## i18n Guidelines

If modifying or adding content:

- Keep English as the primary source language.
- Store translations in a structured format (JSON or similar).
- Do not hardcode text inside components; use translation helpers.

---

## SEO and Metadata

Claude should ensure:

- Each page includes proper `<title>`, `<meta>` tags, and Open Graph data.
- URLs remain clean and descriptive.
- Images include descriptive alt text.

---

## Supabase Integration (Optional)

If interacting with Supabase:

- Use server-side Astro endpoints when possible.
- Do not expose keys on the client.
- Keep database logic inside `src/lib/` or dedicated server routes.

---

## How Claude Should Assist

### When generating code

- Produce complete, ready-to-paste code blocks.
- Follow the architecture and conventions described above.
- Avoid introducing unnecessary dependencies.
- Ensure the code builds successfully in Astro.

### When modifying existing code

- Respect the current structure and style.
- Explain changes only when necessary.
- Avoid rewriting entire files unless explicitly requested.

### When reviewing code

- Identify issues related to performance, readability, accessibility, or maintainability.
- Suggest improvements aligned with the project's design system and coding standards.

### When creating new features

- Propose a clear file structure.
- Use existing components and patterns.
- Keep the implementation minimal and scalable.

---

## Tasks Claude Should Avoid

- Do not introduce frameworks outside the current stack.
- Do not generate overly complex abstractions.
- Do not modify configuration files unless requested.
- Do not change the design direction without explicit instruction.

---

## Project Goals

Claude should help maintain and evolve this portfolio with:

- Professional polish suitable for international companies.
- Clean, modern UI aligned with SaaS-style design.
- Scalable architecture for future sections (blog, case studies, dynamic content).
- High-quality, production-ready code.

---
