function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction() {
    const returnedFunction = () => console.log("Returned!");
    return returnedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('This is an anonymous function.')
    }
}