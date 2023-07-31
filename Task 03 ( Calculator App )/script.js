let result = document.getElementById("result");
let expression = "";

function appendNumber(number) {
  expression += number;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function calculateResult() {
  try {
    expression = eval(expression).toString();
    result.value = expression;
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  expression = "";
  result.value = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function removeNumber() {
  expression = expression.slice(0, -1);
  result.value = expression;
}
