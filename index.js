bot.on("message", (msg) => {
  if (msg.text === "/start") {
    bot.sendMessage(msg.chat.id, "Xin chào 😎");
  } else {
    bot.sendMessage(msg.chat.id, "Bạn nói: " + msg.text);
  }
});
