/*-------------------------*/
/*|         Global        |*/
/*|       Variables       |*/
/*-------------------------*/
var hoursOfOperation = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var randomCustomer = function(maxCustomer, minCustomer){
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
};

/*-------------------------*/
/*|       Functions       |*/
/*|                       |*/
/*-------------------------*/
var htmlWriter = function(el){
  var totalCookies = Math.ceil(randomCustomer(this.maxCustomer, this.minCustomer) * this.averageCookieSold);
  var soldPostition = [];

  for (var j = 0; j < hoursOfOperation.length; j++){
    var divided = Math.ceil(totalCookies / 15 );
    soldPostition.push(divided);
    totalCookies -= divided;
  }

  var section = document.createElement(section);
  section.setAttribute('id', `${this.name.toLowerCase()}`);
  el.append(section);

  var tbl = document.createElement('table');
  var tbody = document.createElement('tbody');
  // creates table body
  for(var k = 0; k < 15; k++){
    var tr = document.createElement('tr');
  }

  var tr2 = document.createElement('tr');
  for (var i = 0; i < 4; i++){
    tr2.textContent = this.name;
  }
  var th = document.createElement(th);
  th.textContent = hoursOfOperation;
  tbl.appendChild(th)
  tbl.appendChild(tr2);
  tr.textContent = soldPostition;
  tbl.appendChild(tr);
  tbl.appendChild(tbody);
  section.appendChild(tbl);
  /*
  var table = document.createElement(`${name}table`);
  section.appendChild(table);

  var tr1 = document.createElement('tr');
  table.appendChild(tr1);

  var th = document.createElement('th');
  th.textContent = hoursOfOperation[0], hoursOfOperation[1];
  tr1.appendChild(th);

  var tr2 = document.createElement('tr');
  table.appendChild(tr2);*/
};

function StoreData(name, minCustomer, maxCustomer, averageCookieSold){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookieSold = averageCookieSold;

  storeInformation.push(this);
}

StoreData.prototype.render = htmlWriter;

var storeInformation =[];

var storeListElement = document.getElementById('main2');

var pikeAndFirst = new StoreData('First & Pike', 23, 65, 6.3);
var pikeRandCustomer = randomCustomer(pikeAndFirst.maxCustomer, pikeAndFirst.minCustomer);
console.log(pikeRandCustomer);

var seaTac = new StoreData('SeaTac Airport', 3, 24, 1.2);
var seaTacRandCustomer = randomCustomer(seaTac.maxCustomer, seaTac.minCustomer);
console.log(seaTacRandCustomer);

var seattleCenter = new StoreData('Seattle Center', 11, 38, 3.7);
var seattleCenterRandCustomer = randomCustomer(seattleCenter.maxCustomer, seattleCenter.minCustomer);
console.log(seattleCenterRandCustomer);

var capitalHill = new StoreData('Capital Hill', 20, 38, 3.7);
var capitalHillRandCustomer = randomCustomer(capitalHill.maxCustomer, capitalHill.minCustomer);
console.log(capitalHillRandCustomer);

var alki = new StoreData('Alki', 2, 16, 1.2);
var alkiRandCustomer = randomCustomer(alki.maxCustomer, alki.minCustomer);
console.log(alkiRandCustomer);

for (var i = 0; i < storeInformation.length; i++){
  storeInformation[i].render(storeListElement);
}



















