import fs from 'fs';

//utilities to deal with file system

// fs.writeFileSync("./demo.txt","good afternoon")

// let data=fs.readFileSync("./demo.txt")

// console.log(data.toString("utf-8"));


fs.appendFileSync("./demo.txt","\ngood afternoon once again")

fs.unlinkSync("./demo.txt")

fs.mkdirSync()

fs.rmdirSync()