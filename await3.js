const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
    
});




function getData() {
    //JS wont wait for promise to be resolved
    p.then(res => console.log(res));
    console.log("Namaste JAVA")
}
getData();