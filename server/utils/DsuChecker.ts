const stream = require("stream");
import DsuServiceRank from "../services/DsuServiceRank";
import * as path from "path";
import * as fs from "fs";
import DiffType from "../services/DsuTypes";
const readline = require("readline");

class DsuChecker {
  /**
   * Check data from file asserts.
   * @param service
   * @param file
   */
  check = async (
    service: DsuServiceRank,
    file: string
  ): Promise<DiffType | null> => {
    const filePath = path.resolve(__dirname, file);
    const readStream = fs.createReadStream(filePath);
    const readLines = (input: NodeJS.ReadableStream) => {
      const output = new stream.PassThrough({ objectMode: true });
      const rl = readline.createInterface(input);
      rl.on("line", (line: string) => {
        output.write(line);
      });
      rl.on("close", () => {
        output.push(null);
      });
      return output;
    };

    const difference: Array<string> = [];

    for await (let line of readLines(readStream)) {
      let row = line.split(" ");
      if (row.length !== 3) {
        console.error("invalid pair:", row);
        return null;
      }
      const x = parseInt(row[0]);
      const y = parseInt(row[1]);

      const expectCount = parseInt(row[2]);
      const actualResult = service.isUnite(x, y);

      if (expectCount !== actualResult) {
        difference.push(
          `${row} - expect: ${expectCount} actual: ${actualResult}`
        );
      }
    }
    return { items: difference } as DiffType;
  };
}

export default DsuChecker;
