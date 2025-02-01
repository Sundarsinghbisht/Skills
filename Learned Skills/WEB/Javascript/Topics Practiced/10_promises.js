// let promise = new Promise ((resolve,reject)=>{
//     console.log("I am promise")
//     // resolve(123)
//     reject('some error ocurred')
// })

//******************************************************************************************* */

// function getData(dataID,getNextData){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('data = ', dataID)
//         resolve("success")
//         if(getNextData){
//             getNextData()
//         }
//     },5000)

//    }) 
// }

//******************************************************************************************* */
// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('I am a promise')
//         resolve('success')
//         // reject('error ocurred')

//     })

// }

// let promise = getPromise();
// promise.then(()=>{
//     console.log('promsie fullfilled')
// })
// promise.catch(()=>{
//     console.log('promsie rejected')
// })

//*******************************PROMISE CHAINING************************************************************ */


const asyncFunc1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data1');
            resolve('success')
        },4000)

    })

}
const asyncFunc2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data2');
            resolve('success')
        },4000)

    })

}
// console.log('fetching data1....')
// let p1 = asyncFunc1();
// p1.then((res)=>{
    
//     console.log('fetching data2....')
//     let p2 = asyncFunc2();
//     p2.then((res)=>{

//     })
// })

//********************OR********************* */

// console.log('fetching data1....')
// asyncFunc1().then((res)=>{
    
//     console.log('fetching data2....');
    
//     asyncFunc2().then((res)=>{});
// });

//********************OR********************* */

function getData(dataID){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            console.log('data = ', dataID)
            resolve('success')
          },2000);
    });

}
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    return getData(4);
})
.then((res)=>{
    return getData(5);
    console.log(res)
})