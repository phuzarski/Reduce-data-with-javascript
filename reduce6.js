function increment(input) { return input + 1}
function decrement(input) { return input - 1}
function double(input) { return input * 2 }
function halve(input) { return input / 2 }

var initial_value = 1;

function transform(input) {
    return ((input + 1) * 2) - 1;
}

// var final_value = transform(initial_value)


var pipeline = [
    increment,
    increment,
    increment,    
    double,
    double,
    double,    
    decrement,
    halve
]

var final_value = pipeline.reduceRight((acc, fn) => {
    return fn(acc);
}, initial_value);

console.log(final_value)

