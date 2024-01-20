let createCounter = function(n) {
    
    return ()=>{
        console.log(`I am ${n} from the outer function`)
    };
};

let counterfunctioncall = createCounter(5);
counterfunctioncall();