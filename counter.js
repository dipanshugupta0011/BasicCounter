let counterElement = document.getElementById("counterValue");

function onDecrease() {
  let previousCounterValue = counterElement.textContent;
  let updatedValue = parseInt(previousCounterValue) - 1;
  counterElement.textContent = updatedValue;
  counterElement.style.color = "red";
}
function onResetVal() {
  let updatedValue = 0;
  counterElement.textContent = updatedValue;
  counterElement.style.color = "black";
}

function onIncrease() {
  let previousCounterValue = counterElement.textContent;
  let updatedValue = parseInt(previousCounterValue) + 1;
  counterElement.textContent = updatedValue;
  counterElement.style.color = "aqua";
}
