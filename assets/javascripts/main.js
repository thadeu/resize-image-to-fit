window.onload = function(){
  /**
   * Evento de Click
   */
  selector('.resize-action').addEventListener('click', function(e){
    e.preventDefault();
    resizeImagesToFit(selector('.input-files').files, 200, 200)
  })
}