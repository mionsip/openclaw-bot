import express from "express";

const app = express();
app.use(express.json());

// fake webhook nhận tin nhắn
app.post("/webhook", (req, res) => {
  console.log("Tin nhắn:", req.body);

  // luôn trả lời cố định
  console.log("Reply: Đợi một chút tôi đang bận nhé!!!");

  res.sendStatus(200);
});

// keep alive cho UptimeRobot
app.get("/", (req, res) => {
  res.send("BOT OK");
});

app.listen(process.env.PORT || 3000);
