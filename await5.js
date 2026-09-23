const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);
    
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
    
});


// JS was waiting for promise to be resolved
async function handlePromise() {

    console.log("HEEEEE");

    // JS was waiting for promise to be resolved
    const val = await p1;
    console.log("NAMASTE");
    console.log(val);

    const val2 = await p2;
    console.log("NAMASTE2");
    console.log(val2);
}
handlePromise();