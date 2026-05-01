import express from "express";

const app = express();

// endpoint UptimeRobot cần
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Bot alive on port", PORT);
});
