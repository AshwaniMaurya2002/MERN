import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO ");
});

app.get("/login", (req, res) => {
  res.send("Login ");
});
app.get("/signup", (req, res) => {
  res.send("Signup ");
});

app.get("/jokes", (req, resp) => {
  const jokes = [
    {
      id: 1,
      setup: "Why don't programmers like nature?",
      punchline: "It has too many bugs.",
      category: "Programming",
    },
    {
      id: 2,
      setup: "Why did the Java developer wear glasses?",
      punchline: "Because they couldn't C#.",
      category: "Programming",
    },
    {
      id: 3,
      setup: "Why do Java developers prefer dark mode?",
      punchline: "Because light attracts bugs.",
      category: "Programming",
    },
    {
      id: 4,
      setup: "Why was the computer cold?",
      punchline: "It left its Windows open.",
      category: "Technology",
    },
    {
      id: 5,
      setup: "Why did the developer go broke?",
      punchline: "Because they used up all their cache.",
      category: "Programming",
    },
    {
      id: 6,
      setup: "How many programmers does it take to change a light bulb?",
      punchline: "None. That's a hardware problem.",
      category: "Programming",
    },
    {
      id: 7,
      setup: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts.",
      category: "General",
    },
    {
      id: 8,
      setup: "What do you call fake spaghetti?",
      punchline: "An impasta.",
      category: "Food",
    },
    {
      id: 9,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field.",
      category: "General",
    },
    {
      id: 10,
      setup: "Why couldn't the bicycle stand up by itself?",
      punchline: "Because it was two-tired.",
      category: "General",
    },
  ];
  res.json(jokes);
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
