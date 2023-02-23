const fs = require('fs')

// const quote = "No beauty shines brighter than that of a good heart";

// //awesome.html

// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("Completed writing!!");
// });

// Task 1

// const quote1 = "No beauty shines brighter than that of a good heart";
// const num = 10;

// for(let i = 1; i<= num; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log("Completed writing!!");
//   });
// }

// Task 2

// node file.js 30 -> 30 files to br created | text-1.html ... text-30.html

// fs.writeFile
const quote2 = "Live more, worry less";
const [ , ,num1] = process.argv;

// genFiles(num1);

function genFiles(num1) {

  if(num1 > 100){
    console.log("Maximum number reached!");
    return;
  }

  for(let i = 1; i<= num1; i++) {
    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
      console.log("Completed writing!!");
    });
  }
}

// fs.readFile

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if(err) {
//     console.log(err);
//     // throw -> Error Create panrathu
//   }
//   else{
//     console.log(data);
//   }
// })

// fs.appendFile -> add data to the existing file

const quote3 = "Dream without fear, Love without Limits 🧡"

fs.appendFile("./update.html", "\n" + quote3, (err) => {
  console.log("Completed Updating");
})

// fs.unlink -> Deleting a File

fs.unlink("./delete-me.css", (err) => {
  console.log("Completed Deleting");
})