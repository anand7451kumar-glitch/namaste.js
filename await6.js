
const API_URL = "https://Aapi.github.com/users/Anand"


// JS was waiting for promise to be resolved
async function handlePromise() {

    try{
        const data = await fetch(API_URL);

    const jsonValue = await data.json();
    console.log(jsonValue);
    }
    catch (err) {
        console.log(err);
    }

    //fetch().then(res=> res.json()).then(res=> console.log())



    //fetch()=> Response.json() => result json value


}
handlePromise();

