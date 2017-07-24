var data = [1, 2, 3];

var doubled = data.reduce(function(acc, value) {
    acc.push(value*2)
    return acc;
}, [])

// console.log(doubled);

var data2 = [1, 3, 5, 7, 10, 12, 15, 20, 24, 28];

var smaller = data2.reduce(function(acc, val) {
    if (val % 2 === 0) {
        acc.push(val)
    }

    return acc;
}, [])

var evenFiltered = data2.filter(function(item) {
    return item % 2 === 0
})
// console.log(smaller);
// console.log(evenFiltered);

var filterMapp = data2.filter(function(value) {
    return value % 2 === 0;
}).map(function(value) {
    return value * 2;
});

console.log(filterMapp);

var bigData = [];
for (var i = 0; i < 10000000; i++) {
    bigData[i] = i
}
console.time('bigData');

var filterMappBig = bigData.filter(function(value) {
    return value % 2 === 0;
}).map(function(value) {
    return value * 2;
});

console.timeEnd('bigData');

console.time('reducerBig')

var reducerBig = bigData.reduce(function(acc, val) {
    if (val % 2 === 0) {
        acc.push(val * 2)
    }
    return acc;
}, []);
console.timeEnd('reducerBig')