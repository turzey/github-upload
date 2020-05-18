const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);


// Strings

const myName = `Beni Dibatia` ;
console.log(myName) ;


//Strings Concatenation or math Strings

const firstName = `Beni` ;
const lastName = `Dibatia` ;

const sentence = " Hello " + firstName + " " + lastName + " ! How are you doing today ? " ;

// or another shortCuts which is called "The template String it is applied using `` (backticks"

const sentenceWithtemplate = ` Hello ${firstName} ${lastName} ! How are you doing today?` ;

// here it has printed the first example

console.log(sentence);

// here it has printed the second example using the template String

console.log(sentenceWithtemplate) ;


// control flow , it runs the code if only certains conditions are met .

const skyIsBlue =  true ;

if (skyIsBlue)  {
    console.log ("Take off your Glasses") ;
} else {
    console.log ("Wear your Glasses") ;
}


 
if (2+2 === 4)  {
    console.log("Thank God , i still can make good use of my damn good math from highschool") ;
} else {
    console.log ("I need to brush a little bit on my math skills") ;
}


const peopleAtChurch = 9 ;

if (peopleAtChurch === 9) {
    console.log("There is one person missing") 
} else if (peopleAtChurch <= 5) {
    console.log("We need to pray !") ;
} else  {
    console.log ("Let's go back home , The Service is Cancelled !") ;
}


//Loops ; it consists of executing one task over and over in other words Looping.


let peopleAtHome = 0 ;

 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;
 peopleAtHome = peopleAtHome + 1 ;

console.log (peopleAtHome) ;
 



// Loops , here are some few ways of using loops .

// While loop . it looks very similar to an if statement.
//as long as what's inside that statement is TRUE it will continue running and re-running the body (what's between { }) until that statement is false . once that statement is false it'll break the loop and continue on. This case we 


let churchPeople = 15 ;
while (churchPeople < 10) {
    churchPeople = churchPeople + 1 ;
}

console.log (churchPeople) ;

// For Loop,


let nicosia = 0 ;

// here the For loop counts from the buttom until it reaches 10 then it will add 1 or increase by one.

for (let i = 0; i <= 10; i++  ) {

nicosia++;

}

console.log(nicosia) ;


// It is the same as :  the for loop counts from 10 downwards then it adds 1 or increase by one when the loops reaches 0 which makes it 11 at the end

let lanarka = 0 ;

for (let i = 10 ; i >= 0 ; i--) {
lanarka++ ;
}

console.log(lanarka) ;

//Loop exercises .

let character = "i am a champion" ;
let timesToRepeat = 20 ;
let answer = " " ;

for (let i = 0 ; i <= timesToRepeat ; i++) {
  answer +=character;
}

console.log(answer) ;


//Functions ; A function is a bit of re-usable Code . Just how we like re-use CSS Classes Likewise , we like to re-use code .
// The cool thing with function it is written once and used over and over again.

function addTwo(number) {
    return number + 2 ;
}

const finalAnswer = addTwo(5) ;

console.log(finalAnswer) ;


// here is another example of function 

function greet( firstName , lastName , honorific , greetings) {
    return `${greetings} ${honorific} ${firstName}  ${lastName} ! We are extremely delighted that you came up with this terrific idea, Hat off to you!!!` ;
}

console.log(greet("beni" , "dibatia"  , "TurzeyMaster" , "We saluate you!")) ;


// just a to remember rule , generally functions are verb and the parameter that it takes are nouns 'cause the verb does something to a thing.


const myHomeCity = "Moanda" ;
const myHomeCountry = "DRC" ;
const myPeople = "Congolese" ;

function aboutMe ( city , country , people) {
    console.log ( ` You're from ${city} , ${country} , and your are people ${people}` ) ;
}

aboutMe (myHomeCity , myHomeCountry , myPeople) ;


// Scoope is when a variable is declared inside the curly brackets , and called within its  . once it's called outside the outside the curly brakets or scope it will not work.

//function addFive(number) {
  //  const someVariable = "you can't see me outside the scope of this function" ;
   // return number + 5 ;
//}

//addFive(10) ;
//console.log(someVariable) ;

// the exemple above didn't work 
//here when i have change the way it has to be print , then it worked.

function addSix(number) {
    const someVar = "Now you can see me outside the scope of this function print out "
    console.log(someVar);
    return number + 6 ;
}
addSix(6);

// in the example Up the function worked , because it's called within the scope rightafter its declaration 



//scope Exercices 

const A = "A" ;
let F ; 

function doStuff(B) {
    console.log(B);  // works, B parameter still in scope.
    const C = "C" ;

    let H = "H" ;
    if ( 1 + 1 == 2 ) {
        const D = "D" ;
         H = "something else" ;
    }

    console.log(D);  // Does no wrok, D was declared in that if statement blocks
    console.log(H);  // Works , H was declared outside the if statement .
    F = "F" ;
}

  let E = 0 ;

  while(E<3) {
  E++;

  console.log(A) ; // Works , the outer block (called the global scope ) is still in the scope.
  const G = "G" ;

}

//console.log(E) ; // works , E was declared outside the while loop
//console.log(G) ;  // does not work , declared inside the while , and it's over.

