"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const handleServer = (req, res) => {
  if (req.url === '/') {
    return res.end('Server acessed');
  }
};
var _default = exports.default = handleServer;