let students = [];
let ages = [23,25,31,32];

//object literal

let s1 = {

    name:"Adam",
    age:28,
    hobbies:["Go to gym", "Drink water", "Study for FSDI"],
    address:{
        country:"USA",
        city:"San Diego",
        street:"Center",
        number:"1234"
    }

}

let s2 = {
    name: "Brandon",
    age:27,
    hobbies: ["Eat Food", "Watch Tv", "Read Books"],
    address:{
        country: "Mexico",
        city: "Mexico City",
        street: "Almadea",
        number: "5678"
    }
}


let s3 = {
    name: "Anthony",
    age:27,
    hobbies: ["Eat Food", "Watch Tv", "Read Books"],
    address:{
        country: "Mexico",
        city: "Mexico City",
        street: "Almadea",
        number: "5678"
    }
}

let s4 = {
    name: "Marquice",
    age:27,
    hobbies: ["Eat Food", "Watch Tv", "Read Books"],
    address:{
        country: "Mexico",
        city: "Mexico City",
        street: "Almadea",
        number: "5678"
    }
}

students.push(s1,s2,s3,s4);
console.log(s1.hobbies[1]);

console.log(s2.hobbies[2]);
