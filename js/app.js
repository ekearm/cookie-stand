var firstPike = {
  name: 'First & Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  hoursOpen: function() {
    var time = ['am', 'pm'];
    var operation = [];
    for(var i = 6; i <= 20; i++){
      if(i < 12){
        var timeNow = i + time[0];
        operation.push(timeNow);
      } else if (i === 12){
        var noon = i + time[1];
        operation.push(noon);
      } else {
        switch(i > 12) {
        case i === 13:
          var onePM = `1${time[1]}`;
          operation.push(onePM);
          break;
        case i === 14:
          var twoPM = `2${time[1]}`;
          operation.push(twoPM);
          break;
        case i === 15:
          var threePM = `3${time[1]}`;
          operation.push(threePM);
          break;
        case i === 16:
          var fourPM = `4${time[1]}`;
          operation.push(fourPM);
          break;
        case i === 17:
          var fivePM = `5${time[1]}`;
          operation.push(fivePM);
          break;
        case i === 18:
          var sixPM = `6${time[1]}`;
          operation.push(sixPM);
          break;
        case i === 19:
          var sevenPM = `7${time[1]}`;
          operation.push(sevenPM);
          break;
        case i === 20:
          var atePM = `8${time[1]}`;
          operation.push(atePM);
          break;
        }
      }
    }
    var totalcookies = Math.ceil(this.randomCustomer() * this.avgCookieSale);
    var soldPostition = [];
    var divided = Math.floor(totalcookies / 15);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for(var j = 0; j < 15; j++){
      soldPostition.push(divided);
    }

    var totalcookiesSold = soldPostition.reduce(reducer) + ' cookies';
    console.log(totalcookiesSold);
    console.log(soldPostition);

    for (var k = 0; k < 15; k++){
      console.log(operation[k] + ': ' + soldPostition[k] +' cookies');
      var message = operation[k] + ': ' + soldPostition[k] +' cookies';
    }
    return message;
  },
  randomCustomer: function() {
    var randomPerson = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    return randomPerson;
  },
};

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hoursOpen: function() {
    var time = ['am', 'pm'];
    var operation = [];
    for(var i = 6; i <= 20; i++){
      if(i < 12){
        var timeNow = i + time[0];
        operation.push(timeNow);
      } else if (i === 12){
        var noon = i + time[1];
        operation.push(noon);
      } else {
        switch(i > 12) {
        case i === 13:
          var onePM = `1${time[1]}`;
          operation.push(onePM);
          break;
        case i === 14:
          var twoPM = `2${time[1]}`;
          operation.push(twoPM);
          break;
        case i === 15:
          var threePM = `3${time[1]}`;
          operation.push(threePM);
          break;
        case i === 16:
          var fourPM = `4${time[1]}`;
          operation.push(fourPM);
          break;
        case i === 17:
          var fivePM = `5${time[1]}`;
          operation.push(fivePM);
          break;
        case i === 18:
          var sixPM = `6${time[1]}`;
          operation.push(sixPM);
          break;
        case i === 19:
          var sevenPM = `7${time[1]}`;
          operation.push(sevenPM);
          break;
        case i === 20:
          var atePM = `8${time[1]}`;
          operation.push(atePM);
          break;
        }
      }
    }
    var totalcookies = Math.ceil(this.randomCustomer() * this.avgCookieSale);
    var soldPostition = [];
    var divided = Math.floor(totalcookies / 15);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for(var j = 0; j < 15; j++){
      soldPostition.push(divided);
    }

    var totalcookiesSold = soldPostition.reduce(reducer) + ' cookies';
    console.log(totalcookiesSold);
    console.log(soldPostition);

    for (var k = 0; k < 15; k++){
      console.log(operation[k] + ': ' + soldPostition[k] +' cookies');
      var message = operation[k] + ': ' + soldPostition[k] +' cookies';
    }
    return message;
  },
  randomCustomer: function() {
    var randomPerson = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    return randomPerson;
  },
};

var seattleCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  hoursOpen: function() {
    var time = ['am', 'pm'];
    var operation = [];
    for(var i = 6; i <= 20; i++){
      if(i < 12){
        var timeNow = i + time[0];
        operation.push(timeNow);
      } else if (i === 12){
        var noon = i + time[1];
        operation.push(noon);
      } else {
        switch(i > 12) {
        case i === 13:
          var onePM = `1${time[1]}`;
          operation.push(onePM);
          break;
        case i === 14:
          var twoPM = `2${time[1]}`;
          operation.push(twoPM);
          break;
        case i === 15:
          var threePM = `3${time[1]}`;
          operation.push(threePM);
          break;
        case i === 16:
          var fourPM = `4${time[1]}`;
          operation.push(fourPM);
          break;
        case i === 17:
          var fivePM = `5${time[1]}`;
          operation.push(fivePM);
          break;
        case i === 18:
          var sixPM = `6${time[1]}`;
          operation.push(sixPM);
          break;
        case i === 19:
          var sevenPM = `7${time[1]}`;
          operation.push(sevenPM);
          break;
        case i === 20:
          var atePM = `8${time[1]}`;
          operation.push(atePM);
          break;
        }
      }
    }
    var totalcookies = Math.ceil(this.randomCustomer() * this.avgCookieSale);
    var soldPostition = [];
    var divided = Math.floor(totalcookies / 15);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for(var j = 0; j < 15; j++){
      soldPostition.push(divided);
    }

    var totalcookiesSold = soldPostition.reduce(reducer) + ' cookies';
    console.log(totalcookiesSold);
    console.log(soldPostition);

    for (var k = 0; k < 15; k++){
      console.log(operation[k] + ': ' + soldPostition[k] +' cookies');
      var message = operation[k] + ': ' + soldPostition[k] +' cookies';
    }
    return message;
  },
  randomCustomer: function() {
    var randomPerson = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    return randomPerson;
  },
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  hoursOpen: function() {
    var time = ['am', 'pm'];
    var operation = [];
    for(var i = 6; i <= 20; i++){
      if(i < 12){
        var timeNow = i + time[0];
        operation.push(timeNow);
      } else if (i === 12){
        var noon = i + time[1];
        operation.push(noon);
      } else {
        switch(i > 12) {
        case i === 13:
          var onePM = `1${time[1]}`;
          operation.push(onePM);
          break;
        case i === 14:
          var twoPM = `2${time[1]}`;
          operation.push(twoPM);
          break;
        case i === 15:
          var threePM = `3${time[1]}`;
          operation.push(threePM);
          break;
        case i === 16:
          var fourPM = `4${time[1]}`;
          operation.push(fourPM);
          break;
        case i === 17:
          var fivePM = `5${time[1]}`;
          operation.push(fivePM);
          break;
        case i === 18:
          var sixPM = `6${time[1]}`;
          operation.push(sixPM);
          break;
        case i === 19:
          var sevenPM = `7${time[1]}`;
          operation.push(sevenPM);
          break;
        case i === 20:
          var atePM = `8${time[1]}`;
          operation.push(atePM);
          break;
        }
      }
    }
    var totalcookies = Math.ceil(this.randomCustomer() * this.avgCookieSale);
    var soldPostition = [];
    var divided = Math.floor(totalcookies / 15);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for(var j = 0; j < 15; j++){
      soldPostition.push(divided);
    }

    var totalcookiesSold = soldPostition.reduce(reducer) + ' cookies';
    console.log(totalcookiesSold);
    console.log(soldPostition);

    for (var k = 0; k < 15; k++){
      console.log(operation[k] + ': ' + soldPostition[k] +' cookies');
      var message = operation[k] + ': ' + soldPostition[k] +' cookies';
    }
    return message;
  },
  randomCustomer: function() {
    var randomPerson = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    return randomPerson;
  },
  randomCustomer: function() {
    var randomPerson = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) +this.minCustomer);
    return randomPerson;
  }
};

var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  hoursOpen: function() {
    var time = ['am', 'pm'];
    var operation = [];
    for(var i = 6; i <= 20; i++){
      if(i < 12){
        var timeNow = i + time[0];
        operation.push(timeNow);
      } else if (i === 12){
        var noon = i + time[1];
        operation.push(noon);
      } else {
        switch(i > 12) {
        case i === 13:
          var onePM = `1${time[1]}`;
          operation.push(onePM);
          break;
        case i === 14:
          var twoPM = `2${time[1]}`;
          operation.push(twoPM);
          break;
        case i === 15:
          var threePM = `3${time[1]}`;
          operation.push(threePM);
          break;
        case i === 16:
          var fourPM = `4${time[1]}`;
          operation.push(fourPM);
          break;
        case i === 17:
          var fivePM = `5${time[1]}`;
          operation.push(fivePM);
          break;
        case i === 18:
          var sixPM = `6${time[1]}`;
          operation.push(sixPM);
          break;
        case i === 19:
          var sevenPM = `7${time[1]}`;
          operation.push(sevenPM);
          break;
        case i === 20:
          var atePM = `8${time[1]}`;
          operation.push(atePM);
          break;
        }
      }
    }
    var totalcookies = Math.ceil(this.randomCustomer() * this.avgCookieSale);
    var soldPostition = [];
    var divided = Math.floor(totalcookies / 15);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for(var j = 0; j < 15; j++){
      soldPostition.push(divided);
    }

    var totalcookiesSold = soldPostition.reduce(reducer) + ' cookies';
    console.log(totalcookiesSold);
    console.log(soldPostition);

    for (var k = 0; k < 15; k++){
      console.log(operation[k] + ': ' + soldPostition[k] +' cookies');
      var message = operation[k] + ': ' + soldPostition[k] +' cookies';
    }
    return message;
  },
  randomCustomer: function() {
    var randomPerson = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    return randomPerson;
  },
  randomCustomer: function() {
    var randomPerson = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) +this.minCustomer);
    return randomPerson;
  }
};

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
