# 🤖 NROLLED AI HR Assistant

An AI-powered HR chatbot built with **React**, **FastAPI**, and **Groq Llama 3.3**. The assistant provides quick and accurate responses to HR-related questions, including leave policies, payroll, attendance, onboarding, recruitment, and workforce management.

---

## 🚀 Live Demo

**Frontend (Vercel)**
https://nrolled-ai-hr-assistant-6hwuq9qlw-abdey-alis-projects.vercel.app

**Backend API (Render)**
https://nrolled-ai-hr-assistant.onrender.com

---

## ✨ Features

* 🤖 AI-powered HR chatbot
* ⚡ Groq Llama 3.3 integration
* 📚 Structured HR knowledge base
* 💬 Suggested question buttons
* 🔄 Real-time AI responses
* 📱 Responsive React interface
* 🚀 FastAPI REST API backend
* 🎨 Modern chat-style UI

---

## 🛠️ Tech Stack

### Frontend

* React
* Tailwind CSS
* Vite

### Backend

* FastAPI
* Python
* Groq API
* Uvicorn

### Tools

* GitHub
* Vercel
* Render

---

## 🧠 AI Integration

The chatbot uses **Groq's Llama 3.3** model to generate HR-related responses.

A structured HR knowledge base is supplied through the system prompt, helping the assistant remain focused on company HR topics such as:

* Leave Policy
* Payroll
* Attendance
* Job Creation
* Workforce Management
* Employee Onboarding

---

## 📂 Project Structure

```text
NROLLED-AI-HR-ASSISTANT/
│
├── client/          # React Frontend
│
├── server/          # FastAPI Backend
│   ├── main.py
│   ├── hr_data.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Local Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd NROLLED-AI-HR-ASSISTANT
```

### 2. Backend Setup

```bash
cd server
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint  | Description          |
| ------ | --------- | -------------------- |
| GET    | `/`       | Welcome message      |
| GET    | `/health` | Backend health check |
| POST   | `/chat`   | AI chat endpoint     |

---

## 📌 Future Improvements

* Conversation memory
* Retrieval-Augmented Generation (RAG)
* Authentication & Authorization
* Admin dashboard
* Database-backed HR policies
* Chat history
* User profile management

---

## 👨‍💻 Author

Developed as an AI-powered HR Assistant project using modern full-stack technologies including React, FastAPI, and Groq Llama 3.3.
