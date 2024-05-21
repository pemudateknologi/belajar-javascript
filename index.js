/** @format */

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.getElementsByTagName("ul")[0];

  const liBaru = document.createElement("li");
  const liBaruText = document.createTextNode("Item Baru");

  liBaru.appendChild(liBaruText);
  ul.appendChild(liBaru);
});
