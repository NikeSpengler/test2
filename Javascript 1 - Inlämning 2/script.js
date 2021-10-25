// Array för all input
var arrPersons = [];

// Klass för att ta emot input från användaren
class Person {
    constructor(fName, lName, age, legal) {

        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.legal = legal;
        this.legal = age >= 18 ? true : false;

    }

    toString() {

        var legal = true;

        if (this.age < 18) {
            legal = false;
        }

        if (legal == true) {

            return this.fName + " " + this.lName + " är " + this.age + " år gammal. <br>" +
                this.fName + " är myndig. </br>";
        } else {
            return this.fName + " " + this.lName + " är " + this.age + " år gammal. <br>" +
                this.fName + " är inte myndig. </br>";
        }
    }

}

//Derived klass / Child klass Superhero till klassen Person
class Superhero extends Person {
    //Anropar constructor i Basklasssen
    constructor(fName, lName, age, legal, heroName, fly) {

        //Initiera attribut för Superhero
        super(fName, lName, age, legal);
        this.heroName = heroName;
        this.fly = fly;
    }
}

//Funktion som visar att superhjäten flyger
function fly() {
    let heroName = document.getElementById("superNameInput").value;

    if (document.getElementById("superCheck").checked == true) {
        arrPersons.forEach(element => {
            document.getElementById("output").innerHTML += "<br>" + element.heroName + " flyger! <br>";
        });
    }
}

//Funktion som ökar användarens ålder med 1, likt en födelsedag
function birthday() {

    arrPersons.forEach(element => {
        element.age++;
        if (element.age < 18) {
            legal = false;
        } else {
            legal = true;
        }

        document.getElementById("output").innerHTML += element.toString() + "<br>";
    });
}

//Funktion där användarna kan hälsa på varandra
function greetings() {


    let input1 = document.getElementById("fname").value;
    let personGreet = [];
    personGreet.push(input1);

    allGreet = "";
    for (let i = 0; i < personGreet.length; i++) {
        for (let j = 0; j < personGreet.length; j++) {
            if (i === j) {
                continue;
            }
            allGreet += personGreet[i].greetings(personGreet[j]);
        }

    }
    document.getElementById("memo").innerHTML = allGreet + "hej hur mår du?";

}

//Funktion som validerar inputen 
function addPerson() {

    var fName = document.getElementById("fNameInput").value;
    var lName = document.getElementById("lNameInput").value;
    var age = document.getElementById("numberInput").value;
    var heroName = document.getElementById("superNameInput").value;

    if (age < 18) {
        legal = false;
    } else {
        legal = true;
    }

    if (fName == "" || lName == "" || age == "") {
        document.getElementById("output").innerHTML = "Vänligen fyll i alla fält."
    } else {
        document.getElementById("output").innerHTML = "";

        if (document.getElementById("superCheck").checked == false) {

            arrPersons.push(new Person(fName, lName, age, legal));
            console.log(arrPersons);


            arrPersons.forEach(element => {
                document.getElementById("output").innerHTML += element.toString() + "<br>";
            });

        } else if (document.getElementById("superCheck").checked == true) {

            arrPersons.push(new Superhero(fName, lName, age, legal, heroName, fly));
            console.log(arrPersons);

            arrPersons.forEach(element => {
                document.getElementById("output").innerHTML += element.toString() + "<br>";
            });

        }
    }
}
