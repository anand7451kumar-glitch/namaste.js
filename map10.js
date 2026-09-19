const users = [
    {firstName: "ANAND", lastName: "APPLE", age:19 },
    {firstName: "ADARSH", lastName: "ANDROID", age: 20},
    {firstName: "JEEVAN", lastName: "NOTHING", age:21 },
    {firstName: "ELON", lastName: "MUSK", age: 22},
];

const output = users.reduce(function(acc, curr){

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];

    }
    else {
        acc[curr.age] = 1
    }
    return acc

}, {})

console.log(output);