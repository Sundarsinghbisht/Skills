const student = {
    name: ' alex',
    age : '18',
    class : '12th',

    print(){
        console.log(this.name);
    }

}
//*****************************PROTOTYPE**********************************/

const emp = { 
    calTax(){
     console.log('tax is 20%')
    }
};

const alex = {
    salary : 50000
}
const john = {
    salary : 45000
}
const tony = {
    salary : 55000
}
const jake = {
    salary : 50000
}

alex.__proto__ = emp;
john.__proto__ = emp;
tony.__proto__ = emp;
jake.__proto__ = emp;

//*****************************CLASSES**********************************/

class parent{
    hello (){
        console.log('hello there ');
    }
}

let child = new parent();

//*****************************CLASSES_INHERITANCE**********************************/

class child1 extends parent{
    hi(){
        console.log('hi there')
    }
}
let chld1 = new child1();

