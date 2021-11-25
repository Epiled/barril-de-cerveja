let $ = document.querySelector.bind(document);

let menuBotao = $('.menu__botao');
let menuBarra = $('.menu__barra--fechado')

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

