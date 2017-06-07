<template>
  <div id="body">
    <div class='center-content' >
      <img class='vue-shadow' src="./assets/logo.png" @click="scrollToBottom()">
      <br />
      <h2>ajax, baby!</h2>
      <div id='solaire'></div>
      <button @click="showData()">Click ME!</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      toggle: 0
    }
  },
  methods: {
    scrollToBottom() {
      $("html, body").animate({ scrollTop: $("#footer").offset().top }, "fast");
      return false;
    },
    showData() {
      this.toggle += 1;
      if((this.toggle % 2) != 0) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
          // 'this' references 'httpRequest'
          //readyStates:
          // 0
          // 1 loading
          // 2 loaded
          // 3 interacting
          // 4 complete
          if(this.readyState === this.DONE){
            console.log(this.status, 'praise the sun!', this);
            console.log(this.readyState);
            document.getElementById('solaire').innerHTML = this.response;
          } else {
            console.log(this.status, 'not ready yet :(', this);
            console.log(this.readyState);
          }
        }

        httpRequest.open('GET', 'requestPage.html', true);
        httpRequest.send();
      } else {
        document.getElementById('solaire').innerHTML = '';
      }
    }
  }
}


var myData = "my new data blah blah blah";
console.log(myData);
var myPost = "nameKey=value&mydata=" + encodeURIComponent(myData);
</script>

<style lang="scss">
#body {
  //flex-grow:1;
  display:flex;
  flex-flow:column wrap;
  justify-content:flex-start;
  //align-items:center;
  width:100%;
  height:100vh;
  min-height:100vh;
  .center-content {
    margin-top:4rem;
    text-align:center;
    display:flex;
    flex-flow:column wrap;
    align-items:center;
    justify-content:space-around;
    height:100%;
    position:relative;
    img {
      cursor:pointer;
      width:100px;
    }
    button {
      margin-top:auto;
      margin-bottom:10vmin;
    }
  }

  > div {
    width:100%;
  }
}
</style>
