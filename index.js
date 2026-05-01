import express from "express";

const app = express();
app.use(express.json());

// webhook nhận tin nhắn từ Zalo
app.post("/webhook", (req, res) => {
  console.log("Message from Zalo:", req.body);

  // luôn trả lời cố định
  return res.json({
    reply: "Đợi một chút tôi đang bận nhé!!!"
  });
});

// keep alive
app.get("/", (req, res) => {
  res.send("BOT OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Bot running on port", PORT);
});
