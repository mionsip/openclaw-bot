export default async function onMessage(msg, { sendMessage }) {
  try {
    if (msg.isSelf) return;

    await sendMessage(
      msg.from,
      "Đợi một chút tôi đang bận nhé!!!"
    );

  } catch (err) {
    console.error(err);
  }
}
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is alive");
});

app.listen(process.env.PORT || 3000);
