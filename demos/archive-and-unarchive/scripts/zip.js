const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const demoPath = "demos/archive-and-unarchive/";

const tempPath = path.join(demoPath, "temp");

if (!fs.existsSync(tempPath)) {
  fs.mkdirSync(tempPath);
}

exec(
  `zip -r -X ${path.join(process.cwd(), tempPath, "rebuild.sketch")} *`,
  { cwd: path.join(tempPath, "files") },
  (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  }
);
