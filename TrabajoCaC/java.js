function cambiarImagen(event) {
  if (event.target.tagName === 'IMG') {
      var nuevaImagen = event.target.getAttribute('data-imagen');
      document.getElementById('imagenPrincipal').src = nuevaImagen;
      var miniaturas = document.querySelectorAll('.ContenedorDeImg .img');
      miniaturas.forEach(function (miniatura) {
          miniatura.classList.remove('activa');
      });
      event.target.classList.add('activa');
  }
}

