const users = [
    {firstName: "ANAND", lastName: "APPLE", age:19 },
    {firstName: "ADARSH", lastName: "ANDROID", age: 20},
    {firstName: "JEEVAN", lastName: "NOTHING", age:21 },
    {firstName: "ELON", lastName: "MUSK", age: 22},
];

const output = users.filter(x => x.age<30).map((x) => x.firstName);

console.log(output);

    