// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('whether data');
//             resolve(200)
//         }, 2000);

//     })
// }

// async function getWhether(){
//     await api(); //1st time call
//     await api(); // 2nd time call
// }

//********************************************************************************************/

function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data = ', dataID)
            resolve('success')
        },2000);
    });

}

//THIS FUNC HAS TO BE CALLED FOR THE EXECUTION

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);

// };

//*******************************IIFE*******************************************/

//THIS FUNCTION WILL CALL AND EXECUTE AUTOMATICALLY BY ITS OWN

(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);

})();