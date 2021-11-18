console.log("hallo");
//staticaly typed lang
//variable declare
//int a;
//a is a variable that can only contain integer;
//dynamically typed lang
let a;
//let a-->a is a valribale that initially contains undefined;
//primitive data types->number,string,undefined,null,boolean;
a=20;
a=90.6;
a="hey";
a='are you happy';
console.log("a ",a);
//javascript syntax-->java;
//loops,conditionals,classes,functions,array;
//For input-->array format;
let input=process.argv.slice(2);
console.log(input);
let num=input[0];
let hai=true;
for(let div=2;div*div<=num;div++)
{
    if(num%div==0)
    {
        hai=false;
        break;
    }
}
if(hai==true)
{
    console.log(num," is prime");
}
else{
    console.log(num," is not prime");
}