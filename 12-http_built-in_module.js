// @1:36:30 Creating our simple server that we can access in the webpage thorough our localhost computer at port 5000

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back home</a>
  `);
});

server.listen(5000);
