//Functions,Arrays,Objects;
function sayhi(param)
{
    console.log(" hello i am sayhi");
    console.log(param);
   let rval=Math.random()>0.5?"good":false;
   return rval;
}

//function invoke;
//sayhi();
//sayhi([1,2,3]);
//sayhi("me also");
//let rval=sayhi(10);
//console.log(rval);



//array-->array is (in cpp etc) collection of homogeneous data types;
//array-->here array is collection of anything;
//array declaration;
//let arr=[];
let arr=[
    1,
    1.1,
    "good",
    'single quote',
    [1,2,3,4],
    function fn()
    {
        console.log("i am in array");
        return "some val";
    },
    {name:"himanshu"},
    null,
    true
];
//console.log(arr);
//console.log(arr[4]);
//console.log(arr[4][2]);
//console.log(arr[5]);
//console.log(arr[5]());
//console.log(arr[arr.length-1]);
//console.log(arr[6]);
//console.log(arr[6].name);

//push->add last,pop->remove last;
//unshift->add first, shift->remove first;
//slice(startidx,lastidx)-->return copy from startidx to lastidx-1;

//let slicedarr=arr.slice(1,5);
//console.log(slicedarr);

//splice(startingidx,delete count);
let removedelearr=arr.splice(1,3);
console.log(arr);
console.log(removedelearr);
//loop
for(let i=0;i<arr.length;i++)
{
    console.log(i,"value",arr[i]);
}


