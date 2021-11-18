let fs=require("fs");
let path=require("path");
console.log(process.argv);
console.log(path.join(process.argv[3], 'cp.js'));
console.log(process.argv[2]);
fs.copyFileSync(process.argv[2], path.join(process.argv[3], 'cp.js'));

