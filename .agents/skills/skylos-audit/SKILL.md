---
name: skylos-audit
description: >-
  Executes static code analysis, dead code elimination, security scans, and code quality audits using Skylos guidelines.
  Use this skill when auditing codebase health, detecting unused CSS/JS selectors, identifying hardcoded secrets,
  eliminating dead code, or enforcing quality guardrails on website projects.
---

# Skylos Code Quality & Static Audit Skill

This skill guides static analysis workflows to eliminate technical debt, detect unused code, and enforce clean architecture.

## Workflow Overview

Skylos analyzes frontend projects to identify:
1. **Dead & Unused Code**: Unused CSS rules, unreferenced JavaScript functions, and orphan assets.
2. **Security & Secrets**: Unintentionally committed API keys, tokens, or insecure HTTP references.
3. **AI Code Drift & Bloat**: Duplicate utility functions, placeholder comments, and redundant DOM lookups.

## Running the Automated Audit Script
Execute the project audit script:
```bash
powershell -ExecutionPolicy Bypass -File .agents/skills/skylos-audit/scripts/audit.ps1
```
