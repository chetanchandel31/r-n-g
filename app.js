window.open(
  "https://github.dev/chetanchandel31/ques/blob/main/ques.md",
  "_blank"
);

const minValEl = document.getElementById("minVal");
const maxValEl = document.getElementById("maxVal");
const quantityEl = document.getElementById("quantity");
const outputEl = document.getElementById("output");
const regenerateBtn = document.getElementById("regenerateBtn");

let minVal = Number(minValEl.value);
let maxVal = Number(maxValEl.value);
let quantity = Number(quantityEl.value);

function getRandomNumbers({ minVal = 1, maxVal, quantity }) {
  const numbers = [];

  if (maxVal - minVal < quantity + 5) return alert("range is too small");

  while (numbers.length < quantity) {
    let randomNumber = Math.floor(Math.random() * maxVal) + 1;
    if (!numbers.includes(randomNumber) && randomNumber >= minVal)
      numbers.push(randomNumber);
  }

  return numbers;
}

const populateOutputEl = () => {
  const randomNumbers = getRandomNumbers({ minVal, maxVal, quantity });

  outputEl.textContent = randomNumbers.join(", ");
};

const setValuesFromLocalStorage = () => {
  const lsQuantity = Number(localStorage.getItem("quantity"));
  const lsMinVal = Number(localStorage.getItem("minVal"));
  const lsMaxVal = Number(localStorage.getItem("maxVal"));

  if (lsQuantity) {
    quantity = lsQuantity;
    quantityEl.value = lsQuantity;
  }
  if (lsMinVal) {
    minVal = lsMinVal;
    minValEl.value = lsMinVal;
  }
  if (maxVal) {
    maxVal = lsMaxVal;
    maxValEl.value = lsMaxVal;
  }
};

setValuesFromLocalStorage();
populateOutputEl();

regenerateBtn.addEventListener("click", populateOutputEl);
minValEl.addEventListener("keyup", () => {
  minVal = Number(minValEl.value);
  localStorage.setItem("minVal", Number(minValEl.value));
});
maxValEl.addEventListener("keyup", () => {
  maxVal = Number(maxValEl.value);
  localStorage.setItem("maxVal", Number(maxValEl.value));
});
quantityEl.addEventListener("keyup", () => {
  if (quantityEl.value > 10) {
    quantityEl.value = 10;
    quantity = 10;
  }
  quantity = Number(quantityEl.value);
  localStorage.setItem("quantity", Number(quantityEl.value));
});
