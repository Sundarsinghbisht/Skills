// let car = {
//     name : "bmw",
//     model: 'x210',
//     year: 2020,

//     driving : function(){
        
//         console.log("driving");
//         console.log(this.year);
//     }
// }

// // console.log(car.name)
// // console.log(car.model)
// car.driving();



// class GrandParent{
//     Gprnt(){
//         console.log("GrandParaent class");

        
//     }
// }
// class parent{
//     prnt(){
//         console.log("paraent class");

        
//     }
// }

// class child1 extends GrandParent {
//     chld(){
//         console.log('child1 class');
        
//     }
// }
// class child2 extends parent{
//     chld(){
//         console.log('child2 class');
        
//     }
// }

// let ch1 = new child1();
// let ch2 = new child2();

// ch1.prnt();
// ch2.prnt();


// class car{
//     constructor(name){
       
//         this.name = name;
//         this.isRunning = false;
//     }

//     start(){
//         this.isRunning = true;
//         console.log(this.name, ' is now running...');
        
//     }
//     stop(){
//         this.isRunning = false;
//         console.log(this.name, ' has stopped...');
        
//     }
//     status(){
//         if (this.isRunning){
//             console.log("Car's engine is on");
            
//         }else{
//             console.log("Car's engine is off");
            
//         }
//     }

// }
//  let myCar = new car("bmw");
//  myCar.start()
//  myCar.stop()
//  myCar.status()


// let user = {

//     name: 'ankit',
//     age : 22,
//     address : 'rudrapur',

//     work : function(){
//         console.log("ankit is working");
        
//     }
// }


// console.log(user.name);
// console.log(user.age);
// console.log(user.work());


class animal{
    speak(){
        console.log('the animal makes a sound');
        
    }
    
}
class cat extends animal{
    speak(){
        console.log('the cat meows');
        
    }
    
}
class dog extends animal{
    speak(){
        console.log('dog barks');
        
    }
    
}
let Animals = [new animal(),new cat(), new dog()]

Animals.forEach((animal)=>{
    animal.speak();
});
    
