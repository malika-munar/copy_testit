let display = "";

function appendToDisplay(value) {
  display += value;
  document.querySelector('.display').value = display;
}

function clearDisplay() {
  display = "";
  document.querySelector('.display').value = display;
}

function operate(operator) {
  display += operator;
  document.querySelector('.display').value = display;
}

function calculate() {
  try {
    const result = eval(display);
    display = result.toString();
    document.querySelector('.display').value = display;
  } catch (error) {
    display = "";
    document.querySelector('.display').value = "Error";
  }
}
