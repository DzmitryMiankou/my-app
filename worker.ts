import express from 'express';
import http from 'http'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import cluster from 'node:cluster';
import { cpus } from 'node:os';
import router from "./routes/router";
import { Server } from 'socket.io';
import { connection } from './MySQL/mySql';



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



const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,

  },
});


io.on('connection', (socket: any) => {

  console.log(socket.rooms);
  socket.on('chat message', (data: any) => {
    const ds = JSON.parse(data);
    const now = new Date().toJSON();
    const dateTime = new Date(now);
    connection.query("INSERT INTO `userMessage` VALUES (?, ?, ?, ?, ?, ?);", [null, ds.dialogId, ds.id, ds.userId, ds.messegData, dateTime], (err, results, fields) => {
      if (err) return console.log(err);
    });
    connection.query("SELECT * FROM`userMessage` WHERE`id_d` = ?;", ds.dialogId, (err, results, fields) => {
      if (err) return console.log(err);
      io.emit('chat message',
        results
      );
    })
  });

  socket.on('mess', (data: any) => {
    const ds = JSON.parse(data);
    connection.query("SELECT * FROM`userMessage` WHERE`id_d` = ?;", ds.dialogId, (err, results, fields) => {
      if (err) return console.log(err);
      io.emit('mess',
        results
      );
    })
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


/*
let gcInterval: any;

function init() {
  gcInterval = setInterval(function () { gcDo(); }, 2000);
}

function gcDo() {
  //@ts-ignore
  global.gc();
  clearInterval(gcInterval);
  init();
}

init();*/
/*connection.query("SELECT * FROM`userMessage` WHERE`id_d` = ?;", 42, (err, results, fields) => {
      if (err) return console.log(err);
      //console.log(results);
      return results;
    })*/