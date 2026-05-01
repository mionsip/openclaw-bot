import express from "express";

const app = express();

// health check cho UptimeRobot
app.get("/", (req, res) => {
  res.send("Bot is alive");
});

// webhook / bot logic (giả lập)
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Bot running on port", PORT);
});
