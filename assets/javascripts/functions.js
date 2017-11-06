/**
 * selector('.resize-action')
 * @param {*} string 
 */
function selector (string){
  return document.querySelector(string)
}

/**
 * selectorAll('.form')
 * @param {*} string 
 */
function selectorAll (string){
  return document.querySelectorAll(string)
}

/**
 * targetImage.src = drawFitImage(sourceImage, 200, 200)
 * 
 * @param {*} sourceImage 
 * @param {*} max_width 
 * @param {*} max_height 
 * @return base64 da imagem para ser usada
 */
function drawFitImage(sourceImage, max_width, max_height) {
  var 
  /**
   * Canvas
   */
  canvas = document.createElement('canvas'),
  
  /**
   * Context to Canvas
   */
  ctx = canvas.getContext('2d'),

  /**
   * Altura maxima
   */
  MAX_HEIGHT = max_width, 
  
  /**
   * Largura maxima
   */
  MAX_WIDTH = max_height,

  /*
  * Largura da image
  */
  sourceImageWidth = sourceImage.width,
  /**
   * Altura da image
   */
  sourceImageHeight = sourceImage.height;

  // WideScreen 4:3
  // w:1920 X h:1080
  if (sourceImageWidth > sourceImageHeight) {
    // largura maior do que eu gostaria
    if (sourceImageWidth > MAX_WIDTH) {
      /**
       * e.g: 
       * 1080 * (50 / 1920) -> 28.12
       */
      sourceImageHeight *= MAX_WIDTH / sourceImageWidth
      sourceImageWidth = MAX_WIDTH
    }
  }else {
    // Imagem mais alta do que larga
    if (sourceImageHeight > MAX_HEIGHT) {
      sourceImageWidth *= (MAX_HEIGHT / sourceImageHeight)
      sourceImageHeight = MAX_HEIGHT
    }
  }

  // tamanho do canvas
  canvas.width = sourceImageWidth
  canvas.height = sourceImageHeight

  // contexto do canvas
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(sourceImage, 0, 0, sourceImageWidth, sourceImageHeight)

  return canvas.toDataURL()
}

function resizeImagesToFit(files, width, height) {
  var previews = selector('.previews')

  Array.from(files).map(function(file, index) {
    if (file){
      var reader = new FileReader()
      var sourceImage = new Image()
      var targetImage = new Image()

      var boxImage = document.createElement('div')
      var boxImageClass = 'box-image'
      boxImage.classList.add(boxImageClass)
      boxImage.innerHTML = 'carregando....'
      previews.appendChild(boxImage)
      
      reader.onload = function(e) {
        /**
         * sourceImage
         */
        sourceImage.src = e.target.result
        
        // load da imagem
        sourceImage.onload = function(){          
          // pega o base64 do canvas com a imagem dentro
          targetImage.src = drawFitImage(sourceImage, width, height)

          // joga a imagem dentro do box de previews redimensionadas
          boxImage.innerHTML = ''
          boxImage.appendChild(targetImage)
        }
      } //reader onload

      reader.readAsDataURL(file)
    }
  }) // map
}