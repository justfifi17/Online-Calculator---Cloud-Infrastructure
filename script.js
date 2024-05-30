function appendToScreen(value) {
   document.getElementById("screen").value += value;
  }

  function calculateResult() {
   var screen = document.getElementById("screen");
   screen.value = eval(screen.value);
  }

  function clearScreen() {
   document.getElementById("screen").value = '';
  }