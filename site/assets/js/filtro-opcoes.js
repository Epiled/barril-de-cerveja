let galeria = document.querySelector('.galeria');
let posts = galeria.querySelectorAll('.galeria__moldura')
let opcoesFiltro = document.querySelectorAll('[data-filtro-marca]')
let filtrados = [];

opcoesFiltro.forEach(opcao => {
  opcao.addEventListener('change', function (e) {
    for (let i = 0; i < posts.length; i++) {
      let post = posts[i]

      if (e.target.checked && (post.getAttribute('data-marca') == this.value)) {
        filtrados.push(post);
      } else if (!e.target.checked && (post.getAttribute('data-marca') == this.value)) {
        filtrados.splice(filtrados.indexOf(post), 1);
        post.classList.add('galeria--esconder');
      }

      if (e.target.checked) {
        if (filtrados.includes(post)) {
          post.classList.remove('galeria--esconder');
        } else {
          post.classList.add('galeria--esconder');
        }
      }
    }

    if(filtrados.length <= 0) {
      for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        post.classList.remove('galeria--esconder');
      }
    }
  })
});