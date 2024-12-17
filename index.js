const express = require("express");
const handle = require("./handle");

const app = express();

app.use(express.json());

app.enable("case sensitive routing");

app.use(express.static(__dirname + "/public/"));
app.set("view engine", "ejs");

app.locals.title = "Home";

const admin = express();
app.use("/admin", admin);
admin.get("/", (req, res) => {
  res.send(req.protocol);
});

app.get("/", (req, res) => {
  res.send("Hello, Arif Billah");
});

app.param("id", (req, res, next, id) => {
  const user = {
    id,
    name: "arif",
  };

  req.user = user;

  next();
});

app.get("/user/:id", (req, res) => {
  console.log(req.user);

  res.send("Hello params");
});

app
  .route("/a/b")
  .get((req, res) => {
    res.send("get");
  })
  .post((req, res) => {
    res.send("post");
  });

app.get("/html", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
