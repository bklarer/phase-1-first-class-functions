function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    return function function1() {
        return "yay";
    }
}

function returnsAnAnonymousFunction() {
    return function () {return "yay";}
}