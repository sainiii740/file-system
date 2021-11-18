
let fs = require("fs");
let path=require("path");
let utiobj=require("E:\\full stack wd\\file system\\activity\\util.js");
//process.cwd()->folder in which we execute our script
//console.log(__dirname)->directory name of script
//console.log(__filename)->full path of file

function organizefn(src)
{
    if(src==undefined)
    {
        src=process.cwd();
    }
    organizefiles(src);
}

function isfileornot(src)
{
    return fs.lstatSync(src).isFile();
}
function readcontent(src)
{
    return fs.readdirSync(src);
}
function findfoldername(src)
{
    let ext=src.split(".").pop();
    for(let key in utiobj.types)
    {
        for(let i=0;i<utiobj.types[key].length;i++)
        {
            if(ext==utiobj.types[key][i])
            {
                return key;
            }
        }
    }
    return "others";

}
function copyfile(src,dest)
{
    //to copy file we need [file path] and [distination file path];
    //for destination path [find dir name];
    let foldername=findfoldername(src);
    let destpath=path.join(dest,foldername);
    if(fs.existsSync(destpath)==false)
    {
        fs.mkdirSync(destpath);
    }
    fs.copyFileSync(src,path.join(destpath,path.basename(src)));
}
function organize(src,dest)
{
     let isfile=isfileornot(src);
     if(isfile==true)
     {
         copyfile(src,dest);
     }
     else
     {
         let fdirnames=readcontent(src);
         for(let i=0;i<fdirnames.length;i++)
         {
             let child=fdirnames[i];
             organize(path.join(src,child),dest);
         }

     }
}

function organizefiles(src)
{
    let foldername="organizedfiles";
    if(fs.existsSync(path.join(src,foldername))==false)
    {
        fs.mkdirSync(path.join(src,foldername));
    }
    organize(src,path.join(src,foldername));
}

//nodejs->export
module.exports={
    fn:organizefn
}