import { ChatCompletionRequestMessageRoleEnum } from "openai";
import chatgpt from "./ChatGPT.js";
import express from "express";
const app = express();
app.use(express.json());

const port = 3334;

const client = chatgpt.chatgpt;

const result = async function (message) {
  return await client.respond([
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        "You are a helpful assistant who has 30 years of scientific research project.",
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: message,
    },
  ]);
};
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.sendStatus(200);
});

app.post(`/gpt`, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  console.log(res.json({ message: req.body }));
  result(res.json({ message: req.body })).then((n) => {
    res.send(n.text);
  });
});
app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
