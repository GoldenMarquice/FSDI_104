//object literal

let petSalon = {
    name: "The Fashion Pet",
    
    phone:"301-867-5309",
    pets: [
        {
            name: "Scooby",
            age: 60,
            gender: "Male",
            service: "Grooming"
    },
    {
        name: "Scrapy",
        age: 30,
        gender: "Male",
        service: "Pedicure"
},
{
    name: "Shaggy",
    age: 40,
    gender: "Female",
    service: "Cut"
}

],
    address: { 
        country:"USA",
        city:"Los Angeles",
        zip: "90013" },
}

document.getElementById("info").innerHTML =` <p> Welcome to ${petSalon.name} </p>
<p> Located in ${petSalon.address.city} and ${petSalon.address.country} Zip Code ${petSalon.address.zip}</p>
<br>
<p> Name: ${petSalon.pets[0].name}</p>
<p> Name: ${petSalon.pets[1].name}</p>
<p> Name: ${petSalon.pets[2].name}</p>
`;

function petSalon1 () {

for (let i=0; i < petSalon.length; i++){
    petSalon[i] = petSalon[i] + 's';
}
document.getElementById("btn").innerHTML=+ `<p> ${petSalon1()} </p>`
}

console.log(petSalon);