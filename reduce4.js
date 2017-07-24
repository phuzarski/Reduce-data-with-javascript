function reducer(acc, val, index, array) {
    var intermediaryValue = acc + val;
    
    if(index === array.length - 1) {
        return intermediaryValue / array.length;
    }
    
    return intermediaryValue
}

var data = [1, 2, 3, 4, 5, 6, 3]

var mean = data.reduce(reducer, 0)

console.log(mean);