//doStuff("B") ;
//console.log(B) ;  // does not work , the B parameter expires after the function call.
//console.log(C) ;  // does not work , C was declared inside the function and the function is over
//conssole.log(F) ; // works , F was declared in the global scope.


// Builtins : 
//Lots of functions already exist for you ! smart people have created this commonly-used functions for things we often need for example ;
//say you have a string and i woud like to make everything to lowerCase .

const phrase = "This Has wEiRd caSiNg On It" ; 

console.log(phrase.toUpperCase()) ;


// OBJECT AND ARRAYS 


const person =  {
    name : "beni dibatia" ,
    city : "Nicosia" ,
    favoriteFood : "pondumadesu" ,
    wantsMadesuRightNow : true ,
    numberOfMadesuWanted : 200 ,
    address : {
        street : "leoforos lemesou" ,
        apt : "144" ,
    }

}  ;
 
const propName = `city` ;
console.log(person) ;
console.log(person.name);
console.log(person[propName]); // same as the line above 


console.log(person.address.street) ;


// OBJECTS EXERCICES , OBJECTS can be used combined with function , if statements .


const parson1 = {
    name : "ben" ,
    ageRange : "20-35" 

} ;

const parson2 = {
    name : "Andrew" ,
    ageRange : "50-75" 
} ;


function musicSuggestion(parson) {
    if (parson.ageRange ==="20-35") {
        console.log("you like hip hop you damn ass millenial") ;

    } else if (parson.ageRange === "50-75") {
        console.log("Looks like we got a grandpa in here!");

    } else {
        console.log("get the shit outta here we ain't playing with kids") ;

    }
}

musicSuggestion(parson1);
musicSuggestion(parson2);

// another way of writing OBJECTS.

const dog = {
    name : " dog" ,
     Speak() {

        console.log("woof , woof !") ;

    }
}

dog.Speak();

// when writing Objects Keys has to be unique whereas value doesn'y necessarily have to.

//Nested Objects


const me = {
    name: "ben" ,
    lastname : "dibatia" ,
    location :  {
        avenue : "strovolos" ,
        maison : "45" ,
    }
} 

console.log(me);
console.log(me.location.maison);


//Context 


const you = {
    name : {
        first : "onesime"  ,
        last :  "dibatia"
    } ,
    residence : {
        streetNumber : "555" ,
        road : "lemesou avenue "  ,
        city : "Brussels" ,
        country : "Germany" ,
        zipcode : "2014"

    }  ,

    getcityAndcountry () {
        return `${this.city} , ${this.country}  `
    } ,
   
getAddress() {

    return `${this.name.first} , ${this.name.last} , ${this.residence.streetNumber} , ${this.residence.road} , ${this.residence.city} ,
    ${this.residence.country} , ${this.residence.zipcode}` ;
  } 

} ;

console.log(you.getAddress()) ;


// to check about different context in javaScript , just try out "this." or "window."


//Arrays is an  ordered list of collections of data
// Arrays starts counting at index zero


const dayOfTheWeek = [        
    "Monday",
    "Tuesday",
    "Wedsday" ,
    "Thursday",
    "Friday" ,
    "Saturday",
    "Sunday"
] ;

console.log(dayOfTheWeek) ;
console.log(dayOfTheWeek[0]) ;
console.log(dayOfTheWeek[3]);
console.log(dayOfTheWeek[6]);



//Arrays length here there is a way to bring out the length of the array  is like one of the array method.

const primeNumbers = [ 1, 2, 3, 5 , 7 , 11 , 13 , 17] ;

console.log(primeNumbers.length) ;
console.log(primeNumbers.join("beni")) ;

// the push method pushes element inside the ARRAYS.

const courses = [
    {teacher : "kyle Sympson" , course : "JS Function Lite"} ,
    {teacher : "sarah Drasner" , course : "Intro to Vue"   } ,
    {teacher : "Brian Holt "   ,  course : "intro to React v3"} ,
    {teacher : "Steve kinney"   , course : "state management"} ,
] ;

//courses.push ({teacher : "sean larkinn" , course : "webpack"}) ;   // the  arrays method is run here 

console.log(courses) ;

//courses[2] = {teacher : "Brian Holt" , course : "intro to React v3"} ;
//courses[2].course = "intro to React v4" ; // here is like i am just changing the course in other wors it's a sort of an update.

//console.log(courses) ;


// here if i woud like to put the pushed courses as a first element in the arrays ;


courses.unshift({teacher : "Brian Holt" , course : "intro to React v3"}) ; // there are a bunch of methods that can be used to manipulate elements in an array


// arrays exercises 


const cities = [
    "Moanda" ,
    "Boma"   ,
    "Matadi"  ,
    "Kinshasa" ,
    "Mbandaka"
]  ;

// Method 1 

for (let i = 0 ; i < cities.length ; i++) {

    const city = cities[i] ;
    console.log(cities[i].toUpperCase()) ;
}

// Method 2 

// to make the second method more explicit let create an element 

let daysOfran = 0 ;
cities.forEach(function(city) {    // .forEach is a method built into arrays   ( method =  is like a function of an object)
                                 // this .for each method is more like of functional programming 
    daysOfran++;
    console.log(city.toLocaleLowerCase()) ;  
}) ;

console.log(daysOfran) ;

// in both methods  we used two different approach to accomplish the same goal