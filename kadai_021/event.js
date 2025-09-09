const btn = document.getElementById('btn');
const text1 = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    text1.innerText = "ボタンをクリックしました。";
  }, 2000);
});