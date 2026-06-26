from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def home():
    return{
        "message": "welcome to NROLLED AI HR Assistant"
    }

@app.get('/health')
def health():
    return{
        "status": "Backend is running successsfully"
    }

