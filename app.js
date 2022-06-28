// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const groceryContainer = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const productInput = form.elements.product;
  const qtyInput = form.elements.qty;

  addGrocery(qtyInput.value,productInput.value);
  productInput.value = "";
  qtyInput.value = "";
});

const addGrocery = (qty, product) => {
  const newGrocery = document.createElement("li");

  newGrocery.append(`${qty} ${product}`);
  
  // use old syntax for this method
  // newGrocery.innerText = `${qty} ${product}`;
  // groceryContainer.appendChild(newGrocery);
  groceryContainer.append(newGrocery);
};
