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

console.log(petSalon)

// create the Pet constructor (name, age, gender,breed, service)

function Pets (name,age,gender,breed,service,type){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}




function displayInformation(){
    document.getElementById("allPets").innerHTML =`<div class= "allPets" > <p> Welcome to ${petSalon.name} </p>
<p> Located in ${petSalon.address.city} and ${petSalon.address.country} Zip Code ${petSalon.address.zip}</p>
<br>
<p> Name: ${petSalon.pets[0].name}</p>
<p> Name: ${petSalon.pets[1].name}</p>
<p> Name: ${petSalon.pets[2].name}</p>
</div>
`;

}
//get the inputs from the HTML

let inputName = document.getElementById('name');
let inputAge = document.getElementById('age');
let inputGender = document.getElementById('gender');
let inputBreed = document.getElementById('breed');
let inputService = document.getElementById('service');
let inputType = document.getElementById('type');

function clear() {

inputName.remove();

}

function register(){
// create the obj
let newPet = new Pets (inputName.value, inputAge.value,inputGender.value, inputBreed.value, inputService.value, inputType.value);
//display the object
petSalon.pets.push(newPet);

console.log(newPet);
}


function init(){
//hook events
//execute functions
//create two pets using the Pet constructor

let p1 = new Pets ("rowdy", 1, "male", "doverman", "grooming", "platinum");
let p2 = new Pets ("rover", 4, "female", "pitbull", "grooming", "platinum");
petSalon.pets.push(p1,p2);

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