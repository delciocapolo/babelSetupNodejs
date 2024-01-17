import http from 'http';

const handleServer = (req, res) => {
  if(req.url === '/') {
    res.send("Hello from the server");
  }
}

const server = http.createServer(handleServer);
server.listen(4001);

console.log('Server is up and running');

export default server;
