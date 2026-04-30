const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

// giữ cho Railway không sleep ngay
app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(process.env.PORT || 3000);

// ===== TELEGRAM BOT =====
const bot = new TelegramBot(process.env.TOKEN, {
  polling: true
});

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Bot đang chạy 🚀");
});
