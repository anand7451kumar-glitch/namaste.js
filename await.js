
const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

//await can only be used inside async function
async function handlePromise() {
    const val = await p;
    console.log(val);
}
handlePromise();

//function getData() {
    p.then(res => console.log(res));
//}

//getData();