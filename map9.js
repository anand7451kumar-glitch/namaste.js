const users = [
    {firstName: "ANAND", lastName: "APPLE", age:19 },
    {firstName: "ADARSH", lastName: "ANDROID", age: 20},
    {firstName: "JEEVAN", lastName: "NOTHING", age:21 },
    {firstName: "ELON", lastName: "MUSK", age: 22},
];

//list of full name 
const output = users.map((x) => x.firstName +  " " + x.lastName);

console.log(output);