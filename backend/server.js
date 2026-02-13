const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://spamapp_user:kOLvHyzod1Xaxурx@cluster0.zoiy67p.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

const spamKeywords = [
  "win",
  "won",
  "lottery",
  "prize",
  "click",
  "free",
  "money",
  "urgent",
  "claim"
];

app.post("/analyze", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ result: "No message provided" });
  }

  const lowerCaseMessage = message.toLowerCase();

  const isSpam = spamKeywords.some(keyword =>
    lowerCaseMessage.includes(keyword)
  );

  if (isSpam) {
    res.json({ result: "Spam" });
  } else {
    res.json({ result: "Safe" });
  }
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

