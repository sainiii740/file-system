//object=>key:value  pair
//To declare object;
//let obj={};
//object-->values-->properties;
//object-->functions-->methods;
//key-->key can be string or number;

let obj={
    name:"himanshu",
    age:21,
    numbers:[1,2,3],
    address:{
        state:"uttar pradesh",
        vill:"guniya juddi"
    },
    isstrong:true,
    sayhi:function()
    {
        console.log("hi world");
        return "live happily";
    }
}
//console.log(obj.name);
//console.log(obj.numbers[0]);
//console.log(obj.address.vill);
//console.log(obj.sayhi());

//for in
for(let key in obj)
{
    console.log("key ",key," value ",obj[key]);
}

let key="address";
//vaue corresponding to key printed;
console.log(obj[key]); 
//undefined becoz there is no key named key in obj;
console.log(obj.key);

//create update

//changing key;
obj.isstrong=false;
//adding new key:value pair;
obj.words=['love','piece','patience','focus'];
//delete
delete obj.age;
console.log(obj);