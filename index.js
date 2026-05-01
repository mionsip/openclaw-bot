const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

// giữ Railway không sleep
app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(process.env.PORT || 3000);

// ===== TELEGRAM BOT =====
const bot = new TelegramBot(process.env.TOKEN, {
  polling: true
});

// ===== LỆNH /start =====
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 
    "👋 Xin chào!\nChọn chức năng bên dưới:",
    {
      reply_markup: {
        keyboard: [
          ["📜 Menu", "🤖 Chat"],
          ["ℹ️ Info"]
        ],
        resize_keyboard: true
      }
    }
  );
});

// ===== XỬ LÝ TIN NHẮN =====
bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  // tránh lặp lại /start
  if (text === "/start") return;

  if (text === "📜 Menu") {
    bot.sendMessage(chatId, "📋 Đây là menu:\n- Chat\n- Info");
  }

  else if (text === "🤖 Chat") {
    bot.sendMessage(chatId, "💬 Bạn cứ nhắn gì đi, tôi sẽ trả lời!");
  }

  else if (text === "ℹ️ Info") {
    bot.sendMessage(chatId, "🤖 Bot tạo bởi bạn 😎");
  }

  else {
    // chat bình thường
    bot.sendMessage(chatId, "🧠 Bạn nói: " + text);
  }
});
