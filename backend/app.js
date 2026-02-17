const http = require("http");

const server = http.createServer((req, res) => {
  const hostname = process.env.HOSTNAME || "unknown";
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Served by backend: ${hostname}\n`);
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
