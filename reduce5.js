var data = [[1, 2, 3], [1, 5, 6], [7, 8, 9]];

var fratennedData = data.reduce(function(prev, curr) {
    return prev.concat(curr)
}, []);

console.log(data.indexOf(1)); 

