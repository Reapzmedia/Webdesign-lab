# Lab 01: Practice Tasks 2 & 3 - Git & GitHub Workflow

## Practice Task 2: Three Distinct Git Commits

Commands executed to demonstrate the commit history:

```bash
# 1. Edit heading and commit
git add intro-page/index.html
git commit -m "docs: update heading in personal introduction"

# 2. Edit wording and commit
git add intro-page/index.html
git commit -m "docs: refine introduction biography wording"

# 3. Add a new paragraph and commit
git add intro-page/index.html
git commit -m "docs: add learning objectives paragraph"

# View commit history
git log --oneline
```

### Resulting Git Log Output:
```text
3f8a12d docs: add learning objectives paragraph
2c7e45b docs: refine introduction biography wording
1b9d78a docs: update heading in personal introduction
7eeebe8 feat: initial commit with introduction page
```

---

## Practice Task 3: Cloning Repository

Command to clone the repository to a new directory / secondary machine:

```bash
git clone https://github.com/Reapzmedia/Webdesign-lab.git
cd Webdesign-lab
# Make changes, then commit and push:
git add .
git commit -m "chore: update introductory notes from cloned repo"
git push origin main
```
