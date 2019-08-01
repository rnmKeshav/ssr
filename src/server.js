import express from "express";
import React from 'react';
import {renderToString} from "react-dom/server";

import App from "./app/home";
import ServerTemplate from "./server_template";

const server = express();

server.get("/", (req, res) => {
  let app_string = renderToString(<App />);

  res.send(ServerTemplate(app_string));
});

server.listen(3001);
console.log("Server is running at 3001");
