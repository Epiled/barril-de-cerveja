var menuBotao = document.querySelector('.menu__botao');
var menuBarra = document.querySelector('.menu__barra');

menuBotao.onclick = function(){
  document.documentElement.classList.toggle('menu__ativo');
  menuBarra.classList.toggle('menu--fechado');
};

document.documentElement.onclick = function(event){
  if(event.target === document.documentElement){
    document.documentElement.classList.remove('menu__ativo');
    menuBarra.classList.add('menu--fechado');
  };
};
