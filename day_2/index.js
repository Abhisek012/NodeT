const http = require("http");
const fs = require("fs");

const PORT = 8000;

const myServer = http.createServer((request, response) => {
  const log = `${Date.now()}: & from ${request.url} New Request Recieved.\n`;

  fs.appendFile("log.text", log, (err) => {
    if (err) {
      console.log("Error writing to the log file:", err);
      response.statusCode = 500;
      response.end("Internal Server Error");
      return;
    } else {
      hi;
      response.end("Hello world from Server.");
    }
  });
});

myServer.listen(PORT, () => {
  console.log(`Server is connectes 🐘 ${PORT} `);
});
