let guestList = ["Jack","Jill", "Tom","Harry", "Alice","Tony"];
let name = prompt("Tell us your name ?");
if (guestList.includes(name)){
    alert("Welcome");
}
else{
    alert(name +" is not in the list");
}