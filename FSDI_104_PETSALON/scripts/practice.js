var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


let students = [];
let ages = [23, 25, 31, 32];

//object literal

let s1 = {

    name: "Adam",
    age: 28,
    hobbies: ["Go to gym", "Drink water", "Study for FSDI"],
    address: {
        country: "USA",
        city: "San Diego",
        street: "Center",
        number: "1234"
    }

}

let s2 = {
    name: "Brandon",
    age: 27,
    hobbies: ["Eat Food", "Watch Tv", "Read Books"],
    address: {
        country: "Mexico",
        city: "Mexico City",
        street: "Almadea",
        number: "5678"
    }
}


let s3 = {
    name: "Anthony",
    age: 27,
    hobbies: ["Eat Food", "Watch Tv", "Read Books"],
    address: {
        country: "Mexico",
        city: "Mexico City",
        street: "Almadea",
        number: "5678"
    }
}

let s4 = {
    name: "Marquice",
    age: 27,
    hobbies: ["Eat Food", "Watch Tv", "Read Books"],
    address: {
        country: "Mexico",
        city: "Mexico City",
        street: "Almadea",
        number: "5678"
    }
}

students.push(s1, s2, s3, s4);
console.log(s1.hobbies[1]);

console.log(s2.hobbies[2]);

//object constructor

function Student(n, a, g) {

    //attributes
    this.name = n;
    this.age = a;
    this.gender = g;

}

// creating a new objects using the constructor Student

let sc1 = new Student("Brandon", 25, "Male");
let sc2 = new Student("Marquice", 26, "Male");

console.log(sc1.name);

// create an object constructor and create two objects

function Food(foodName, country, cost) {
    this.foodName = foodName;
    this.country = country;
    this.cost = cost;
}

let f1 = new Food("Pizza", "Italy", 4);
let f2 = new Food("CheeseBurger", "America", 5);



console.log(f1, f2);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}