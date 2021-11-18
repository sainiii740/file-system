
function fun()
{
    console.log("i am fun in lib");
    return private();
}
function private()
{
    return Math.random();
}
let a;
a=10;

//nodejs->export
module.exports={
    fn:fun,
    varname:a
}