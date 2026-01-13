const http = require("http");
const fs = require("fs");
// const { Readable } = require("stream");

const {Transform} = require("stream"); //use this for stream processing . 

const server = http.createServer((req, res) => {
  // -----1---------
  // DOWNLOADING FILE/streams IN A BAD WAY

  // const file = fs.readFileSync("sample.txt");
  // res.end(file);

  // DOWNLOADING STREAMS/files IN A GOOD WAY (STREAM)
  
    // const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res);
  //   res.end();  this res.end() is optional . we usually don't use this because it will end the responce as we are sending data in chunked format. (buffer)
  
  // ---------2---------
    // copy file in a bad way

    // const file = fs.readFileSync("sample.txt")
    // fs.writeFileSync("output.txt", file)
    // // res.end();

    // in this methhod output.txt will create. but it is a bad way to code as it will form or run 1gb file in the ram
   
    // Downloading file in a good way

//     const readStream = fs.createReadStream("sample.txt");
//     const writeStream = fs.createWriteStream("output.txt");

//     readStream.on("data", (chunk) =>{
//       console.log("Chunk:" , chunk);
//       writeStream.write(chunk);
//     })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//stream --> two types : readable and writeable

// readable <---- pipe ----> writeable

// req:  readable stream
  // res:  writeable stream
  
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  
  // ```````````````````````````````````````stream processing----------------------------3-----------------------
  // UPPERCAE
  // ipsum replaced by Abhi


  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("output.txt");
  

  // bad way 
  // readStream.on("data" , (chunk)=>{
  //   const modified = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Abhi")
  //   writeStream.write(modified);
  // })
  
  //  GOOD WAY ------PIPE----------

const transformStream = new Transform({
  transform(chunk, encoding , callback){
    const modifiedWord  = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Abhi_")
    callback(null  , modifiedWord)
  }
})
  readStream.pipe(transformStream).pipe(writeStream);
  
  res.end()
});
server.listen(8000, () => {
      console.log("Server is connected at ", 8000);
    });


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// transform is both readable and writeable. 