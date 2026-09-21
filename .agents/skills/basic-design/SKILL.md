---
name: basic-design
description: >-
  Provides comprehensive guidelines and checklists for implementing modern, aesthetically pleasing web UI designs.
  Use this skill when designing web pages, creating design tokens, establishing color palettes, typography systems,
  responsive layouts, glassmorphism, or modern dark/light mode themes.
---

# Basic Web Design & Aesthetics Skill

This skill guides the creation of visually stunning, modern, and accessible web interfaces. It enforces high-end design principles to prevent basic or generic-looking websites.

## Core Design Principles

### 1. Color Palette & Harmonious Tokens
- **Never use generic primary colors** (e.g. plain `#ff0000`, `#0000ff`).
- Use tailored HSL / OKLCH scales with balanced contrast.
- Define custom properties (`:root`) for:
  - Surface backgrounds: Main (`#090d16`), Cards (`rgba(15, 23, 42, 0.7)`), Borders (`rgba(255, 255, 255, 0.08)`).
  - Accent colors: Violet/Indigo (`#6366f1`), Cyan (`#06b6d4`), Emerald (`#10b981`), Amber (`#f59e0b`).
  - Text hierarchy: High-emphasis (`#f8fafc`), medium-emphasis (`#94a3b8`), subtle/muted (`#64748b`).

### 2. Typography & Hierarchy
- Load curated fonts from Google Fonts:
  - Headings & Interface: `Plus Jakarta Sans`, `Inter`, or `Outfit`.
  - Code & Badges: `JetBrains Mono` or `Fira Code`.
- Establish clear type scales:
  - `hero-title`: `clamp(2.5rem, 5vw, 4rem)` with `line-height: 1.15` and `letter-spacing: -0.02em`.
  - `section-title`: `clamp(1.8rem, 3vw, 2.5rem)`.
  - `body`: `1rem` (16px) with `line-height: 1.6` to `1.7`.

### 3. Glassmorphism & Depth
- Layer surfaces using subtle backdrop blur and borders:
  ```css
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  ```

### 4. Micro-Interactions & Transitions
- Provide tactile visual feedback on interactive elements:
  - Button hover: subtle lift (`transform: translateY(-2px)`), glow shadow amplification.
  - Cards: hover elevation, smooth border highlighting.
  - Standard ease: `cubic-bezier(0.4, 0, 0.2, 1)` with `150ms` to `250ms` duration.

### 5. Responsive Grid & Flex Layouts
- Design mobile-first or fluid responsive layouts using `clamp()`, `minmax()`, and CSS Grid:
  ```css
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  ```
