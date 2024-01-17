import http from 'http';

const PORT = process.env.PORT;

const handleServer = (req, res) => {
  if(req.url === '/') {
    res.end("Hello from the server");
  }
}

const server = http.createServer(handleServer);
server.listen(PORT);

console.log(`Server is up and running at port ${PORT}`);

export default server;
