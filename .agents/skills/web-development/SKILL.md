---
name: web-development
description: >-
  Standardizes website development best practices, semantic HTML5 structure, SEO optimization, performance auditing,
  and cross-browser responsiveness. Use this skill when building websites, structuring HTML documents, adding meta tags,
  optimizing page performance, or preparing web applications for production deployment.
---

# Web Development Best Practices Skill

This skill outlines engineering standards and quality checklists for building production-ready websites and web applications.

## 1. Document Structure & Semantic Markup
- Always begin with standard `<!DOCTYPE html>` and `<html lang="en">`.
- Use semantic structuring:
  - `<header>`: Site logo, branding, and primary `<nav>`.
  - `<main>`: Main content area (exactly one per page).
  - `<section>`: Thematic grouping of content with an identifiable heading.
  - `<article>`: Self-contained composition (cards, blog entries, modules).
  - `<footer>`: Author, copyright, links, and auxiliary metadata.
- Ensure all interactive elements (`<a>`, `<button>`, `<input>`) have unique `id` and descriptive `aria-label` where text is absent.

## 2. SEO & Metadata Standards
Every page must define:
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<meta name="description" content="...">`
- Canonical titles and OpenGraph tags where relevant.
