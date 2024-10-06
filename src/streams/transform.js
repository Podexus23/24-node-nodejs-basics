import { Transform } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, cb) {
      cb(null, `${[...chunk.toString()].reverse().join("")}\n`);
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
