import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq
from hr_data import HR_CONTEXT

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "https://nrolled-ai-hr-assistant-6hwuq9qlw-abdey-alis-projects.vercel.app",
],
    
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str


SYSTEM_PROMPT = HR_CONTEXT


@app.get("/")
def home():
    return {"message": "Backend Running 🚀"}


@app.post("/chat")
def chat(request: ChatRequest):

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": request.message,
            },
        ],
        temperature=0.3,
    )

    reply = completion.choices[0].message.content

    return {
        "reply": reply
    }