import bodyParser from "body-parser";
import express from "express"; // commun <---
import cors from "cors";
// const express = require("express");
const app = express();
const port = 4000;

const teams = {
  gremio: ["suarez", "pedrinho", "josé"],
  internacional: ["carlitos", "ruan", "marquinhos"],
};

app.use(cors());

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/teams/:name", (req, res) => {
  const players = teams[req.params.name];

  if (players) {
    return res.json({
      players,
    });
  }

  return res.status(404).json({
    message: "team not found!",
  });
});

app.get("/find-players", (req, res) => {
  return res.render("index");
});

// MVC <----
// app.post("/find-players", (req, res) => {
//   const players = teams[req.body.team];

//   if (players) {
//     return res.write(
//       `
//         <h1>
//             selecione o seu time
//         </h1>
//         <form method='POST'>
//             <select name='team'>
//                 <option value='gremio'>Gremio</option>
//                 <option value='internacional'>Internacional</option>
//             </select>
//             <button type='submit'>submit</button>
//         </form>
//         <ul>
//         ${players.map((p) => `<li>${p}</li>`)}
//         </ul>
//         `
//     );
//   }

//   throw new Error("wtf");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
