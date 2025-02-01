function fibonacciGenerator (n){
    
    if(n===0){
        let a=[0];
        return a;
    }
    else if (n===1){
        let a = [0,1];
        return a;
    }
    else{
        let  a = [0,1];
        for(let i=2; i<n; i++){
        
            let b = a.push(a[a.length - 2] + a[a.length - 1]);
        }
        return a ;
    

    }
    
    
}
let output = fibonacciGenerator(8);
console.log(output);