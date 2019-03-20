/*-------------------------*/
/*|         Global        |*/
/*|       Variables       |*/
/*-------------------------*/
var hoursOfOperation = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var randomCustomer = function(maxCustomer, minCustomer){
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
};

var mainTable = document.getElementById('tablebody');
var tableHead = document.createElement('thead');
mainTable.appendChild(tableHead);

var tr = document.createElement('tr');
tableHead.appendChild(tr);

var th = document.createElement('th');
tr.appendChild(th);

for (var i = 0; i < hoursOfOperation.length; i++){
  var th1 = document.createElement('th');
  th1.textContent= hoursOfOperation[i];
  tr.appendChild(th1);
}

var thTotal = document.createElement('th');
thTotal.textContent = 'Total';
tr.appendChild(thTotal);


var tBody = document.createElement('tbody');
mainTable.appendChild(tBody);

/*-------------------------*/
/*|       Functions       |*/
/*|                       |*/
/*-------------------------*/
var htmlWriter = function(){

  var soldPostition = [];

  for (var j = 0; j < hoursOfOperation.length; j++){
    var totalCookies = Math.ceil(randomCustomer(this.maxCustomer, this.minCustomer) * this.averageCookieSold);
    soldPostition.push(totalCookies);
  }
  console.log(soldPostition);

  var trBody = document.createElement('tr');
  tBody.appendChild(trBody);
  var td = document.createElement('td');
  td.textContent = this.name;
  trBody.appendChild(td);

  for (var k = 0; k < soldPostition.length; k++){
    var td1 = document.createElement('td');
    td1.textContent = soldPostition[k];
    trBody.appendChild(td1);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var sum = soldPostition.reduce(reducer);

  var tdTotal = document.createElement('td');
  tdTotal.textContent = sum;
  trBody.appendChild(tdTotal);
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

/*-------------------------*/
/*|       Utilize the     |*/
/*|       Constructor     |*/
/*-------------------------*/

var pikeAndFirst = new StoreData('First & Pike', 23, 65, 6.3);

var seaTac = new StoreData('SeaTac Airport', 3, 24, 1.2);

var seattleCenter = new StoreData('Seattle Center', 11, 38, 3.7);

var capitalHill = new StoreData('Capital Hill', 20, 38, 3.7);

var alki = new StoreData('Alki', 2, 16, 1.2);

for (var i = 0; i < storeInformation.length; i++){
  storeInformation[i].render(storeListElement);
}
