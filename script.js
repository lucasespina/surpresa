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
  window.location.href = 'https://www.youtube.com/watch?v=WiNYFwIfg4w&pp=ygUddGVtIGNhYmFyw6kgZXNzYSBub2l0ZSByZWZyYW8%3D'; // Insira o link desejado aqui
});
