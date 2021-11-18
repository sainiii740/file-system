let fs=require("fs");
let path=require("path");

function isfileornot(src)
{
    return fs.lstatSync(src).isFile();

}

function readcontent(src)
{
    return fs.readdirSync(src);

}

function viewflat(src)
{
    //check given path is file or directory
    let isfile=isfileornot(src);
    if(isfile==true)
    {
        console.log(src,"*");
    }
    else{
        console.log(src);
        //content read from os
        let fdirnames=readcontent(src);
        for(let i=0;i<fdirnames.length;i++)
        {
            let dirnamepath;
            //dirnamepath=src+"\\"+fdirnames[i];
            //good practice
            dirnamepath=path.join(src,fdirnames[i]);
            viewflat(dirnamepath);
        }
    }
}

function viewtree(src,intend)
{
    let isfile=isfileornot(src);
    if(isfile==true)
    {
        //basename give us file or directory name;
        console.log(intend,path.basename(src),"*");
    }
    else{
        console.log(intend,path.basename(src));
        //read content from os
        let fdirnames=readcontent(src);
        for(let i=0;i<fdirnames.length;i++)
        {
            let child=fdirnames[i];
            let dirpathname=path.join(src,child);
            viewtree(dirpathname,intend+"\t");
        }
    }
}









function viewhelper(dirname,mode)
{
    if(mode=="tree")
    {
        //console.log("tree view should be shown for this",dirname);
        viewtree(dirname,"");
    }
    else if(mode=="flat")
    {
        //console.log("flat view should be shown for this",dirname);
        viewflat(dirname);
    }
    else{
        console.log("wrong mode given: type help fro commands");
    }
}

//nodejs->export
module.exports={
    fn:viewhelper
}