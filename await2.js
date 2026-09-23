


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
    
});

//await can only be used inside async function
async function handlePromise() {
    const val = await p;
    console.log(val);
}
handlePromise();


function getData() {
    p.then(res => console.log(res));
}
getData();