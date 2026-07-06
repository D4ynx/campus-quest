# Campus Quest — Project Handoff

*Prepared for account transition to Claude Pro. Paste this into a new conversation to restore context.*

---

## 1. Project Overview

**Campus Quest** is a gamified productivity/quest tracker portfolio project — think XP, leveling, streaks, and guilds layered on top of everyday task management. It's the primary technical portfolio piece supporting a dev-first job search strategy.

- **Backend:** FastAPI + PostgreSQL
- **Repo:** Standalone GitHub repo — `D4ynx/campus-quest`
- **Frontend:** Not yet built. Zero prior frontend experience — React, TypeScript, and Vite are being introduced from scratch in the upcoming phase.

---

## 2. Career Context (Why This Project Matters)

- Recently graduated, Magna Cum Laude, Computer Science, Xavier University – Ateneo de Cagayan.
- Active job search targeting **developer roles first**, as a deliberate stepping stone toward a longer-term goal of becoming a **product manager**.
- Sequencing strategy: dev role → build technical credibility → startup PM role → larger company PM role.
- Genuinely enjoys building things — the dev-first path feels like a real step, not a detour.
- Held significant leadership roles in university: Student Council President, Associate Executive Secretary of the Central Student Government. These will be leaned on for PM-adjacent narrative later.

---

## 3. What's Been Accomplished

- Backend built on FastAPI + PostgreSQL with gamification mechanics (XP, leveling, streaks, guilds).
- Project extracted from wherever it originally lived into its own standalone repo: `D4ynx/campus-quest`.
- Resume work: two prior resume versions merged into one stronger master document (`Guinanao_Resume_Merged.docx`) with a positioning summary, ownership-led bullets, and key leadership roles included.
- Discussed and mapped out the dev→PM career trajectory, including how to build PM skills in parallel while in a dev role (cross-functional volunteering, observing product decisions), and how to spot "PM in title only" startup roles as a red flag during job evaluation.

---

## 4. What's In Progress / Immediate Next Step

**Session 12: Figma screen design — before writing any React code.**

- Aesthetic direction chosen: **light/illustrated** — white/cream UI base, painterly fantasy-landscape art style.
- **Still needs to be fully specified:** color palette, typography, and icon style for this direction.
- Once screens are designed in Figma, the plan is to translate them into React/TypeScript/Vite — this will be the first hands-on frontend coding phase.

**Resume:**
- Tightened one-page version is pending real Campus Quest metrics — specifically endpoint count and table count — to quantify impact in the bullets.

---

## 5. What's Next (Roadmap)

1. Finish specifying Figma design direction (palette, typography, icons).
2. Design remaining core screens in Figma.
3. Set up React/TypeScript/Vite project structure, wire it to the existing FastAPI backend.
4. Build out frontend screen by screen, learning React/TS concepts as needed (see working patterns below).
5. Pull real metrics from the finished/near-finished project (endpoint count, table count, etc.).
6. Finalize the one-page resume with quantified Campus Quest bullets.
7. Use the finished project + resume in active job applications for dev roles.

---

## 6. Working Patterns & Preferences (for continuity)

- Benefits from being prompted to **share actual terminal output** rather than summarizing results in words.
- Prefers **direct command handoff** over Socratic guidance when hitting unfamiliar syntax (PowerShell, git commands) — just wants the working command.
- Occasionally defaults to CMD-style commands in PowerShell environments — worth double-checking syntax when helping with terminal work.
- For **learning React/TS specifically**, the preferred mode is different: explain the "why," map new concepts to backend concepts already known (e.g. component props ≈ passing data into a Pydantic model), and work in small scoped pieces (one component/hook at a time) rather than large multi-file generations — this is the net-new skill being built, so understanding matters more than speed here.
- Claude Code is being considered as a tool for the React phase — command handoff mode for setup/environment tasks, explain-first mode for actual React/TS code.

---

*End of handoff. Paste this at the start of a new conversation to pick up where things left off.*
