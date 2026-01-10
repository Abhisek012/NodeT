const EventEmitter = require("events");

const emitter = new EventEmitter();

//keymethods:
// on(eventname , listener) --- create
// emit(eventName , [args]) --- execute


// emitter.on("GREET", (username , id) => {
//   console.log(`Hello world ${username} & the id is ${id}`);
// });

// emitter.emit("GREET", "ABHI" , "758947"); // we wil write this in a better way

emitter.on("GREET" ,(args) =>{
    console.log(`Hello world ${args.username} and the id is ${args.id}` );
    
}) //create

emitter.emit("GREET" ,{
    username:"ABHI",
    id: "75"
} ) //execute
