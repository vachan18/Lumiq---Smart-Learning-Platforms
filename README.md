# 🧠 Lumiq — Learn at the Speed of Light

[![Lumiq CI](https://github.com/vachan18/Lumiq---Smart-Learning-Platforms/actions/workflows/ci.yml/badge.svg)](https://github.com/vachan18/Lumiq---Smart-Learning-Platforms/actions/workflows/ci.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-Netlify-00C7B7?logo=netlify&logoColor=white)](https://limuq.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **AI Study Buddy Hackathon Submission** — UnsaidTalks × Unstop

An AI-powered, all-in-one personalized learning platform that transforms your PDFs and study notes into summaries, flashcards, quizzes, mind maps, and more — right in your browser. No backend required.

---

## 🎬 Demo Video

🔗 https://drive.google.com/drive/folders/1A198jWgBrJlzCQRlp76YQXrLiUEZ1BaV?usp=drive_link

---

## 🌐 Live Site

🚀 https://limuq.netlify.app/
---

## ✨ Features

### 📄 Core AI Study Tools
| Feature | Description |
|---|---|
| **AI Summarizer** | Upload PDFs → get concise, topic-wise summaries instantly |
| **Flashcard Generator** | Auto-generates flip cards with Spaced Repetition (SRS) ratings |
| **Quiz Simulator** | Multiple-choice quiz generation with instant scoring |
| **Mind Map Generator** | Visual mind maps built from your study material |
| **Study Schedule Planner** | AI-generated personalized revision schedule |
| **AI Tutor Chat** | Chat with an AI tutor that has context of your documents |

### 🤖 Multi-Provider AI Support
Works with **4 different AI providers** — pick whichever you have a key for:
- 🟣 **Claude** (Anthropic) — `sk-ant-...`
- 🔵 **Gemini** (Google) — `AIzaSy...` ← _Recommended, truly free_
- 🟢 **OpenAI** (GPT-4o mini) — `sk-...`
- 🟡 **Groq** (Llama 3.3) — `gsk_...` ← _Fastest, truly free_

### 🎮 Gamification
- XP & Leveling system — earn XP for completing sessions
- Badges — unlock achievements (First Flash, Perfect Quiz, etc.)
- Leaderboard — competitive XP rankings
- Confetti celebrations on milestones

### ⏱️ Productivity Tools
- **Pomodoro Timer** — built-in focus timer with work/break cycles
- **Exam Countdown** — live day/hour/minute countdowns to your exams
- **Progress Dashboard** — charts and analytics of all study sessions
- **Weak Topics Tracker** — identifies areas needing more revision

### 🎨 UI/UX
- 4 Themes: **Dark**, **Light**, **Vibrant**, **Minimal**
- Fully responsive — works on desktop and mobile
- Touch swipe support for flashcards
- Keyboard shortcuts (1–5 = switch tabs, Space = flip card, Ctrl+Enter = send chat)
- PDF export for summaries and flashcards
- Offline detection

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Vanilla HTML5, CSS3, JavaScript — zero frameworks |
| **AI Providers** | Claude API / Gemini API / OpenAI API / Groq API |
| **PDF Parsing** | PDF.js (client-side, no upload to server) |
| **Charts** | Chart.js |
| **Export** | jsPDF |
| **Icons** | Lucide Icons |
| **Fonts** | Fraunces, DM Mono, Plus Jakarta Sans |
| **Storage** | Browser localStorage (XP, badges, SRS ratings, sessions) |

> ✅ **Single file app** — everything is in `index.html`. No npm, no build step, no backend.

---

## ⚙️ Setup & Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/lumiq-study-buddy.git
cd lumiq-study-buddy
```

### 2. Open the app
Just double-click `index.html` — it opens directly in your browser. No server needed.

### 3. Get a free API key

| Provider | Where to get it | Free? |
|---|---|---|
| **Gemini** | [aistudio.google.com](https://aistudio.google.com) → Get API Key | ✅ Yes |
| **Groq** | [console.groq.com](https://console.groq.com) → API Keys | ✅ Yes |
| **Claude** | [console.anthropic.com](https://console.anthropic.com) | $5 credits |
| **OpenAI** | [platform.openai.com](https://platform.openai.com) | Limited |

### 4. Add your key in the app
1. Select your provider from the **dropdown** in the top-right header
2. Paste your API key in the 🔑 input field
3. Click **Save** — the dot turns green ✅
4. Upload a PDF and start studying!

---

## 📁 Project Structure

```
lumiq-study-buddy/
├── index.html      # Entire app — HTML + CSS + JS in one file
└── README.md       # This file
```

---

## 🎯 How It Works

```
Upload PDF  →  PDF.js extracts text  →  Text sent to AI API
     ↓
AI generates: Summary / Flashcards / Quiz / Mind Map / Schedule
     ↓
User interacts → XP earned → Progress tracked in localStorage
```

---

## 📊 Hackathon Evaluation Criteria

| Criteria | How Lumiq Addresses It |
|---|---|
| **Impact (20%)** | Solves all 3 core problems: summarization, flashcards, quizzes — plus extras |
| **Innovation (20%)** | SRS engine, gamification, multi-provider AI, Pomodoro + exam countdown, 4 themes |
| **Technical Execution (20%)** | Single-file zero-dependency app, client-side PDF parsing, robust error handling |
| **User Experience (25%)** | Polished themes, mobile-responsive, swipe gestures, keyboard shortcuts, PDF export |
| **Presentation (15%)** | See demo video above |

---

## 🔮 Future Roadmap

- [ ] Backend server for secure API key handling
- [ ] User authentication + cloud sync
- [ ] OCR support for scanned/image PDFs
- [ ] Anki export for flashcards
- [ ] Collaborative study rooms
- [ ] Mobile app (PWA)

---

## 👤 Author

  Vachan U S 
- GitHub: https://github.com/vachan18
- Email: vachanus@email.com

---

## 📄 License

MIT License — free to use, fork, and build upon.


