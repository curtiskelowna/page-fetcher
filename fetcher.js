const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(`Failed to request the URL: ${error}`);
    return;
  }
  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error(`Failed to write to file: ${err}`);
      return;
    }
   console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});