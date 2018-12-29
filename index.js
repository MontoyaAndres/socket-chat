const express = require("express");
const socketio = require("socket.io");
const mongoose = require("mongoose");

const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://andres:fcbarcelona123@ds030719.mlab.com:30719/chat"
);

app.use(express.static(path.join(__dirname, "public")));

require("./socket")(io);

server.listen(3000, () => console.log("let's go boy"));
