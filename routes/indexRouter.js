const { Router } = require("express");
const db = require("../db/queries");

// const messages = [
//   {
//     id: 1,
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     id: 2,
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

const indexRouter = Router();

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/:id", async (req, res) => {
  const id = Number(req.params["id"]);

  let message = await db.getSpecificMesage(id);

  res.render("details", { message: message });
});

indexRouter.post("/new", async (req, res) => {
  const { message } = req.body;
  const { userName } = req.body;
  const date = new Date();

  await db.insertMessage(message, userName, date);

  res.redirect("/");
});

indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
});

module.exports = indexRouter;
