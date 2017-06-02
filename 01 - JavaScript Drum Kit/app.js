var keys, elem, dataKey, audio;

keys = document.getElementsByClassName('key');

for (var i = 0; i < keys.length; i++ ){
  elem = keys[i];
  dataKey = parseInt(elem.getAttribute('data-key'));
  elem.addEventListener('mousedown', function() {
    this.classList.add('playing');
    audio = document.querySelector('audio[data-key=' + "'" + dataKey + "'" + ']');
    console.log(audio);
    audio.play();
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
      audio = document.querySelector('audio[data-key=' + "'" + dataKey + "'" + ']');
      console.log(audio);
      audio.play();
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
