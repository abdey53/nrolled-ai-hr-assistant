# NROLLED AI HR Assistant

## Overview
An AI-powered HR chatbot built using React, FastAPI, and Groq Llama 3.3. It answers HR-related queries such as leave policy, payroll, job creation, attendance, onboarding, and workforce management.

## Features
- AI-powered HR chatbot
- Groq Llama 3.3 integration
- Structured HR knowledge base
- Suggested question buttons
- Responsive React UI
- FastAPI backend
- REST API

## Tech Stack
- React
- Tailwind CSS
- FastAPI
- Groq API
- Python
- GitHub

## AI Usage
Groq's Llama 3.3 model is used to generate HR responses. A structured HR context is supplied as the system prompt so the chatbot stays focused on HR topics.

## Setup
### Backend
cd server
pip install -r requirements.txt
uvicorn main:app --reload

### Frontend
cd client
npm install
npm run dev

## Future Improvements
- Conversation memory
- RAG with HR documents
- Authentication
- Admin dashboard
- Database-backed HR policies
