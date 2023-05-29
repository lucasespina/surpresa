const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('click', () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=2Od-X7FQT2Q&pp=ygUNUmljYXJkbyBtaWxsbw%3D%3D'; // Insira o link desejado aqui
});
