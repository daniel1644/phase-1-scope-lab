// Write your solution in this file!
customerName = 'bob';



function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}



var customerName = 'bob';
var bestCustomer;
function setBestCustomer() {
    if (customerName !== 'bob') {
      bestCustomer = 'not bob';
    }
    return bestCustomer;
  }
  setBestCustomer();



  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
  }



  const leastFavoriteCustomer = 'some value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another value';
  } 



