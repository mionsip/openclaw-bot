export default async function onMessage(msg, { sendMessage }) {
  try {
    // bỏ tin nhắn của chính mình
    if (msg.isSelf) return;

    await sendMessage(
      msg.from,
      "Đợi một chút tôi đang bận nhé!!!"
    );

  } catch (err) {
    console.error(err);
  }
}
