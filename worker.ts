import express from 'express';
import http from 'http'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import cluster from 'node:cluster';
import { cpus } from 'node:os';
import router from "./routes/router";
import { Server } from 'socket.io';



const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;




app.use(cookieParser());
app.use(cors(
  {
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  }
));
app.use(express.json());
app.use('/api', router);



const socketIO = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'],
  }
});

socketIO.on('connection', (socket: any) => {
  console.log(` user just connected!`);

  socket.on('chat message', (data: any) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });

});



async function start() {
  try {
    console.log('Start server');
  } catch (error) {
    console.log('Server Error', error);
    process.exit(1)
  }
}
start();

if (cluster.isPrimary) {
  const cpusCount = cpus().length;
  for (let i = 0; i < cpusCount / 2; i++) {
    cluster.fork();
  };
  cluster.on('exit', (worker, code, signal) => {
    cluster.fork();
  })
} else {
  server.listen(PORT);
}
