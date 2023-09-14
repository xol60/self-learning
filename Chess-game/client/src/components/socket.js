import { io } from "socket.io-client"; // import connection function

const socket = io('localhost:3001'); // initialize websocket connection

export default socket;