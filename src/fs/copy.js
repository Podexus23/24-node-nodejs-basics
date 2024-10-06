import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const filesDir = path.join(__dirname, "files");
  const filesCopyDir = path.join(__dirname, "files_copy");

  try {
    await fs.cp(filesDir, filesCopyDir, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
    console.log("files copied")
  } catch (error) {
    console.log(error);
    throw new Error(`FS operation failed`);
  }
};

await copy();
