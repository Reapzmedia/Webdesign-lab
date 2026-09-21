# ApexBase • Web Project Foundation & Tooling

A production-grade web project foundation equipped with **Live Server**, **Playwright CLI**, custom **Design Tokens**, and dedicated **AI Agent Skills** for design auditing, static code analysis, git workflows, and website engineering.

---

## 📁 Project Architecture

```text
ag/
├── index.html                     # Semantic HTML5 base template with SEO tags
├── css/
│   └── style.css                  # Modern vanilla CSS design system & tokens
├── js/
│   └── main.js                    # Reactive JS logic (theme switch, counter, clipboard)
├── tests/
│   └── homepage.spec.js           # Playwright end-to-end test specification
├── playwright.cmd                 # Direct launcher for Playwright CLI
├── package.json                   # Node package & testing script definitions
├── .gitignore                     # Standard version control exclusion rules
├── .vscode/
│   └── settings.json              # Pre-configured Live Server extension settings (Port 5500)
└── .agents/skills/                # Antigravity Workspace Skills
    ├── basic-design/              # Web design principles, tokens, and UI guidelines
    ├── design-audit/              # Visual hierarchy, contrast (WCAG AA), and UX audits
    ├── skylos-audit/              # Skylos static analysis, dead code elimination, security
    ├── git-workflow/              # Git conventions, conventional commits, hygiene
    ├── playwright-testing/        # Playwright CLI commands, E2E specs, and screenshots
    └── web-development/           # Semantic HTML5, SEO standards, and performance
```

---

## ⚡ 1. How to Run with Live Server Extension

The Live Server extension (`ritwickdey.liveserver`) is installed in your IDE:

- **Method 1 (Right Click)**: Right-click `index.html` in the file explorer and choose **"Open with Live Server"**.
- **Method 2 (Keyboard Shortcut)**: Press `Alt + L, Alt + O` to start (or `Alt + L, Alt + C` to stop).
- **Method 3 (Status Bar)**: Click the **"Go Live"** badge at the bottom-right corner of the status bar.

Your default browser will launch `http://127.0.0.1:5500/index.html` with real-time hot-reloading!

---

## 🎭 2. Playwright CLI

Playwright CLI is installed and ready to use via the project launcher:

```bash
# Check version
.\playwright.cmd --version

# Run interactive test recorder (Codegen)
.\playwright.cmd codegen http://localhost:5500/

# Capture full-page screenshot
.\playwright.cmd screenshot --viewport-size="1440,900" --full-page http://localhost:5500/ tests/screenshot.png

# Run automated tests
.\playwright.cmd test
```

---

## 🛡️ 3. Installed AI Agent Skills

Your workspace contains 6 specialized AI Agent Skills in `.agents/skills/`:

| Skill | Path | Description |
| :--- | :--- | :--- |
| **`basic-design`** | `.agents/skills/basic-design/` | Design tokens, color harmony, typography scale, glassmorphism, responsive grids. |
| **`design-audit`** | `.agents/skills/design-audit/` | WCAG 2.1 AA contrast checks, spacing consistency, touch target audit. |
| **`skylos-audit`** | `.agents/skills/skylos-audit/` | Static code analysis, unused CSS/JS detection, and dead code cleanup. |
| **`git-workflow`** | `.agents/skills/git-workflow/` | Conventional commits (`feat:`, `fix:`, `style:`), branch conventions, hygiene. |
| **`playwright-testing`**| `.agents/skills/playwright-testing/`| CLI test generation, automated assertions, visual snapshot comparisons. |
| **`web-development`** | `.agents/skills/web-development/` | Semantic HTML5 structure, SEO meta tags, Core Web Vitals optimization. |

### Run Automated Static Audit
```bash
powershell -ExecutionPolicy Bypass -File .agents/skills/skylos-audit/scripts/audit.ps1
```

---

## 📦 4. Git Version Control

Track and commit your initial project base:
```bash
git add .
git commit -m "feat(base): initial modern html5 base project with design tokens, live server, and skills"
```
