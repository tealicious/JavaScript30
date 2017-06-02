var keys, dataKey, audio, audioArray;
audioArray = [];
keys = document.getElementsByClassName('key');


for (var i = 0; i < keys.length; i++ ){
  var elem = keys[i];
  elem.addEventListener('mousedown', function(e) {
    console.log(this);
    dataKey = parseInt(this.getAttribute('data-key'));
    this.classList.add('playing');
    audio = document.querySelector('audio[data-key=' + "'" + dataKey + "'" + ']');
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
    });
  elem.addEventListener('mouseup', function() {
    this.classList.remove('playing');
  });
}


console.log(audioArray);



window.addEventListener('keydown', function (e) {
  console.log(e.keyCode);
  for (var i = 0; i < keys.length; i++ ){
    elem = keys[i];
    dataKey = parseInt(elem.getAttribute('data-key'));
    if(e.keyCode == dataKey){
      elem.classList.add('playing');
      console.log(elem);
      audio = document.querySelector('audio[data-key=' + "'" + dataKey + "'" + ']');
      console.log(audio);
      audio.currentTime = 0;
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
