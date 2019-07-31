import express from "express";
import {renderToString} from "react-dom/server";

import App from "./app/home";

const server = express();

server.get("/", (req, res) => {
  let app_string = renderToString(<App />);

  res.send(app_string);
});

server.listen(3001);
console.log("Server is running at 3001");
