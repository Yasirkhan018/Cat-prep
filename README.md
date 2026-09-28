# CAT 2026 Prep OS — Intelligent Adaptive CAT Preparation System

An enterprise-grade, pedagogically grounded adaptive preparation platform designed specifically for CAT (Common Admission Test) aspirants. The system automatically assesses student ability, dynamically tailors learning paths across three distinct student personas, and isolates authentic past-year questions (PYQs) from original practice drills.

---

## 🌟 Core Product Principle & Pedagogy

The platform adheres to a structured, 6-stage mastery progression:

```text
Teach  ──►  Practice  ──►  Master  ──►  Apply  ──►  CAT PYQ  ──►  Full Mocks
(Learn)    (Foundations)  (Difficulty   (Tricky &   (Authentic   (120m Timed
                           Progression) Multi-Concept) 2021-2024)  Simulation)
```

1. **Teach (Learn Page `/learn`)**: Deep conceptual breakdowns, core formulas, shortcut techniques, and worked examples for every CAT topic.
2. **Practice (Practice Page `/practice`)**: Stage-gated drills starting with Foundation questions that build arithmetic and verbal fluency.
3. **Master (Adaptive Progression)**: An automated difficulty stepping engine (Foundation $\rightarrow$ Easy $\rightarrow$ Moderate $\rightarrow$ Intermediate) that unlocks higher tiers when sustained accuracy reaches $\ge 75\%-80\%$.
4. **Apply (Multi-concept application)**: Tackling non-standard and multi-step CAT questions.
5. **CAT PYQ (PYQ Portal `/pyq`)**: Practicing authentic, unaltered CAT past questions from 2021 to 2024 with official answer keys.
6. **Full Mocks (Mock Arena `/mock`)**: Timed 120-minute simulations replicating the real CAT exam environment with sectional switches and standard marking (+3 / -1 / 0).

---

## 👥 Three Adaptive Student Personas

Students can take an initial **12-Question Diagnostic Test** (`/diagnostic`) or toggle their persona at any time via the top navigation persona switcher:

| Persona | Target Audience | Primary Focus | UI Experience |
| :--- | :--- | :--- | :--- |
| **Beginner** | Score < 40% on diagnostic, starting prep | Core foundations, arithmetic fluency, reading habits | Simplified 4-tab interface, locked advanced drills to prevent cognitive overload |
| **Intermediate** | Score 40%–70%, familiar with fundamentals | Timed drills, speed, accuracy, moderate/intermediate sets | 6-tab interface including targeted topic drills and initial PYQ exploration |
| **Advanced** | Score > 70%, targeting 99+ percentile | Sectional pacing, difficult sets, multi-topic synthesis, mocks | Full 7-tab power interface, immediate mock access, granular error analytics |

---

## 📚 Question Banks & Data Isolation Guarantee

The platform maintains two distinct, strictly separated datasets:

### 1. Authentic CAT Past-Year Questions (PYQs)
- **Total Count**: **664 authentic questions** across 10 official papers (CAT 2021 Slot 1 through CAT 2024 Slot 2).
- **Sections**: 220 QA, 204 DILR, 240 VARC.
- **Passages**: 82 authentic Reading Comprehension and DILR caselets.
- **Provenance**: Tagged with `sourceType: 'CAT_PYQ'`, completely locked against modifications or AI hallucinations.

### 2. Original Practice Questions
- **Total Count**: **560 original questions** across **14 core CAT topics** (40 questions per topic).
- **Difficulty Distribution**: Exactly 10 Foundation, 10 Easy, 10 Moderate, 10 Intermediate per topic.
- **6-Part Pedagogical Solution Schema**:
  1. Step-by-step mathematical/logical reasoning
  2. Shortcut / time-saving technique
  3. Key foundational concept tested
  4. Alternate approach (e.g. elimination, back-substitution)
  5. Common traps and misinterpretations
  6. Why this method works & learning objective

---

## 📁 Systemized Project Structure

