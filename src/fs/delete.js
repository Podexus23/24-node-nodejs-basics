import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileSrc = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.unlink(fileSrc);
    console.log("File deleted")
  } catch (error) {
    console.log(error);
    throw new Error(`FS operation failed: ${error.message}`);
  }


};

await remove();
