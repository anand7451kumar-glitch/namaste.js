const GITHUB_API = "https://github.com/anand7451kumar-glitch"

const user = fetch(GITHUB_API);

console.log(user);

user.then(function(data) {
    console.log(data);
});