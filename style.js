const inputField = document.getElementById("inputText");
console.log(inputField.value);

const root = document.getElementById("root");



function showValue() {
  const inputFieldValue = inputField.value;
  const p = document.createElement("p");
  p.innerText = inputFieldValue;
  root.append(p);
}