---
name: playwright-testing
description: >-
  Provides end-to-end testing, visual regression testing, cross-browser validation, and CLI commands using Playwright.
  Use this skill when writing automated browser tests, running Playwright CLI commands, capturing responsive screenshots,
  testing user interactions, or debugging web page functionality.
---

# Playwright Testing & Automation Skill

This skill guides running automated end-to-end (E2E) tests, capturing visual regression snapshots, and executing Playwright CLI workflows for modern web applications.

## Playwright CLI Commands

### 1. Project Launcher
Use `.\playwright.cmd` from the project root:
```bash
# Check version
.\playwright.cmd --version

# Launch codegen test recorder
.\playwright.cmd codegen http://localhost:5500/

# Capture full-page responsive screenshots
.\playwright.cmd screenshot --viewport-size="1440,900" --full-page http://localhost:5500/ tests/screenshots/desktop.png

# Run tests
.\playwright.cmd test
```
