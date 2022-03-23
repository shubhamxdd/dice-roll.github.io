var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function myFunction() {
  var elemento = document.body;
  elemento.classList.toggle("red-mode");
}