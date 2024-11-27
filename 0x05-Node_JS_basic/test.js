// test.js
const { spawn } = require("child_process");

// Spawn the child process to run 1-stdin.js
const child = spawn("node", ["1-stdin.js"]);

// Handle the child process's output
child.stdout.on("data", (data) => {
  console.log(`Child stdout: ${data}`);
});

// Simulate sending user input to the child process
child.stdin.write("Alice\n");

// Handle the child process's exit
child.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});
