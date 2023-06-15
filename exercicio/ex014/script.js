const abrir = document.getElementById('abrir');
const sair = document.getElementById('sair');

abrir.addEventListener('click', function() {
  abrir.classList.toggle('SairInvisivel');
  sair.classList.toggle('SairInvisivel');
});
sair.addEventListener('click', function() {
    abrir.classList.toggle('SairInvisivel');
    sair.classList.toggle('SairInvisivel');
})