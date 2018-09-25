//We name the class
class User {
    //We call the constructor function and create the parameters. (constructor function is the "class")
    //These will be values that we want to be passed in and stored in the object. User is the object now
    constructor(first, last, e) {
                //On the right side of these expressions, the word 'first', 'last', and 'e' below,
                //we have the value that is getting passed into the parens when the object is created.
        this.f = first;
        this.l = last;
        this.email = e;
        //On the right side we have the actual properties of the object.
        //The left side stores the incoming value from the right sides as
        //the property for 'this' specific object being created.
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined because the property doesnt exsist. We changed first into f on line 8
console.log(userOne.f); //Paul is shown because f takes the first value.
console.log(userOne.l); // O'Connor is shown because l takes the last value
console.log(userOne) // shows me F , L , email.

// class User {
//     constructor(year, make, model) {
//         this.y = year;
//         this.m = make;
//         this.name = model;
//     }
// }

// var carType = new User(2017, "Honda", "Accord");
// console.log(carType);