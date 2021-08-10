console.log("hello world!");


let tips = 0;
function ShowValue(btn) {
  tips = btn.value;
  let number = document.querySelector("#bill").value;
  let numberOfPeople = document.querySelector("#no-people").value;
  let test = document.querySelector("#cost-amount");
let test2 = document.querySelector("#cost-total");
  //console.log(number);
  //console.log(tips);
  //console.log(numberOfPeople);
  let person = number / numberOfPeople;
  //console.log(person);
  let tipAmount = person * (tips / 100);
  //console.log(parseFloat(tipAmount).toFixed(2));
  let total = person + tipAmount;
  //console.log(parseFloat(total).toFixed(2));
  test.innerHTML = "$" + parseFloat(tipAmount).toFixed(2);
  test2.innerHTML = "$" + parseFloat(total).toFixed(2);
}
