// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(10,20,sum);

function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log('data = ', dataID)
        if(getNextData){
            getNextData()
        }
    },2000)

}
//CALLBACK HELL
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5)
            })
        })
    })
})