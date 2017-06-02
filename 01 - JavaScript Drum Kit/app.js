var keys, elem, dataKey;
keys = document.getElementsByClassName('key');

for (var i = 0; i < keys.length; i++ ){
  elem = keys[i];
  dataKey = parseInt(elem.getAttribute('data-key'));
  elem.addEventListener('mousedown', function() {
    this.classList.add('playing');
  });
  elem.addEventListener('mouseup', function() {
    this.classList.remove('playing');
  });
}

window.addEventListener('keydown', function (e) {
  console.log(e.keyCode);
  for (var i = 0; i < keys.length; i++ ){
    elem = keys[i];
    dataKey = parseInt(elem.getAttribute('data-key'));
    if(e.keyCode == dataKey){
      elem.classList.add('playing');
      }
    }
});
window.addEventListener('keyup', function (e) {
  for (var i = 0; i < keys.length; i++ ){
    elem = keys[i];
    dataKey = parseInt(elem.getAttribute('data-key'));
  if(e.keyCode == dataKey){
    elem.classList.remove('playing');
    }
  }
});
