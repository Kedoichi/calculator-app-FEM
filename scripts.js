//Tips Buttons LiveCheck
$(document).ready(function () {
  $(".selection div").click(function () {
    $(".selection div").removeClass("BTNClicked");
    $(this).addClass("BTNClicked");
    document.getElementById("customTip").value = "";
    $(".BTNReset").addClass("BTNClicked");

    // get Tip value
    tip = parseInt(document.getElementsByClassName("BTNClicked")[0].innerText);
    getInput();
  });
});

//Custom Tip
function customTip() {
  $(".selection div").removeClass("BTNClicked");
  $(".BTNReset").addClass("BTNClicked");
  tip = document.getElementById("customTip").value;
  getInput();
}

function getInput() {
  bill = document.getElementById("bill").value;
  numPeople = document.getElementById("numPeople").value;
  calc();
}

function calc() {
  if (bill == 0) return;

  TipAmount = (bill * tip) / 100;
  Total = parseFloat(bill) + TipAmount;
  TotalPerPerson = bill;
  document.getElementsByClassName("TotalPerPerson")[0].innerText =
    "$" + (Total / numPeople).toFixed(2);
  document.getElementsByClassName("tipAmount")[0].innerText =
    "$" + (TipAmount / numPeople).toFixed(2);
}

function setup() {
  var bill = 0;
  var tip = 0;
  var numPeople = 1;
  document.getElementById("customTip").value = "";
  $(".selection div").removeClass("BTNClicked");
  $(".BTNReset").removeClass("BTNClicked");
  document.getElementsByClassName("TotalPerPerson")[0].innerText = "$0.00";
  document.getElementsByClassName("tipAmount")[0].innerText = "$0.00";
  document.getElementById("numPeople").value=1;
  document.getElementById("bill").value="";
}
setup()