"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var serverTemplate = function serverTemplate(body) {
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n      <title>Document</title>\n    </head>\n    <body>\n      ".concat(body, "\n    </body>\n    </html>\n  ");
};

var _default = serverTemplate;
exports["default"] = _default;