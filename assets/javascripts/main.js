window.onload = function(){
  /**
   * Evento de Click
   */
  document.querySelector('.resize-action').addEventListener('click', function(e){
    e.preventDefault();

    // using Array fro files
    new FileResize({
      boxPreview: document.querySelector('.previews'), 
      files: document.querySelector('.input-files').files, 
      width: 200, 
      height: 200,
      loading: 'carregando...' // (opcional)
    })
  })
}