import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";

import { Server } from "socket.io";

import { router } from "./routes";


const app = express();
// Responsible for allowinclients to connect or not
app.use(cors())

// Create an Http server
const serverHttp = http.createServer(app);

// Create io 
const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log(`User connected to socket ${socket.id}`)
})

// Allow requests in JSON form
app.use(express.json());

app.use(router);

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

//github will use this callback route to return a code
app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);
})

export { serverHttp, io };