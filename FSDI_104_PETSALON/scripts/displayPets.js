function displayPetCard() {

    let card = "";

    const DIV = document.getElementById("pets");

    // travel the pets array
    for (let i = 0; i < petSalon.pets.length; i++) {
        let color = "";
        let pet = petSalon.pets[i];
        if (pet.service == "grooming")
        {
            color = "white";
        }

        // create the template

        card += `
        <div id="${pet.id}" class="pet" style="background-color: ${color};">
        <h6> Name: ${pet.name} </h6>
        <p> Age: ${pet.age} </p>
        <p> Service: ${pet.service} </p> <br>
        </div>`;
    }
    console.log(card);

    // INSERT THE TEMPLATE INTO THE HTML ELEMENT

    DIV.innerHTML = card;
}

function displayInformation() {
    document.getElementById("pets").innerHTML = `<div class= "allPets" > <p> Welcome to ${petSalon.name} </p>
    <p> Located in ${petSalon.address.city} and ${petSalon.address.country} Zip Code ${petSalon.address.zip}</p>
    <br>
    <p> Name: ${petSalon.pets[0].name}</p>
    <p> Name: ${petSalon.pets[1].name}</p>
    <p> Name: ${petSalon.pets[2].name}</p>
    </div>
    `;

}