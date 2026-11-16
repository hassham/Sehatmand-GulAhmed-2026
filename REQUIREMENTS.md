# Sehatmand Gul Ahmed 2026 – Mobile App Requirements and Plan

> **Purpose:** single source of truth for what the Sehatmand Gul Ahmed 2026 wellness app must do, and how it should be built and rolled out. Any agent or developer working in this folder should read this file first, then check [PROGRESS.md](PROGRESS.md) for current status.
>
> **Source documents** (in this folder):
> - `Sehatmand_Gul_Ahmed_2026_Communications_Brief.docx` – latest working programme brief (primary source)
> - `Roadmap - Wellness 2026.pdf` – original five-week roadmap (older; superseded where they conflict)
> - `Sehatmand Gulahmed-01.png` – logo (tagline: "Take Charge of Your Wellbeing")
> - `WhatsApp Image 2026-11-14 at 10.49.52 PM.jpeg` – QR campaign poster ("Scan to Explore")

---

## 1. Context

Sehatmand Gul Ahmed is a five-week employee wellbeing programme (2022–2026 journey). The 2026 rollout runs **17 Nov – 19 Dec 2026** across five phases: DISCOVER, MOVE, CONNECT, REFLECT and CONTINUE. The app supports the programme's activities, participation, feedback and recognition.

**Brand:** Sehatmand Gul Ahmed. Tagline: "Take Charge of Your Wellbeing". Colours from the logo: deep navy, gold/amber, teal.

**Audience:** all employees (management and workers), with some activities targeted to specific groups (see §4).

---

## 2. Goals of the app

1. Give every employee a simple way to follow the programme schedule and take part.
2. Track walking-challenge participation (30-day challenge, 20 Nov – 19 Dec 2026).
3. Collect voluntary, anonymous-in-reporting pulse feedback and participation data.
4. Share stories and recognition for Wellness Champs (with consent).
5. Let the HR and Communications teams update the schedule and activities without a developer.

**Out of scope for the first release** (confirm with the programme team): medical advice, storing personal health or financial records, product promotion, social feed, payments or rewards fulfilment.

---

## 3. Delivery timeline

| Milestone | Date | Notes |
|---|---|---|
| Web landing page live (QR destination) | **Before 17 Nov 2026** | Required for launch; mobile-friendly, no app download |
| DISCOVER – QR Wellness Pulse | 17–21 Nov | |
| Walking challenge starts | 20 Nov | Runs to 19 Dec |
| MOVE | 23–28 Nov | |
| CONNECT | 30 Nov – 5 Dec | |
| REFLECT | 7–12 Dec | |
| CONTINUE / close-out | 14–19 Dec | |
| Full mobile app MVP | Target ~6–8 weeks after scope sign-off | Pilot with one site/team, then roll out |

> The programme is already running on the calendar, so the **web page is the only realistic item for the launch**. The native/cross-platform app follows as Phase 2.

---

## 4. Programme content the app must reflect

| Phase | Dates | Theme / question | Core activities | Audience |
|---|---|---|---|---|
| DISCOVER | 17–21 Nov | "What matters to us?" | QR Wellness Pulse (five questions); Wellness Wheel prompt to pick a personal wellbeing focus | All employees (voluntary) |
| MOVE | 23–28 Nov | "How well am I caring for my body?" | TriFit women's fitness/movement session; Aqeeba kickboxing and posture-correction (Officers–DM); 30-day walking challenge (20 Nov–19 Dec) | Women-focused TriFit; Aqeeba for Officers–DM; walking challenge open to all |
| CONNECT | 30 Nov – 5 Dec | "What keeps us connected?" | Drum Circle (employee and leadership); interdepartmental padel/cricket tournament (format TBC) | Cross-functional; eligible levels TBC |
| REFLECT | 7–12 Dec | "How do I manage pressure?" | Self-awareness/stress/coping session with Indus Hospital; financial wellbeing session (budgeting, savings, investment awareness) | Managers and below |
| CONTINUE | 14–19 Dec | "What will I sustain?" | Close-out; champion recognition; impact recap; one-habit commitment | Wider workforce; Wellness Champs |

**Dates and activity details marked TBC must be treated as placeholders in the app and editable by the admin.**

---

## 5. Functional requirements

Priority: **M** = must have for MVP, **S** = should have, **C** = could have later.

### 5.1 Information and schedule
- **R-01 (M):** Show the five-week programme overview and the current week's theme.
- **R-02 (M):** List activities by phase with date, time, venue, audience, description and focal person. Show "TBC" where details are not yet confirmed.
- **R-03 (M):** Show each phase's core question and expected value in plain language.
- **R-04 (S):** Show the programme logo and tagline on the home screen.

### 5.2 QR Wellness Pulse
- **R-10 (M):** Five-question pulse ("what matters to us" check-in), reachable by QR code and from the app.
- **R-11 (M):** Voluntary. A non-smartphone route must be provided where possible (for example, a QR or link on standees that opens a simple web form, or a printed form).
- **R-12 (M):** Responses are stored so only **aggregated** results are reported. Individual responses must never be shown to anyone.
- **R-13 (S):** Wellness Wheel prompt that lets a user pick one personal wellbeing focus (stored privately to the user).

