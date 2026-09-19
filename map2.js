const arr = [ 5, 1, 3, 2, 6]

// Double - [10, 2, 6, 4, 12] 

//Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

const output = arr.map(function binary(x) {
    return x.toString(2);
});

console.log(output);



