"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const handleServer = (req, res) => {
  if (req.url === '/') {
    res.send("Hello from the server");
  }
};
const server = _http.default.createServer(handleServer);
server.listen(4001);
console.log('Server is up and running');
var _default = exports.default = server;