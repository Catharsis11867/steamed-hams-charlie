$(document).ready(function () {
  //click on an image, get a message

  $("#theClams").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked theClams 2");
    $("#outputMsg").text("Good lord, what is happening in there?! \n ......Aurora Borealis?");
    $("#outputDiv").toggle();
  });

  $("#theHams").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked theHams 2");
    $("#outputMsg").text("Delightfully devilish, Seymour.");
    $("#outputDiv").toggle();
  });
});