const paragraphEl = document.querySelector("p");
const bodyEl = document.querySelector("body");
const switchEl = document.querySelector("button");


// paragraphEl.style.color = "red";
// paragraphEl.style.fontSize = "60px";
// paragraphEl.style.fontFamily = "sans-serif";


paragraphEl.classList.remove("random");
paragraphEl.classList.add("red-giant");

bodyEl.classList.toggle("on");

switchEl.onclick = function() {
  bodyEl.classList.toggle("on");
}