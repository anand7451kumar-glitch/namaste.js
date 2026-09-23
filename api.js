
const API_URL = "https://Aapi.github.com/users/Anand"


// JS was waiting for promise to be resolved
async function handlePromise() {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
}
handlePromise().catch((err) => console.log(err));


