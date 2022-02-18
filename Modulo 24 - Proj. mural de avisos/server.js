const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api");

const PORT = 3000;

const server = express();
server.use("/", express.json());

/* Para garantir que uma chamada a api não busque por uma pasta posteriormente existente ou não denominada 'api', devemos realizar primeiro a chamada da rota "/api" e depois das demais existentes em "public" */

server.use("/api", apiRoute);
server.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, () => {
  console.log(`The server is running correctly on Port ${PORT}`);
});
