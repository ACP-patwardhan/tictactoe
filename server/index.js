import { Server } from "socket.io";
import {PORT} from './constants.js'

const io = new Server({ /* options */ });
 
io.on("connection", (socket) => {
    console.log("a client connected.")
    console.log("id of client: ", socket.id);
});

console.log("server started, listening on port ", PORT)
io.listen(PORT);
