const map = new Map();
map.set('on','one');
map.set('tw','two');
map.set('th','three');
map.set('fr','four');

// console.log(map);

//***********************************************************************************/

const numbers = [1,2,3,4,5,6];

// const myNum = numbers.map((num) => num + 10)
// console.log(myNum);

//*********************CHAINING****************************/

const myNum = numbers.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num>= 40)
console.log(myNum);

// **********************************************************************************

const arr = [1,2,3,4,5,6,7,8,9]

const res = arr.map((i)=>{
    return i*10;
})
console.log(res);