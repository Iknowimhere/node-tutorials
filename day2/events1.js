import EventEmitter from 'events';

let emitter=new EventEmitter()

//this is async function which lets event emitt only once
emitter.once("some-event",()=>{
    console.log("this will get executed only once");
})
emitter.once("some-event",()=>{
    console.log("this will get executed only once");
})

// emitter.emit("some-event")
// emitter.emit("some-event")

//this gives number of event count
console.log(emitter.listenerCount("some-event"))