const http = require("http");
const fs = require("fs");
const { Readable } = require("stream");

const server = http.createServer((req, res) => {
  // -----1---------
  // DOWNLOADING FILE IN A BAD WAY

  // const file = fs.readFileSync("sample.txt");
  // res.end(file);

  // DOWNLOADING STREAMS IN A GOOD WAY (STREAM)
  
    const readableStream = fs.createReadStream("sample.txt");
    readableStream.pipe(res);
  //   res.end();  this res.end() is optional . we usually don't use this because it will end the responce as we are sending data in chunked format. (buffer)
  
  // ---------2---------
    // copy pasting
// bad way to do 

    


});

server.listen(8000, () => {
  console.log("Server is connected at ", 8000);
});

//stream --> two types : readable and writeable

// readable <---- pipe ----> writeable

// req:  readable stream
// res:  writeable stream


