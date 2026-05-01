app.post("/webhook", (req, res) => {
  console.log("Zalo message:", req.body);

  return res.json({
    reply: "Đợi một chút tôi đang bận nhé!!!"
  });
});
