//ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User ("Anonymous dude");

//we can now use the insance and the . operator
//to access the 2 methods
anonDude.greet();
anonDude.status();

//Another insance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

var caleb = new User("Caleb");
caleb.greet();
caleb.status();

var katy = new User("Katy");
katy.greet();
katy.status();

/*
Here are a couple things to note: 

1. We have three different instances of the User class. Three different cookies. 
2. The . operator allows each instance of the class to 'access' the methods(functions) in the class. 
3. Each instance has a different result in the console based on the string that is passed in to the constructor. 

Let's clarify that in the next module. 4. Before you move on, see if you can create 2 new instances of the class from memory.
*/