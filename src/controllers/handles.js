const handleServer = (req, res) => {
  if(req.url === '/') {
    return res.end('Server acessed');
  }
}

export default handleServer;
