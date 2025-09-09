const btn = document.getElementById("btn");
const btnText = document.getElementById("text");
btn.addEventListener("click", () => {
  btnText.innerText = "ボタンがクリックされました。";
});