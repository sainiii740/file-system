function f3()
{
    console.log("i am f3");
    while(true)
    {

    }
    return "returned val from f3";
}
function f2()
{
    console.log("i am f2");
    return "returned value from f2";
}
function f1()
{
    console.log("i am f1");
    return "return value from f1";
}
//function come onto stack for executing their code after evaluating all
// comma separated fields 
console.log("return values ",f1(),f2(),f3());
//22 line first evaluate left to right
