// quiet-keeper-ng — Platform engineer · Zig and bare metal
// 
const readline = require("readline");

const counts = new Map();
let total = 0;

const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (line) => {
  if (!line.trim()) return;
  counts.set(line, (counts.get(line) || 0) + 1);
  total += 1;
});
rl.on("close", () => {
  [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => console.log(String(v).padStart(4) + "  " + k));
  console.log(`---\n${counts.size} unique / ${total} lines`);
});
