/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When the object this refers to is the window object
* 2. When you call a function by referencing an object the dot notation used is implicity this
* 3. The new binding is when you're referening a new object instance created from a constructor function.
* 4. When you override what the constructor objects are set to by explicity calling them using .call or .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function dog(sound1) {
//     console.log(this);
//     return sound1;
// }
// dog('woof');

// Principle 2

// code example for Implicit Binding

const cat = {
    sound: 'meow',
    talk: function() {
        console.log(this.sound)
    }
}
cat.talk()

// Principle 3

// code example for New Binding
function aggressivePerson(shover) {
    this.shove = 'move,';
    this.shover = shover;
    this.yell = function() {
        console.log(this.shove +' '+ this.shover);
        console.log(this);
    };
}

const jerk1 = new aggressivePerson('Jerky!');
const jerk2 = new aggressivePerson('Jerkette!');

jerk1.yell();
jerk2.yell();


// Principle 4

// code example for Explicit Binding

const yourObject = {
    name: 'Connor',
    country: 'the US',
    favoriteFood: 'Pizza'
};

const thingsYouEnjoy = ['Fun', 'Javascript', 'Learning'];

function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.country}, and I enjoy ${thing1}, ${thing2}, and ${thing3}, also I love to eat ${this.favoriteFood}!`
}
console.log(tellUsAboutYourself.apply(yourObject,thingsYouEnjoy))