### 5.3 Walking challenge (30 days, 20 Nov – 19 Dec)
- **R-20 (M):** Users can join the challenge and see their own daily/weekly step progress.
- **R-21 (M):** Steps come from device health data (Apple HealthKit on iOS, Google Health Connect on Android) **or** a manual daily entry as a fallback. Confirm which method the programme team wants.
- **R-22 (S):** Team or department leaderboard, shown as aggregated totals. Do not show individual rankings publicly without consent.
- **R-23 (S):** Progress prompts and reminders during the challenge.
- **R-24 (M):** Walking-challenge app/process is still TBC. Decide whether to build tracking in-app or link to an existing fitness app.

### 5.4 Registration and events
- **R-30 (M):** Register for activities, showing capacity, deadline and eligibility.
- **R-31 (M):** Show remaining capacity and close registration when full.
- **R-32 (S):** Support three registration types: open, nominated, or team-based.
- **R-33 (S):** Add the registration to the user's calendar.

### 5.5 Stories, recognition and continuation
- **R-40 (S):** Team stories and photos, published only with recorded consent. Identifiable people must have consented.
- **R-41 (S):** Wellness Champs profile and recognition (award categories and criteria TBC).
- **R-42 (M):** Commitment screen where each user records one habit to continue after the programme.
- **R-43 (S):** Final impact recap page (verified figures only).

### 5.6 Feedback and notifications
- **R-50 (M):** Feedback form for activities and for the programme overall.
- **R-51 (M):** Push notifications (or SMS/WhatsApp fallback) for weekly theme, event reminders and challenge prompts. Users can opt out.
- **R-52 (S):** Participation snapshots and announcements.

### 5.7 Admin (HR and Communications)
- **R-60 (M):** Admin login with roles (HR/Programme, Corporate Communications, Site Champion).
- **R-61 (M):** Create, edit and publish activities, the schedule and weekly themes without a developer.
- **R-62 (M):** Export aggregated participation and feedback reports (reach, registrations vs. attendance, challenge consistency, feedback).
- **R-63 (S):** Approve stories and photos, and record consent status.

### 5.8 Accounts and access
- **R-70 (M):** Sign in with company credentials or a one-time code. The exact method is TBC.
- **R-71 (M):** Access works for shift-based and site-based staff (not only desk users).
- **R-72 (S):** Multilingual content where needed (confirm language requirements with the programme team).

---

## 6. Non-functional requirements

- **N-01 Privacy:** collect the minimum data needed. No personal financial details. Individual pulse responses and personal wellbeing information are never published.
- **N-02 Consent:** no identifiable photos or stories without recorded consent. Consent records must be kept.
- **N-03 Impartiality:** financial wellbeing content is educational only. No product endorsement.
- **N-04 Claims:** the app must not claim improved health, productivity or reduced stress without evidence over time.
- **N-05 Data protection:** check the data protection rules that apply to employee data in the country where the programme runs. Confirm where data is hosted.
- **N-06 Accessibility:** works on low-end Android phones and on slow connections; supports text size changes; sufficient colour contrast. Non-smartphone route provided for the pulse.
- **N-07 Offline:** schedule and registration pages should load on poor connections, with changes synced when online.
- **N-08 Performance:** pages load quickly on mobile networks; the QR landing page must work with no login.
- **N-09 Branding:** follow the logo colours and tagline; the app name is "Sehatmand Gul Ahmed".
- **N-10 Reporting honesty:** report participation and feedback as evidence only, not as proof of health or productivity outcomes.

---

## 7. Recommended approach

| Phase | What | Technology |
|---|---|---|
| **Phase 1 – Launch web page** (before 17 Nov) | Mobile-friendly landing page: programme overview, QR Pulse, schedule, feedback | Simple static or lightweight web page; no login |
| **Phase 2 – MVP app** (~6–8 weeks) | Schedule, registration, walking challenge, commitment, notifications, admin | Cross-platform app (React Native with Expo, or Flutter) + Firebase or Supabase backend |
| **Phase 3 – Pilot and rollout** | Pilot with one site or team, fix issues, roll out | Analytics and feedback loop |

**Alternatives considered:**
- *Progressive web app (PWA):* cheapest, no store release; weak for background step tracking and iPhone push notifications.
- *Native (Swift and Kotlin):* best quality, but two codebases and the highest cost.

**Recommendation:** Phase 1 now, then cross-platform for Phase 2, unless the programme team decides the walking challenge can use an existing fitness app.

**Suggested team:** one designer, one or two developers, and a backend/admin owner. Programme owner: HR/Programme team; content and channels: Corporate Communications & CSR.

---

## 8. Open questions (block the build until answered)

1. Confirmed dates, times and venues for every activity (including site and shift arrangements).
2. Walking challenge: device step tracking, manual entry, or an existing fitness app?
3. Eligibility and registration method for each activity (open, nominated or team-based).
4. Wellness Champs role, award categories and recognition criteria.
5. Sign-in method for employees.
6. Languages required.
7. Data hosting location and the data protection rules to follow.
8. Consent process for photos and stories, and who approves it.
9. Feedback and participation data to be shared, and with whom.
10. Whether the GROW concepts from the original roadmap (financial simulation, personal development, environmental action) are deferred, merged or still planned.
11. Approved budget and any production, transport, equipment, safety or accessibility requirements.
12. Confirmation that the source brief is cleared for use in building the app.

---

## 9. Definition of done (MVP)

- All **M** requirements in §5 are built and tested on iOS and Android.
- Admin can publish the schedule and reports without a developer.
- Privacy and consent rules in §6 are verified.
- Pilot with one site or team completed and feedback recorded.
- Status for each requirement is updated in [PROGRESS.md](PROGRESS.md).
