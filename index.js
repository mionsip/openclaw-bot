const express = require("express");
const app = express();

// route để Railway ping
app.get("/", (req, res) => {
  res.send("OpenClaw is running!");
});

// chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server chạy cổng " + PORT);
});

// ===== BOT CỦA BẠN =====
// ví dụ Discord:
const { Client } = require("discord.js");
const client = new Client({ intents: [] });

client.once("ready", () => {
  console.log("Bot online!");
});

client.login(process.env.TOKEN);
