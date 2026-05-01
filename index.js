bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  // bỏ qua /start để không bị trùng
  if (text === "/start") return;

  if (text === "📜 Menu") {
    bot.sendMessage(chatId, "📋 Đây là menu:\n- Chat\n- Info");
  }

  else if (text === "🤖 Chat") {
    bot.sendMessage(chatId, "💬 Bạn cứ nhắn gì đi!");
  }

  else if (text === "ℹ️ Info") {
    bot.sendMessage(chatId, "🤖 Bot của bạn 😎");
  }

  else {
    // trả lời gọn, không lặp nguyên câu
    bot.sendMessage(chatId, "🤖 Tôi đã nhận tin nhắn của bạn!");
  }
});
