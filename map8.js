const arr = [ 5, 1, 3, 2, 6];

// sum or max

function findMax(arr) {
}

console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(output);