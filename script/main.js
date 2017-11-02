var beginningScenarios = ["You wake up in a hospotal. It is eerily quiet. you tiptoe to the door and peek out.",
      "You are standing in an open field west of a white house with a boarded front door. There is a samall mailbox here.",
      "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods. "
    ];

  function randomNumber(range){
    return Math.floor(Math.random() * range);

  }

  alert(beginningScenarios[randomNumber(beginningScenarios.length )]);


var weaponList = ["shovel", "crossbow", "baseball bat", "rubber chicken"];

var weapon = weaponList[randomNumber(weaponList.length)];
alert("Being that it is thezombie apocalypse, you decide to search for a weapon first. After surveing your surroundings you notice and grab a  "
+ weapon + ".");

alert("Suddenly a zombie bursts through the door! You ready your " + weapon + " and advance towrds the zombie.");

var survival = randomNumber(2);

if(survival === 0) {
  alert("The zombie bites you. You lose!!");
} else if (survival > 0) {
  alert("You killthe zombie with your" + weapon + " You win !!!!");
}


// var mark = {
//   name: "Mark",
//   tshirtColor: "navy blue"
// };
//
// var lisa = {
//   name: "Lisa",
//   tshirtColor: "red"
// }

function Friend(name, tshirtColor) {
  this.name = name;
  this.tshirtColor = tshirtColor;
}

var denny = new Friend("Denny", "green");
var lisa = new Friend("Lisa", "red");

alert("Hi my name is " + denny.name + ". My favorite color is "+ denny.tshirtColor);
alert("Hi my name is " + lisa.name + ". My favorite color is "+ lisa.tshirtColor);


// SCOPE EXAMPLE
var example = "value";

function alertExample() {
  alert(example);

  var anotherExample = "?";
  alert(anotherExample);
}

alertExample();


// ------------------------------------
var three = "3";

function alertNumber() {
  var one = "1";
  alert(one);

  function alertAnotherNumber(){
    var two = "2";
    alert(one);
    alert(two);
    alert(three);

  }

  alertAnotherNumber();
}

alertNumber();
  // alertAnotherNumber(); -> this does not happen because it's inside the alertNumber function SCOPE
