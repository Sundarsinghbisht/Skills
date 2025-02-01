

// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){

//         let demo = false;
//         if(!demo){
//             resolve('success');
            
//         }else{
//             reject("error");
//         }
        
        
        

//     },2000)
// })

// myPromise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
    
// }).finally(()=>{
//     console.log("All work is done now");
    
// })


// function getData(Id,nextData){
//     setTimeout(()=>{
//         console.log('data = ',Id);
//         if (nextData){
//             nextData();
//         }

        
//     },2000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })



// function getData(Id){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data = ',Id);
//             resolve('success')
            

//         },1000)
       
//     })
    
// }
// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })
// .then((res)=>{
//     return getData(4)
// })



function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data = ', dataID)
            resolve('success')
        },2000);
    });

}

async function getAllData() {
    await getData(1);
    console.log('hellow');
    
    await getData(2);
    await getData(3);
    await getData(4);
    
}
getAllData()

// function hello(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('hello3');
//             resolve('success')
            
//         },3000)

//     })
   
// }
// async function print(){

    
//     console.log('hello1');
//     console.log('hello2');
//     await hello();
//     console.log('hello4');
    
// }
// print();