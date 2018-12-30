var countDownDate = new Date("Jan 1 , 2019 12:00:00").getTime();
var countDownFunction = setInterval(function(){
  var now = new Date().getTime();
  var distance = countDownDate - now ;
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor(( distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor(( distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor(( distance % (1000 * 60)) / (1000));
  d = addZero(d);
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  document.getElementById("time").innerHTML = d + "D: " + h + "H: " + m + "M: " + s + "S";
  if (distance < 0) {
    clearInterval(countDownFunction);
    document.getElementById("time").innerHTML = "WELCOME";
  }
  function addZero(a){
    if (a < 10) {
      a = "0" + a;
    }
    return a;
  }

},1000);