```text
CAT Exam/
├── docs/                                # Technical documentation & reports
│   ├── ARCHITECTURE.md                  # Deep architectural specifications & state flows
│   ├── ADAPTIVE_CAT_SYSTEM_SUMMARY_REPORT.md  # Comprehensive executive summary report
│   ├── ADAPTIVE_CAT_SYSTEM_SUMMARY_REPORT.html # Styled HTML visual report
│   └── ADAPTIVE_CAT_SYSTEM_SUMMARY_REPORT.doc  # Formatted Word document report
│
├── public/                              # Static public assets
│   ├── images/                          # Authentic PYQ diagrams & chart assets
│   └── icons/                           # Favicons and web app icons
│
├── scripts/                             # Operational utilities & data audit tools
│   ├── audit_questions.js               # Audits original question counts across all 14 topics
│   ├── verify_pyq.js                    # Validates integrity and isolation of 664 authentic PYQs
│   ├── generate_qa.js                   # Generator script for QA original question banks
│   ├── generate_dilr.js                 # Generator script for DILR original question banks
│   ├── generate_varc.js                 # Generator script for VARC original question banks
│   └── question_formatter.js            # Pedagogical formatting helpers for questions
│
├── src/                                 # Main application source code
│   ├── app/                             # Next.js 14 App Router pages & routes
│   │   ├── page.tsx                     # Adaptive Home Dashboard (persona-aware)
│   │   ├── layout.tsx                   # Root layout with ThemeProvider and global navigation
│   │   ├── diagnostic/                  # 12-question diagnostic test & placement engine
│   │   ├── learn/                       # 6-stage topic mastery journey & theory
│   │   ├── practice/                    # Adaptive practice drill interface with timer & hints
│   │   ├── pyq/                         # Authentic CAT PYQ portal (filterable by year/slot/topic)
│   │   ├── mock/                        # Full 120-minute authentic CAT exam simulator
│   │   ├── progress/                    # Granular accuracy analytics & performance dashboard
│   │   ├── bookmarks/                   # Saved questions repository
│   │   ├── mistakes/                    # Intelligent Mistake Book for gap remediation
│   │   ├── settings/                    # User profile, theme, and diagnostic reset controls
│   │   └── onboarding/                  # Student onboarding wizard
│   │
│   ├── components/                      # Reusable UI component library
│   │   ├── layout/                      # Header, navigation, persona switcher, theme toggle
│   │   ├── practice/                    # Question card, solution drawer, hint viewer, calculator
│   │   ├── learn/                       # Stage roadmap, concept cards, worked examples
│   │   └── shared/                      # KaTeX math renderer, modals, badges, progress bars
│   │
│   └── lib/                             # Core business logic, data models, and state
│       ├── types/                       # TypeScript contract definitions
│       │   └── adaptive.ts              # Adaptive engine, personas, and pedagogical schemas
│       ├── types.ts                     # Root contract re-exports and base types
│       ├── store/                       # State management
│       │   └── appStore.ts              # Zustand store with persistent localStorage hydration
│       ├── theme/                       # Dark/Light theme context & styling hooks
│       └── data/                        # Question datasets and database interfaces
│           ├── mockDatabase.ts          # Unified question querying service
│           ├── pyqService.ts            # Authentic PYQ data access layer
│           ├── diagnosticQuestions.ts   # 12 standardized diagnostic items
│           ├── originalQuestions/       # 560 original questions by subject
│           │   ├── qaQuestions.ts       # Quantitative Aptitude questions (7 topics × 40 = 280)
│           │   ├── dilrQuestions.ts     # Data Interpretation & LR (3 topics × 40 = 120)
│           │   ├── varcQuestions.ts     # Verbal Ability & RC (4 topics × 40 = 160)
│           │   └── index.ts             # Aggregated question exports
│           └── pyq/                     # Isolated authentic CAT PYQ datasets
│               ├── questions.json       # 664 authentic questions
│               ├── passages.json        # 82 authentic passages
│               ├── catalog.json         # 10 official exam papers
│               └── parsed_keys.json     # Official answer key references
│
├── tests/                               # Comprehensive multi-tier test suite
│   └── e2e/                             # End-to-end and integration tests
│       ├── runner.js                    # Unified test runner
│       ├── framework/                   # Mock client state, assertions, and test harness
│       └── tiers/                       # Tiers 1-4 (Coverage, Boundary, Integration, Workflows)
│
├── package.json                         # Project dependencies and npm scripts
├── tsconfig.json                        # TypeScript compiler configuration
├── tailwind.config.js                   # Tailwind CSS styling configuration
└── next.config.js                       # Next.js production build configuration
```

---

## 🚀 Getting Started & Operational Commands

### 1. Development Server
```bash
npm run dev
```
Runs the application in development mode at `http://localhost:3000`.

### 2. Production Build & Start
```bash
npm run build
npm run start
```
Compiles an optimized production build and starts the production HTTP server.

### 3. TypeScript Type Checking
```bash
npm run type-check
```
Executes `tsc --noEmit` across all pages, components, and datasets to guarantee 0 type errors.

### 4. Auditing Original Question Banks
```bash
npm run audit:questions
```
Audits all 14 CAT topics and confirms that every topic has at least 40 original questions partitioned across Foundation, Easy, Moderate, and Intermediate tiers.

### 5. Verifying Authentic CAT PYQ Dataset
```bash
npm run verify:pyq
```
Verifies that all 664 authentic CAT PYQs are intact, accurately cataloged, and isolated under `sourceType: 'CAT_PYQ'`.

---

## 🔒 Data Isolation & Quality Assurance

- **Zero Overlap**: Authentic CAT PYQs are never mixed into practice questions without the explicit `CAT_PYQ` badge.
- **Fail-safe Storage**: The state management engine includes automatic schema validation and defaults, gracefully recovering from empty or corrupt browser storage without application crashes.
- **Accessible & Responsive**: Fully responsive UI supporting both light and dark modes with integrated KaTeX mathematical typesetting for formulas and equations.
