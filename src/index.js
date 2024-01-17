import http, {Server} from 'node:http';
import cluster from 'node:cluster';
import { availableParallelism } from 'node:os';
import process from 'node:process';
import handleServer from './controllers/handles';

let server = null || Server;
const numCPUs = availableParallelism();
const PORT = process.env.PORT;

try {
  
  if(cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
  
    // for workers
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  }
  else {
    server = http.createServer(handleServer);
    server.listen(PORT);
    
    console.log(`Worker ${process.pid} started`);
  }
} catch (error) {
  throw new Error(error);
}

export default server;
