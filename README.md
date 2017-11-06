# Resize ImageToFit with Javascript

Para testar, abra o arquivo index.html, selecione as imagens e aguarde o redimensionamento. Pode ser usado em várias imagens.

# COMO USAR
```html
<form method="post" class='form'>
  <div class="field">
    <input type="file" name="file[]" id="file" class="input-files" multiple> 
    <label for="file">Selecione os arquivos</label>
  </div> <br>

  <div class="field">
    <button type="submit" class="resize-action btn btn-primary">Iniciar</button>
  </div>
</form>
```

```javascript
window.onload = function(){
  /**
   * Evento de Click
   * @param files
   * @param width largura pretendida
   * @param height altura pretendida
   */
  document.querySelector('.resize-action').addEventListener('click', function(e){
    e.preventDefault();
    
    resizeImagesToFit(
      document.querySelector('.input-files').files, 
      200, 
      200
    )
  })
}
```

# Exemplo
![captura de tela 2017-11-06 as 18 34 34](https://user-images.githubusercontent.com/77889/32465128-2be43768-c321-11e7-9cd0-5ec4abedc8a2.png)


# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Thadeu/resize-image-to-fit