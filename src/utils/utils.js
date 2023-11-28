const fs = require('fs');

//esta funcion lee un archivo 
function readFile(path){
    fs.readFile(path,(err,data)=>{
        console.log(data.toString());
    });
}

function writeFile(path,content){
    fs.writeFile(path,content,function (err){
        if(err){
            console.error("No he podido escribirlo",err);
        }else{
            console.log("Se ha escrito correctamente");
        }
    
    });
}

function deleteFile(path){
    fs.unlink(path);
}

module.exports =  {readFile,writeFile,deleteFile};