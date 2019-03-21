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

//Handle Events
var shopForm = document.getElementById('storeForm');

var addCookieShop = function(clickEvent){
  clickEvent.preventDefault();

  var name = event.target.name.value;
  var minCustomer = event.target.minCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var averageCookieSold = event.target.avgerageCookieSold.value;

  event.target.reset();

  var shop = new StoreData(name, minCustomer, maxCustomer, averageCookieSold);
  shop.render(document.getElementById(tBody));

};
//Listener
shopForm.addEventListener('submit', addCookieShop);

for (var j = 0; j < storeInformation.length; j++){
  storeInformation[j].render(storeListElement);
}
