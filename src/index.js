import http from 'node:http';
import cluster from 'node:cluster';
import { availableParallelism } from 'node:os';
import process from 'node:process';

import handleServer from '../controllers/handles.js';

const numCPUs = availableParallelism();
const PORT = process.env.PORT;

if(cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // for workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
    const server = http.createServer(handleServer);
    server.listen(PORT);

    console.log(`Server is up and running at port ${PORT}`);
    console.log(`Worker ${process.pid} started`);
}

export default server;
