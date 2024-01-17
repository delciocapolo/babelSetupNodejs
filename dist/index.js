"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PORT = process.env.PORT;
const handleServer = (req, res) => {
  if (req.url === '/') {
    res.end("Hello from the server");
  }
};
const server = _http.default.createServer(handleServer);
server.listen(PORT);
console.log(`Server is up and running at port ${PORT}`);
var _default = exports.default = server;