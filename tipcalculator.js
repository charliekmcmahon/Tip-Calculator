function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }


  var total = (billAmt * serviceQual) / numOfPeople;
  var totalmeal = (billAmt / numOfPeople);

  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  total = parseInt(total);

  totalmeal = Math.round(totalmeal * 100) / 100;
  totalmeal = totalmeal.toFixed(2);
  totalmeal = parseInt(totalmeal);


  var totalCostOfMealWithTip = totalmeal + total;


  document.getElementById("totalTip").style.display = "block";
  document.getElementById("mealCost").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  document.getElementById("cost").innerHTML = totalCostOfMealWithTip;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("mealCost").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("each2").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
