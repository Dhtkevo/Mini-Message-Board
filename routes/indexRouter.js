const { Router } = require("express");

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/:id", (req, res) => {
  const id = Number(req.params["id"]);
  let message = null;
  for (let msg of messages) {
    if (msg.id === id) {
      message = msg;
      break;
    }
  }

  res.render("details", { message: message });
});

indexRouter.post("/new", (req, res) => {
  const { message } = req.body;
  const { userName } = req.body;
  const date = new Date();

  messages.push({ user: userName, text: message, added: date });
  res.redirect("/");
});

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;
