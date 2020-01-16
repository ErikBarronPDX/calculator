//back-end logic
var add = function(number1, number2){
    return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//UI Logic
$(document).ready(function(){
  $("form#math").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#math1").val());
    var number2 = parseInt($("#math2").val());
    var operator = $("input:radio[name=operator]:checked").val();


    if (operator === "1"){
      var result = add(number1, number2);
    } else if (operator === "2"){
      var result = subtract(number1, number2);
    } else if (operator === "3") {
      var result = multiply(number1, number2);
    } else {
      var result = divide(number1, number2);
    }
    $("#mathOutput").text(result);
  });
});
