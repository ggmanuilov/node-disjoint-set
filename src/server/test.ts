import * as path from "path";
import * as fs from "fs";
const stream = require("stream");
const readline = require("readline");

const filePath = path.resolve(__dirname, "../data/union_check.txt");
const readStream = fs.createReadStream(filePath);

const main = async () => {
  function readLines(input: NodeJS.ReadableStream) {
    const output = new stream.PassThrough({ objectMode: true });
    const rl = readline.createInterface(input);
    rl.on("line", (line: string) => {
      output.write(line);
    });
    rl.on("close", () => {
      output.push(null);
    });
    return output;
  }

  for await (let line of readLines(readStream)) {
    console.log(line);
    process.exit();
  }
};

main();
