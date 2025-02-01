let DATA = 'unknown data'

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(DATA);
    }
}

let stdnt1 = new user("alex", " alex1@gmail.com");
let stdnt2 = new user("john", " john22@gmail.com");

//******************************USE_OF_SUPER_KEYWORD*********************************** */

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = 'new data'

    }
}

let admn = new admin('admin','admin11@gmail.com');