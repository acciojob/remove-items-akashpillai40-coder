//your JS code here. If required.

let select = document.querySelector("#colorSelect");
let button = document.querySelector("input");


button.addEventListener("click", () => {
  let selectedOption = select.options[select.selectedIndex];
  selectedOption.remove();
});
