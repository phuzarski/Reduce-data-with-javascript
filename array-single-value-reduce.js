var data = [15, 3, 20];

var initialValue = 10;

var total = data.reduce((accumulator, item) => {
    return accumulator + item
}, initialValue);

console.log('The sum is: ', total);