/*
function setDataTable (averageCookieSold, randomCustomer) {
  var hoursOfOperation = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var totalCookies = Math.ceil(randomCustomer * averageCookieSold);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(totalCookies);
  var soldPostition = [];

  //makes the cookies sold
  for (var i = 0; i < hoursOfOperation.length; i++){
    var divided = Math.ceil(totalCookies / 15 );
    soldPostition.push(divided);
    totalCookies -= divided;
  }
  console.log(soldPostition);
  // Sets the table
  for (var j = 0; j < soldPostition.length; j++){
    console.log(hoursOfOperation[j] + ': ' + soldPostition[j] + 'cookies');
    var message = hoursOfOperation[j] + ': ' + soldPostition[j] + ' cookies';
  }
  //calculates totals
  var sum = soldPostition.reduce(reducer);
  console.log(sum);
  totalCookies = sum;
  console.log(totalCookies);
  return message;
}

function htmlWriter(name/*, averageCookieSold, randomCustomer) {
  //Creates the main element
  var mainElement = document.getElementById('main2');
  //Create the repetative tasks
  var section = document.createElement(`${name}section`);
  mainElement.appendChild(section);
  var h1 = document.createElement(`${name}h1`);
  h1.textContent = `${name}`;
  section.appendChild(h1);
  var ol = document.createElement(`${name}ol`);
  section.appendChild(ol);
  //Creates the list
  for (var i = 0; i < 15; i++){
    var li = document.createElement(`${name}li`);
    li.textContent = this.message;
    ol.appendChild(li);
  }
}

console.log(setDataTable(73, 30));

function randomPerson(maxCustomer,minCustomer) {
  var randomPerson = Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
  return randomPerson;
}

function CreateShop (name, minCustomer, maxCustomer, averageCookieSold){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookieSold = averageCookieSold;
}

var pikePlace = new CreateShop('FirstPike', 23, 65, 6.5);
//console.log(pikePlace);
//console.log(randomPerson(pikePlace.maxCustomer, pikePlace.minCustomer));
var customersOfTheDay = randomPerson(pikePlace.maxCustomer, pikePlace.minCustomer);
htmlWriter(pikePlace.name, pikePlace.averageCookieSold, customersOfTheDay);

/*
// console.log(firstPike.hoursOpen());
// console.log(seaTacAirport.hoursOpen());
// console.log(seattleCenter.hoursOpen());
// console.log(capitolHill.hoursOpen());
// console.log(alki.hoursOpen());

var mainElement = document.getElementById('main2');
//Pike Place
var section = document.createElement('pikeplace');
mainElement.appendChild(section);
var h1 = document.createElement('h1');
h1.textContent = `${firstPike.name}`;
section.appendChild(h1);
var pikeList = document.createElement('ol');
section.appendChild(pikeList);
for (var i = 0; i < 15; i++){
  var pikeListItems = document.createElement('li');
  pikeListItems.textContent = firstPike.hoursOpen();
  pikeList.appendChild(pikeListItems);
}

//Setac
var seatacSection = document.createElement('seaTac');
mainElement.appendChild(seatacSection);
var seaH1 = document.createElement('h1');
seaH1.textContent = `${seaTacAirport.name}`;
section.appendChild(seaH1);

var seaList = document.createElement('ol');
seatacSection.appendChild(seaList);

for (var j = 0; j < 15; j++){
  var seaListItems = document.createElement('li');
  seaListItems.textContent = seaTacAirport.hoursOpen();
  seaList.appendChild(seaListItems);
}
//var pikeListItems = document.createElement('li');

var seaCentSection = document.createElement('seaCent');
mainElement.appendChild(seaCentSection);
var seaCentH1 = document.createElement('h1');
seaCentH1.textContent = `${seattleCenter.name}`;
//console.log(h1.textContent);
seaCentSection.appendChild(seaCentH1);

var seaCentList = document.createElement('ol');
seaCentSection.appendChild(seaCentList);

for (var k = 0; k < 15; k++){
  var seaCentListItems = document.createElement('li');
  seaCentListItems.textContent = seattleCenter.hoursOpen();
  seaCentList.appendChild(seaCentListItems);
}

var capSection = document.createElement('cap');
mainElement.appendChild(capSection);
var capH1 = document.createElement('h1');
capH1.textContent = `${capitolHill.name}`;
capSection.appendChild(capH1);

var capList = document.createElement('ol');
capSection.appendChild(capList);

for (var l = 0; l < 15; l++){
  var capListItems = document.createElement('li');
  capListItems.textContent = capitolHill.hoursOpen();
  capList.appendChild(capListItems);
}

var alkiSection = document.createElement('alki');
mainElement.appendChild(alkiSection);
var alkiH1 = document.createElement('h1');
alkiH1.textContent = `${alki.name}`;
alkiSection.appendChild(alkiH1);

var alkiList = document.createElement('ol');
alkiSection.appendChild(alkiList);

for (var m = 0; m < 15; m++){
  var alkiListItems = document.createElement('li');
  alkiListItems.textContent = alki.hoursOpen();
  alkiList.appendChild(alkiListItems);
}
*/