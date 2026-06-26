import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import MessageBubble from "../components/MessageBubble";

function Home() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm your AI HR Assistant. Ask me anything related to HR.",
    },
  ]);

  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userMessage,
    },
  ]);

  setInput("");

  try {
    const response = await fetch("https://nrolled-ai-hr-assistant.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: data.reply,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "Server Error!",
      },
    ]);
  }
};

useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }
}, [messages]);

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <Navbar />

      <div className="flex justify-center py-8">
        <div className="w-full max-w-5xl h-[85vh] bg-slate-50 rounded-3xl shadow-2xl flex flex-col overflow-hidden">

          <div className="bg-blue-600 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">
              AI HR Assistant
            </h2>
            <p className="text-sm opacity-90">
              Ask anything about Leave, Payroll, Jobs & Workforce
            </p>
          </div>

          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 bg-slate-50">
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                sender={msg.sender}
                text={msg.text}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 px-4 pb-3">
  {[
    "Leave Policy",
    "Payroll",
    "Attendance",
    "Job Creation",
  ].map((q) => (
    <button
      key={q}
      onClick={() => setInput(q)}
      className="bg-gray-200 hover:bg-blue-100 px-3 py-1 rounded-full text-sm"
    >
      {q}
    </button>
  ))}
</div>

          <div className="border-t bg-white p-4 flex gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white px-6 rounded-2xl font-semibold
"
            >
              Send
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;