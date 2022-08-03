let barraPesquisa = document.querySelector('.menu__campoPesquisa');
let menuIconePesquisa = document.querySelector('.menu__icone--lupa');

menuIconePesquisa.onclick = () => {
  barraPesquisa.classList.toggle('menu__campoPesquisa--ativo');
}