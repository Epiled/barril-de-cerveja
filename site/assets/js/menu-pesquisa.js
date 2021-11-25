let $ = document.querySelector.bind(document);

let menuBarra = $('.menu__barra');

let barraPesquisa = $('.menu__pesquisa');
let menuIconePesquisa = $('.menu__icone--lupa');

menuIconePesquisa.onclick = () => {
  barraPesquisa.classList.toggle('menu__pesquisa--ativo');
}