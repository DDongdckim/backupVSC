window.onpointermove = function(){
    var newSnow = document.createElement('div')
    newSnow. className ='box'
    newSnow.style.left =event.x + 'px';
    newSnow.style.top = event.y +'px';
    document.body.appendChild(newSnow);
}