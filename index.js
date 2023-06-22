const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const BattlePacket = require('./class/BattlePacket');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/test.html');
});

// 트룹 데이터 저장을 위한 Map 객체
const troopMap = new Map();

// '/test/:troopername' 엔드포인트에 대한 처리
app.get('/test/:battleName', (req, res) => {
  const battleName = req.params.battleName;
  
  // troopMap에서 해당 배틀명의 BattlePacket 가져오기
  const battlePacket = troopMap.get(battleName);
  
  if (battlePacket) {
    res.json(battlePacket); // BattlePacket 반환
  } else {
    res.status(404).send('BattlePacket not found'); // BattlePacket이 존재하지 않을 경우 404 에러 반환
  }
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

  socket.on('troopdata', (item) => {
    const t = new BattlePacket(item);
    
    // troopMap에 트룹 데이터 저장
    troopMap.set(t.BattleName, t);
    
    io.emit('Battle data', t);
    console.log(t);
  });
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
