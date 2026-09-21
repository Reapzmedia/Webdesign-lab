---
name: design-audit
description: >-
  Executes comprehensive UI/UX design, visual hierarchy, and accessibility audits for websites and web applications.
  Use this skill when auditing a page's visual consistency, contrast ratios, WCAG compliance, typography scale,
  spacing consistency, touch target sizes, or mobile responsiveness.
---

# UI/UX Design Audit Skill

This skill provides systematic inspection procedures to audit web interfaces for visual quality, consistency, and accessibility standards.

## Design Audit Checklist

### 1. Color Contrast & Accessibility (WCAG 2.1 AA)
- [ ] **Normal Text (under 18pt / 24px)**: Must maintain a minimum contrast ratio of **4.5:1** against its background.
- [ ] **Large Text (18pt+ or 14pt bold)**: Must maintain a minimum contrast ratio of **3.0:1**.
- [ ] **UI Components & Borders**: Active input fields and clickable borders must achieve at least **3.0:1** contrast.
- [ ] **Color Independence**: Information is never conveyed by color alone (always pair with icons or labels).

### 2. Typography & Reading Experience
- [ ] Exactly **one `<h1>` element** per page.
- [ ] Headings follow a strict logical hierarchy (`<h1>` -> `<h2>` -> `<h3>`) without skipping levels.
- [ ] Body line length does not exceed 75–80 characters (`max-width: 65ch` or `700px`).
- [ ] Line height is at least `1.5` for body copy and `1.15`–`1.25` for large headings.

### 3. Spacing & Grid System
- [ ] Spacing follows a consistent base unit scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px).
- [ ] Containers have uniform horizontal padding on mobile (`16px`–`24px`).
- [ ] Vertical rhythm between major sections is proportionate (`60px`–`100px`).

### 4. Interactive Elements & Touch Targets
- [ ] All interactive buttons and links have a minimum target size of **44 × 44 px** on mobile viewports.
- [ ] Clear `:hover`, `:focus-visible`, and `:active` pseudo-classes exist for keyboard navigation and mouse users.
- [ ] Focused elements show an outline or glow ring (`outline: 2px solid var(--accent)`).

### 5. Layout & Viewport Adaptability
- [ ] No unwanted horizontal scrollbars at 320px, 375px, 768px, 1024px, or 1440px viewports.
- [ ] Dynamic elements wrap or collapse into hamburgers / accordions on viewports under 768px.
- [ ] Images and media elements specify `max-width: 100%` and `height: auto`.
