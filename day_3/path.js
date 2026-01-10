const path = require("path");

console.log("FILENAME🗃️" , __filename);
console.log("DIRNAME📁", __dirname);

//school management system 

// folder/students/data.txt

// 1. join()
const filepath = path.join("folder", "students", "data.txt")

// join is used because in mac and linux the path is denoted in forward / slash but in windows it is backward slash i.e. \ . .path method identify your system and make it accordingly to your system 

const parseDataPath = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({
    parseDataPath,
    resolvedPath,
    extname,
    basename,
    dirname
});


//JSON.stringify() -- turns object into an json
//JSON.parse() -- turns json into objects