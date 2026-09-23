const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);
    
});

// JS was waiting for promise to be resolved
async function handlePromise() {

    console.log("HEEEEE");

    // JS was waiting for promise to be resolved
    const val = await p;
    console.log("NAMASTE");
    console.log(val);

    const val2 = await p;
    console.log("NAMASTE2");
    console.log(val2);
}
handlePromise();



