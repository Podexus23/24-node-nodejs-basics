import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let path = join(__dirname, "files", "fresh.txt");

  try {
    await fs.writeFile(path, `I am fresh and young`, { flag: "wx" });
  } catch (err) {
    console.error(err);
    throw new Error("FS operation failed");

  }
};

await create();
