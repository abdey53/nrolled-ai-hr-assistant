function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-end gap-2 mb-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
          🤖
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[70%] px-5 py-3 rounded-3xl shadow-md ${
          isUser
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white"
        }`}
      >
        {text}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center flex-shrink-0">
          👤
        </div>
      )}
    </div>
  );
}

export default MessageBubble;