//object literal


let petSalon = {
    name: "The Fashion Pet",
    address: { 
        country:"USA",
        city:"Los Angeles",
        zip: "90013" },
    phone:"301-867-5309",
    pets: [],
}

let counter =0;

console.log(petSalon)

// create the Pet constructor (name, age, gender,breed, service)

function Pet (name,age,gender,breed,service,type){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
    this.id = counter++;
}


//get the inputs from the HTML

let inputName = document.getElementById('name');
let inputAge = document.getElementById('age');
let inputGender = document.getElementById('gender');
let inputBreed = document.getElementById('breed');
let inputService = document.getElementById('service');
let inputType = document.getElementById('type');

function isValid(aPet){
    // we need to assume that the valid pet is true
    let valid = true;

    if (aPet.name == "" )
    {
        // if you get here it means the pet is not valid 
        valid = false;
        inputName.classList.add("error");
    }
    if (aPet.age ==""){
        valid=false;
        inputAge.classList.add("error");
    }
    if (aPet.gender ==""){
        valid=false;
        inputGender.classList.add("error");
    }
    if (aPet.breed ==""){
        valid=false;
        inputBreed.classList.add("error");
    }
    if (aPet.service ==""){
        valid=false;
        inputService.classList.add("error");
    }
    if (aPet.type ==""){
        valid=false;
        inputType.classList.add("error");
    }
    console.log(clearInputs)
    return valid;
}

function clearInputs() {
inputName.value="";
inputAge.value="";
inputBreed.value="";
inputGender.value="";
inputService.value="";
inputType.value="";

}

function deletePet(id){
    console.log("Deleting pet" + id);
    let deleteIndex;

    document.getElementById(id).remove();//removes from html

    for (let i=0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.id == id){
            deleteIndex=i;
        }
    }
    petSalon.pets.splice(deleteIndex,1);

}

function register(){
// create the obj
console.log("hello IM the register");
let newPet = new Pet (inputName.value, inputAge.value,inputGender.value, inputBreed.value, inputService.value, inputType.value);
if (isValid(newPet)){
    petSalon.pets.push(newPet);
    // displayPetCard();
    displayPetTable();
    clearInputs();
}
//display the object

console.log(newPet);
}



function init(){
//hook events
//execute functions
//create two pets using the Pet constructor
let p1 = new Pet ("rowdy", 1, "male", "doverman", "grooming", "platinum");
let p2 = new Pet ("rover", 4, "female", "pitbull", "grooming", "platinum");
//petSalon.pets.push(p1,p2);
// displayPetCard();
displayPetTable();

console.log(p1,p2);

}



window.onload=init; // wait to render the HTML




// function petSalon1 () {

// for (let i=0; i < petSalon.length; i++){
//     petSalon[i] = petSalon[i] + 's';
// }
// document.getElementById("btn").innerHTML=+ `<p> ${petSalon1()} </p>`
// }

// console.log(petSalon);