import fs from 'fs/promises';

const buffer = await fs.readFile("system.mjs");
console.info(buffer.toString());
await fs.writeFile("temp.txt", "hello nodejs")