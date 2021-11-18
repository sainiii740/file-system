let node={
    name:"d10",
    childrens:[
        {
            name:"d20",
            childrens:[
                {
                    name:"d50",
                    childrens:[]

                },
                {
                    name:"d60",
                    childrens:[]

                }
            ]

        },
        {
            name:"d30",
            childrens:[
                {
                    name:"d70",
                    childrens:[]

                }
           ]

        },
        {
            name:"d40",
            childrens:[]

        }
    ]
}
//1 directory==1 node(object);
function printgtree(node,spa)
{
    console.log(spa+node.name);
    for(let i=0;i<node.childrens.length;i++)
    {
        let child=node.childrens[i];
        printgtree(child,spa+"\t");
    }
}

function displaygtree(root)
{
    let menmychild;
    menmychild=root.name+"=>";
    for(let i=0;i<root.childrens.length;i++)
    {
        menmychild+=root.childrens[i].name+",";
    }
    console.log(menmychild);
    for(let i=0;i<root.childrens.length;i++)
    {
        displaygtree(root.childrens[i]);
    }
}
displaygtree(node);
//printgtree(node,"");

let fs=require("fs");
function checkfileorfolder(path)
{
    //google out(don't cram it)(don't cram frame work functions);
   return fs.lstatSync(path).isFile();
}

function readcontent(path)
{
    return fs.readdirSync(path);
}





function printflat(path)
{
    // check path is file or directory;
    let isfile=checkfileorfolder(path);
    if(isfile==true)
    {
        console.log(path);
    }
    else{
        console.log(path);
        //childrens->array(as string) of directories or files to just next level of path;
        let childrens=readcontent(path);
        for(let i=0;i<childrens.length;i++)
        {
            printflat(path+"\\"+childrens[i]);
        }
    }
}

//printflat("E:\\full stack wd\\file system\\row\\facts");