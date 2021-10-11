let $ = document.querySelector.bind(document);

let menuBotao = $('.menu__botao');
let menuBarra = $('.menu__barra');

menuBotao.onclick = function(){
  document.documentElement.classList.toggle('menu__ativo');
  menuBarra.classList.toggle('menu__barra--fechado');
};

document.documentElement.onclick = function(event){
  if(event.target === document.documentElement){
    document.documentElement.classList.toggle('menu__ativo');
    menuBarra.classList.toggle('menu__barra--fechado');
  };
};

let barraPesquisa = $('.menu__pesquisa');
let menuIconePesquisa = $('.menu__icone--lupa');

menuIconePesquisa.onclick = () => {
  barraPesquisa.classList.toggle('menu__pesquisa--ativo');
}
