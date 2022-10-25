const express = require("express");
const app = express();

app.get("/home", (request, response) =>
  response.sendFile(__dirname + "/views/home.html")
);
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);
app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/photogallery.html")
);
app.use(express.static(__dirname + "/public"));
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
