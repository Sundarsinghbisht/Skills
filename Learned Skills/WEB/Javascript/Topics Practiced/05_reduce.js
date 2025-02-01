const arr = [1,2,3]

// const reduce = arr.reduce(function (accumalator,currentValue) {
//     console.log('acc: ',accumalator, 'currval: ', currentValue);
//     return accumalator + currentValue;
// },0)

const reduce = arr.reduce((acc,curval)=> acc + curval,0 )
// console.log(reduce);


//**************************************************************************/

const cart = [
    {
        itemName : "apple",
        price : 10

    },
    {
        itemName : "banana",
        price : 20

    },
    {
        itemName : "grapes",
        price : 30

    },
    {
        itemName : "orange",
        price : 20

    },
]

const prc = cart.reduce((acc,item) => acc + item.price,0 );
console.log(prc);