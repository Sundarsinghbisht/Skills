const arr = ["ab","bc","cd"];

//......................................................................................
arr.forEach(function (i) {
    // console.log(i);
    
})

//......................................................................................
arr.forEach((i)=>{
    // console.log(i);
})

//......................................................................................
function print(key) {
    // console.log(key);
}
arr.forEach(print)

//......................................................................................

arr.forEach((i,index,arr)=>{
    console.log(i,index,arr);
})