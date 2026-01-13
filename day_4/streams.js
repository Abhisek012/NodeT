const { Readable , Writable} = require("stream");

const readableStream = new Readable({
    highWaterMark: 4,  //6 bytes . 1 bytes = 8 bits. one character(ex: A) = 1 bytes.   
    read(){},
})

const writeableStream = new Writable({
    write(streamData){
        console.log("Writing..." , streamData);

        
    }
})

readableStream.on("data" , (chunk)=>{
    console.log("Chunk" , chunk);
    writeableStream.write(chunk)
})


// to convert this into string directly
// readableStream.on("data" , (chunk)=>{
//     console.log("Chunk" , chunk.toString());
//     writeableStream.write(chunk)
// })





console.log(readableStream.push("Hello")); //console.log to know the situation (i.e true or false) according to highWaterMark

//hello : 5 bytes

// here we set the stream limit by using highWaterMark. 
// if it is 4 it will show error warning as hello is beyond 4 bytes .

// if we use 4 it will print false as we tried to console.log it 
// true if it is dedined more than 5. 