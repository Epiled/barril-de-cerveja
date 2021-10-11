let filtroBotao = $('[data-botaoFiltro]');
let filtro = $('[data-filtro]');

filtroBotao.addEventListener('click', () => {

  if(filtro.classList.contains('filtro--fechado')){
    filtro.classList.toggle('filtro--fechado');
    filtro.style.top = ((filtro.offsetHeight * -1) + 'px');
  } else {
    filtro.classList.toggle('filtro--fechado');

    filtro.style.top = 14.2 + "rem";
  }
  
});