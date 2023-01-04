import express from 'express';
import http from 'http'
import { Server } from "socket.io"
import cors from 'cors';
import cookieParser from 'cookie-parser'
const app = express();
import { connection } from './MySQL/mySql';

import cluster from 'node:cluster';
import { cpus } from 'node:os';
import router from "./routes/router";
const PORT = process.env.PORT;
const server = http.createServer(app)
const $searchMessegesSQL = "SELECT * FROM `userMessage` WHERE `id_d` = ?;";


const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }
})



app.use(cookieParser());
app.use(cors(
  {
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  }
));
app.use(express.json());
app.use('/api', router);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('user', (message) => {
    setInterval(() => {
      connection.query($searchMessegesSQL, message.message, (err, results, fields) => {
        if (err) return console.log(err);
        socket.emit("user", results);
      });
    }, 500);
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
let users = {
  name: "Ritik",
  Age: "18"
}

server.get('/setuser', (req, res) => {
  res.cookie("userData", users);
  res.send('user data added to cookie');
});

server.get('/getuser', (req, res) => {
  //shows all the cookies
  res.send(req.cookies);
});
*/

//////////////////read a file//////////////////////////////
/*
import fs from "fs";
fs.readFile('./text/bagdan.txt', 'utf8', function (err, data) {
  server.get("/text", (req, res) => {
    res.json(`${data}`);
  });
});*/




/*

type typeDBusers = {
  id: number,
  nickName: string,
  email: string,
  password: string
};

const dataBase: {users: typeDBusers[]} = {
  users: [
    {id:1, nickName: "David", email: "givaslook@gmail.com", password: "1244rdhrt65"},
    {id:2, nickName: "Michael", email: "minsksity@mail.ru", password: "Afdrhtr456"},
    {id:3, nickName: "Pedra", email: "vasilisy@mail.tut", password: "SDF_56556r"},
    {id:4, nickName: "Linkoln", email: "const123f@mail.ru", password: "eww456567"},
    {id:5, nickName: "Imbra", email: "fgghesf234ftt@bing.com", password: "bfdgnmgm4354"}
  ]
};*/

