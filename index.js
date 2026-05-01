const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

// giữ Railway sống
app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(process.env.PORT || 3000);

// ===== TELEGRAM BOT =====
const bot = new TelegramBot(process.env.TOKEN, {
  polling: true
});

// xử lý lệnh /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Xin chào 😎");
});
