const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const btnText = document.getElementById("text");
  btnText.innerText = "ボタンがクリックされました。";
});