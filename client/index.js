import { io } from "socket.io-client";
console.log("starting client.....")
const socket = io("http://localhost:3000");

socket.on("connect", ()=>{
    console.log("Connected to server. socket id: ", socket.id);
})

