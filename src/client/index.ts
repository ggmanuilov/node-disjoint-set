import Client from "./Client";
import * as fs from "fs";
const readline = require("readline");
const minimist = require("minimist");

const parseArgs = minimist(process.argv.slice(2));

if (!parseArgs.hasOwnProperty("path")) {
  console.error(
    "Invalid argument path. Example dataProvider.ts --path=<some path>"
  );
  process.exit();
}

const filePath = parseArgs.path;
const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
  input: fileStream
});

const getLine = (() => {
  const getLineGen = (async function*() {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => (await getLineGen.next()).value;
})();

const appId = Math.floor(Math.random() * Math.floor(100));

const host = "127.0.0.1:50051";
let dsuService = new Client(host);

// @ts-ignore
const done = async () => {
  await dsuService.transferEnd(appId);
  console.log("work is done");
  dsuService.destroy();
  process.exit();
};

const main = async (): Promise<void> => {
  try {
    await dsuService.transferBegin(appId);

    let line;
    while ((line = await getLine())) {
      console.log("line", line);

      // @ts-ignore
      let row = line.split(" ");
      if (row.length !== 2) throw `invalid pair: ${row}`;

      await dsuService.unite(appId, parseInt(row[0]), parseInt(row[1]));
    }

    await done();
  } catch (e) {
    console.error(e);
  }
};
main();
