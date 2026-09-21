# Web Application Development Lab Manual (CS3191)

Complete solutions for **Lab 01 through Lab 04**, including all Walkthrough Tasks and Practice Tasks implemented according to the lab manual specifications.

---

## 📁 Repository Structure

```text
Webdesign-lab/
├── Lab-01/                                # Introduction & Development Environment
│   ├── intro-page/
│   │   └── index.html                     # Walkthrough: Personal introduction page
│   ├── practice-task-1.html               # Practice 1: Deliberate JS error for DevTools Console inspection
│   └── practice-task-2-and-3.md           # Practice 2 & 3: Git 3-commit history & cloning workflow
│
├── Lab-02/                                # HTML Basics
│   ├── walkthrough-task-1.html            # Walkthrough: 3-column layout (Header, 3 columns, Footer)
│   ├── practice-task-1.html               # Practice 1: Unordered and Ordered Lists (Coffee, Tea, Milk)
│   ├── practice-task-2.html               # Practice 2: HTML Form (Name, Readonly City, Zip max 4, DOB, Submit)
│   └── practice-task-3.html               # Practice 3: Table 3 Evaluation of Lab 1
│
├── Lab-03/                                # Cascading Style Sheets (CSS)
│   ├── walkthrough-task-1.html            # Walkthrough 1: First Edition Auctions table
│   ├── mystyle.css                        # Walkthrough 1 Stylesheet
│   ├── walkthrough-task-2.html            # Walkthrough 2: CSS Selectors demonstration
│   ├── StyleSheet.css                     # Walkthrough 2 Stylesheet
│   ├── walkthrough-task-3.html            # Walkthrough 3: Responsive menu layout with media queries
│   ├── practice-task-1.html               # Practice 1: CUST Page Layout (Header, Nav, Article, Logo, Footer)
│   └── style.css                          # Practice 1 Stylesheet
│
├── Lab-04/                                # Bootstrap CSS
│   ├── walkthrough-task-1.html            # Walkthrough 1: Nested Bootstrap Grid
│   ├── practice-task-1.html               # Practice 1: Responsive Grid Box Layout (Boxes 1-7, Sidebars)
│   └── practice-task-2.html               # Practice 2: Student Management (Registration Form & Data Table)
│
└── index.html                             # Main portal page
```

---

## 🚀 Lab Overview & Execution

### Lab 01: Introduction & Development Environment
- **Walkthrough**: Personal introduction page displaying student name, biography, and learning goals.
- **Practice Task 1**: Deliberately calling an undefined function to inspect console error reporting in browser DevTools.
- **Practice Tasks 2 & 3**: Multi-commit workflow with `git commit` and repository synchronization with `git clone` & `git push`.

### Lab 02: HTML Basics
- **Walkthrough Task 1**: Multi-section layout with inline styled header, 3 floating columns (20%, 60%, 20%), and footer.
- **Practice Task 01**: Implementation of `<ul>` and `<ol>` lists for beverage items.
- **Practice Task 02**: Input form with validation rules (`readonly` required city, `maxlength="4"` for zip code, `type="date"` for DOB).
- **Practice Task 03**: Semantic HTML table matching "Table 3: Evaluation of the Lab 1".

### Lab 03: Cascading Style Sheets (CSS)
- **Walkthrough Task 1**: Styled table with zebra striping (`tr.even`), hover highlighting, custom fonts, and text alignment.
- **Walkthrough Task 2**: Selectors demonstration using universal (`*`), grouping (`h1, h3`), class (`.note`), child (`li > h2`), descendant (`div h3`), and adjacent sibling (`div + h1`).
- **Walkthrough Task 3**: Responsive viewport layout switching between stacked mobile and floating desktop sidebar using `@media (min-width: 480px)`.
- **Practice Task 01**: Complete responsive institutional layout with header, navigation links, article section, logo sidebar, and footer.

### Lab 04: Bootstrap CSS
- **Walkthrough Task 1**: Nested Bootstrap grid system using rows, `col-lg-3`, `col-lg-6`, and nested `col-lg-4` elements.
- **Practice Task 01**: Responsive layout with header, footer, hideable sidebars (`d-none d-lg-block`), and adaptive boxes (`col-lg-3 col-md-6 col-12`).
- **Practice Task 02**: Student Management portal featuring a registration card form and a data table styled with Bootstrap components.

---

## ⚡ Running Locally with Live Server
Open any `.html` file in the IDE and choose **"Open with Live Server"** or press `Alt + L, Alt + O`.