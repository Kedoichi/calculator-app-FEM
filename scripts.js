var bill = 0;
var tip = 0;
var numPeople = 1;

//Tips Buttons LiveCheck
$(document).ready(function () {
  $(".selection div").click(function () {
    $(".selection div").removeClass("BTNClicked");
    $(this).addClass("BTNClicked");
    $("#customTip").val("");
    $(".BTNReset").addClass("BTNClicked");

    // get Tip value
    tip = parseInt($(this).text());
    calc();
  });

  //Custom Tip

  $("#customTip").keyup(function () {
    $(".selection div").removeClass("BTNClicked");
    $(".BTNReset").addClass("BTNClicked");
    tip = document.getElementById("customTip").value;
    calc()
  });

  $("#bill").keyup(function () {
    $(".BTNReset").addClass("BTNClicked");
    bill = $(this).val();
    calc();
  });

  $("#numPeople").keyup(function () {
    $(".BTNReset").addClass("BTNClicked");
    numPeople = document.getElementById("numPeople").value;
    calc();
  });
});

function calc() {
  if (bill == 0) return;

  TipAmount = (bill * tip) / 100;
  Total = parseFloat(bill) + TipAmount;
  TotalPerPerson = bill;
  $(".TotalPerPerson").text("$" + (Total / numPeople).toFixed(2));
  $(".tipAmount").text("$" + (TipAmount / numPeople).toFixed(2));
}

function setup() {
  bill = 0;
  tip = 0;
  numPeople = 1;
  $("#customTip").val("");
  $(".selection div").removeClass("BTNClicked");
  $(".BTNReset").removeClass("BTNClicked");
  $(".TotalPerPerson").text("$0.00");
  $(".tipAmount").text("$0.00");
  $("#numPeople").val("1");
  $("#bill").val("");
}
