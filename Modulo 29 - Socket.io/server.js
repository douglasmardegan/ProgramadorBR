const express = require("express");
const path = require("path");
const socketIO = require("socket.io");
const app = express();
const PORT = 3000;
const io = socketIO(server);

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./users"); 
}

app.use(express.static(__dirname + "/public"));

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// "Chat room" messages config
const chat_room = io.of("/chat_room.html").on("connection", (socket) => {
  console.log("A user has connected");

  socket.emit("update_messages", messages.chat_room);

  socket.on("new_message", (data) => {
    messages.chat_room.push(data.msg);

    chat_room.emit("update_messages", messages.chat_room);
  });
});

// "Study room chat" messages config
const study_room = io.of("/study_room.html").on("connection", (socket) => {
  console.log("A user has connected");

  socket.emit("update_messages", messages.study_room);

  socket.on("new_message", (data) => {
    messages.study_room.push(data.msg);

    study_room.emit("update_messages", messages.study_room);
  });
});

// "Fun room chat" messages config
const fun_room = io.of("/fun_room.html").on("connection", (socket) => {
  console.log("A user has connected");

  socket.emit("update_messages", messages.fun_room);

  socket.on("new_message", (data) => {
    messages.fun_room.push(data.msg);

    fun_room.emit("update_messages", messages.fun_room);
  });
});

// "Socket" used as an argument of the callback function below represents a user or a browser
// Each user is a "socket"
/* io.on("connection", (socket) => {
  console.log("A user has connected");

  socket.emit("update_messages", messages)

  // Receiving message emitted from frontend to backend
  socket.on("new_message", (data) => {
    messages.push(data.msg);

    io.emit("update_messages", messages)
  })
}); */
