import EventEmitter from 'events';

class myClass extends EventEmitter{}
let student=new myClass();
//parents
student.on("result",()=>{
    console.log("parents are happy");
})
//relatives
student.on("result",()=>{
    console.log("relatives are sad");
})
//friends
student.o98n("result",()=>{
    console.log("friends are in shock");
})

student.emit("result");