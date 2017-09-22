const fs = require('fs');
let files = fs.readdirSync("./img");
let path="./img";
console.log(__dirname)
for(var i=0;i<files.length;i++){
  if(files[i].match(/\d/)){
    fs.rename("./img/"+files[i],"img/"+files[i].replace(/\d+/g,i+1),(err)=>{
      console.log(err)
      console.log("done")
    })
  }else{
    console.log(files[i].split(".")[0]+(i+1)+'.'+files[i].split(".")[1])
    console.log("img/"+files[i].split(".")[0]+(i+1)+'.'+files[i].split(".")[1])
    fs.rename("./img/"+files[i],"img/"+files[i].split(".")[0]+(i+1)+'.'+files[i].split(".")[1],(err)=>{
      console.log(err)
      console.log("done")
    })
  }
}
