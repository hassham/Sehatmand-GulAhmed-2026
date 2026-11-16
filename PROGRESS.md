# Progress Tracker – Sehatmand Gul Ahmed 2026 App

> Companion to [REQUIREMENTS.md](REQUIREMENTS.md). Update the **Status** column whenever a requirement changes. Add a dated entry to the log at the bottom for every change.
>
> **Status values:** `Not started` · `In progress` · `Blocked` · `Done` · `Verified` (tested and accepted) · `Deferred`
>
> **Last updated:** 2026-11-16 (Phase 1 landing page built, not yet deployed)

---

## 1. Milestones

| Milestone | Target | Status | Notes |
|---|---|---|---|
| Source documents reviewed | 2026-11-16 | Done | Brief (DOCX), roadmap (PDF), logo and poster reviewed |
| Requirements and plan written | 2026-11-16 | Done | See REQUIREMENTS.md |
| Open questions answered | Before build | Not started | 12 open questions in REQUIREMENTS.md §8 |
| Phase 1 – launch web page live | Before 2026-11-17 | In progress | Built in `landing-page/`; needs testing and deployment to https://gulahmed.com/corporate/ (QR destination) |
| DISCOVER – QR Wellness Pulse live | 2026-11-17 | Not started | |
| Walking challenge live | 2026-11-20 | Not started | Depends on R-24 decision |
| Phase 2 – MVP app built | ~6–8 weeks after scope sign-off | Not started | |
| Pilot with one site or team | TBC | Not started | |
| Full rollout | TBC | Not started | |

---

## 2. Requirements status

### 2.1 Information and schedule

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-01 | Programme overview and current-week theme | M | In progress | | Overview built; current-week highlighting not yet |
| R-02 | Activity list with date, time, venue, audience, focal person | M | In progress | | Schedule table built; TBC shown for unconfirmed items; focal person not shown |
| R-03 | Phase core question and expected value | M | Done | | Phase cards show core questions; expected value not shown |
| R-04 | Logo and tagline on home screen | S | Done | | |

### 2.2 QR Wellness Pulse

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-10 | Five-question pulse via QR and in-app | M | In progress | | Pulse form built (draft questions); not yet connected to storage |
| R-11 | Voluntary; non-smartphone route | M | In progress | | Voluntary wording and paper-copy note added; printed form not made |
| R-12 | Store responses; report aggregated only | M | Blocked | | `PULSE_ENDPOINT` empty in `landing-page/assets/js/main.js`; open question 7 and 9 |
| R-13 | Wellness Wheel focus prompt (private to user) | S | Not started | | Pulse Q5 covers the focus choice; separate prompt not built |

### 2.3 Walking challenge

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-20 | Join and see own step progress | M | Not started | | |
| R-21 | Device steps (HealthKit / Health Connect) or manual fallback | M | Not started | | Confirm method |
| R-22 | Aggregated team or department leaderboard | S | Not started | | |
| R-23 | Progress prompts and reminders | S | Not started | | |
| R-24 | Decide: in-app tracking or existing fitness app | M | Blocked | | Open question 2 |

### 2.4 Registration and events

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-30 | Register for activities (capacity, deadline, eligibility) | M | Not started | | |
| R-31 | Show remaining capacity; close when full | M | Not started | | |
| R-32 | Open, nominated and team-based registration | S | Not started | | Open question 3 |
| R-33 | Add to calendar | S | Not started | | |

### 2.5 Stories, recognition and continuation

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-40 | Stories and photos with recorded consent | S | Not started | | |
| R-41 | Wellness Champs profile and recognition | S | Blocked | | Open question 4 |
| R-42 | One-habit commitment screen | M | Not started | | |
| R-43 | Impact recap (verified figures only) | S | Not started | | |

### 2.6 Feedback and notifications

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-50 | Activity and programme feedback form | M | In progress | | Feedback section built; link hidden until `FEEDBACK_URL` is set (open question 9) |
| R-51 | Push / SMS / WhatsApp reminders with opt-out | M | Not started | | |
| R-52 | Participation snapshots and announcements | S | Not started | | |

### 2.7 Admin

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-60 | Admin login with roles | M | Not started | | |
| R-61 | Publish schedule and activities without a developer | M | Not started | | |
| R-62 | Export aggregated reports | M | Not started | | |
| R-63 | Approve stories; record consent status | S | Not started | | |

### 2.8 Accounts and access

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| R-70 | Employee sign-in | M | Blocked | | Open question 5 |
| R-71 | Works for shift and site staff | M | Not started | | |
| R-72 | Multilingual content | S | Blocked | | Open question 6 |

### 2.9 Non-functional

| ID | Requirement | Priority | Status | Owner | Notes |
|---|---|---|---|---|---|
| N-01 | Privacy: minimum data; no personal financial details | M | In progress | | Pulse payload has no names or IDs; storage not yet decided |
| N-02 | Consent recorded before identifiable content | M | Not started | | |
| N-03 | Financial content educational and impartial | M | Done | | Disclaimer in footer |
| N-04 | No unsupported health or productivity claims | M | Not started | | |
| N-05 | Data protection rules and hosting confirmed | M | Blocked | | Open question 7 |
| N-06 | Accessibility: low-end Android, slow networks, text size, contrast | M | Not started | | |
| N-07 | Offline-friendly schedule and registration | S | Not started | | |
| N-08 | Fast on mobile; QR page needs no login | M | In progress | | No login; mobile layout built; needs device and speed testing |
| N-09 | Brand colours, tagline and app name | S | Done | | Corporate theme and Sehatmand logo colours |
| N-10 | Report participation as evidence only | M | Not started | | |

---

## 3. Open questions

| # | Question | Status | Answer / date |
|---|---|---|---|
| 1 | Confirmed dates, times and venues for every activity | Open | |
| 2 | Walking challenge: device steps, manual, or existing app? | Open | |
| 3 | Eligibility and registration method per activity | Open | |
| 4 | Wellness Champs role, award categories, criteria | Open | |
| 5 | Employee sign-in method | Open | |
| 6 | Languages required | Open | |
| 7 | Data hosting location and data protection rules | Open | |
| 8 | Photo and story consent process and approver | Open | |
| 9 | Feedback and participation data to share, and with whom | Open | |
| 10 | GROW concepts: deferred, merged or still planned? | Open | |
| 11 | Budget, production, transport, safety, accessibility needs | Open | |
| 12 | Confirm the source brief is cleared for app development | Open | |

---

## 4. Log

| Date | Change | By |
|---|---|---|
| 2026-11-16 | Created REQUIREMENTS.md and PROGRESS.md from the source documents | Claude |
| 2026-11-16 | Built Phase 1 landing page in `landing-page/` (index.html, assets/css/styles.css, assets/js/main.js, assets/img/sehatmand-logo.png). Pulse questions are drafts. QR target set to https://gulahmed.com/corporate/ | Claude |
