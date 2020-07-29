const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50541,

  });
  conn.setEncoding('utf8'); 

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write('Name: DGM');
  });
conn.on("connect", () => {
    conn.write("Move: up")
    setTimeout(() => {
      process.stdout.write(conn.write("Move: left"))
    }, 100);
    setTimeout(() => {
      process.stdout.write(conn.write("Move: up"))
    }, 200);
    setTimeout(() => {
      process.stdout.write(conn.write("Move: right"))
    }, 300);
    setInterval(() => {
      process.stdout.write(conn.write("Move: left"))
    }, 200);
    setTimeout(() => {
      process.stdout.write(conn.write("Move: down"))
    }, 400);
  })

  conn.on("data", function (message) {
  
    console.log(message);

    });
  return conn;
  }
  module.exports = { connect }



