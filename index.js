for(let N = 1; N <= 100; N++) {
    if(N % 3 === 0 && N % 5 === 0){
        console.log("FIZZBUZZ");
    }
    else if(N % 5 === 0){
        console.log("BUZZ");
    }
    else if(N % 3 === 0){
        console.log("FIZZ");
    }
    else{
        console.log(N);
    }
}
