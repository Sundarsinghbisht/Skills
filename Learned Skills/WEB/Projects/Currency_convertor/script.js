const dropdowns = document.querySelectorAll(".dropdown select")

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerHTML = currCode;
        newOption.value = currCode;
        select.append(newOption)
    }
}


