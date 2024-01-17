"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nodeHttp = _interopRequireWildcard(require("node:http"));
var _nodeCluster = _interopRequireDefault(require("node:cluster"));
var _nodeOs = require("node:os");
var _nodeProcess = _interopRequireDefault(require("node:process"));
var _handles = _interopRequireDefault(require("./controllers/handles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
let server = null || _nodeHttp.Server;
const numCPUs = (0, _nodeOs.availableParallelism)();
const PORT = _nodeProcess.default.env.PORT;
try {
  if (_nodeCluster.default.isPrimary) {
    console.log(`Primary ${_nodeProcess.default.pid} is running`);

    // for workers
    for (let i = 0; i < numCPUs; i++) {
      _nodeCluster.default.fork();
    }
    _nodeCluster.default.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    server = _nodeHttp.default.createServer(_handles.default);
    server.listen(PORT);
    console.log(`Worker ${_nodeProcess.default.pid} started`);
  }
} catch (error) {
  throw new Error(error);
}
var _default = exports.default = server;