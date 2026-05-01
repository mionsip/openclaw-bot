import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY_HERE"
});

export default async function onMessage(msg, { sendMessage }) {
  try {
    if (msg.isSelf) return;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Bạn là trợ lý trả lời tin nhắn Zalo ngắn gọn, tự nhiên." },
        { role: "user", content: msg.text }
      ]
    });

    const reply = completion.choices[0].message.content;

    await sendMessage(msg.from, reply);

  } catch (err) {
    console.error("Error:", err);
  }
}
