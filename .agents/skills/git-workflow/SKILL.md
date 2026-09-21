---
name: git-workflow
description: >-
  Provides standard Git version control workflows, commit message conventions, branching strategies, and repository hygiene.
  Use this skill when initializing Git repositories, committing changes, writing conventional commits, creating branches,
  resolving conflicts, or setting up .gitignore rules for web projects.
---

# Git Workflow & Version Control Skill

This skill standardizes Git operations, repository hygiene, and commit conventions across web development projects.

## Core Workflows

### 1. Repository Initialization
When initializing a new project:
```bash
git init
git branch -M main
```

### 2. Standard Web `.gitignore`
Always ensure an appropriate `.gitignore` is present at the repository root:
```gitignore
# Dependencies & Environments
node_modules/
.venv/
.tools/

# Build & Logs
dist/
build/
*.log

# System & OS
.DS_Store
Thumbs.db

# IDE & Local Settings
.vscode/*
!.vscode/settings.json
```

### 3. Conventional Commit Standard
All commits must adhere to the Conventional Commits specification:

- `feat: <description>` - A new user-facing feature or enhancement.
- `fix: <description>` - A bug fix or error correction.
- `style: <description>` - Changes that do not affect the meaning of the code (formatting, CSS adjustments).
- `refactor: <description>` - Code change that neither fixes a bug nor adds a feature.
- `docs: <description>` - Documentation updates only (README, comments).
- `test: <description>` - Adding or updating test suites (e.g. Playwright specs).
- `chore: <description>` - Maintenance tasks, dependency updates, tooling configs.
