
const setupInput = function(key) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = function(key) {
    console.log(key);
    if (key === '\u0003') {
      process.exit(); 
    }
    if (key === "w") {
      console.log("up");
    }
    if (key === "a"){
      console.log("left");
    }
    if (key === "s") {
      console.log("down");
    }
    if (key === "d") {
      console.log("right");
    }
  }
  stdin.on("data", handleUserInput);


  // handleUserInput();
  return stdin;

}

// setupInput();

// module.exports = { connect }
module.exports = { setupInput }