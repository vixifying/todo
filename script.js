let ul = document.querySelector("ul");
console.log(ul);
function add() {
  event.preventDefault();
  let item = document.querySelector("#result");
  let newItem = document.createElement("li");
  newItem.innerText = item.value;
  ul.append(newItem);
  console.log(item.value);
  item.value = "";
  newItem.addEventListener("click", function () {
    console.log(this);
    this.parentNode.removeChild(this);
  });
}
