var fontStacks = [
  '\'Pangolin\', cursive',
  '\'Lato\', sans-serif',
  '\'Barrio\', cursive',
  '\'Montserrat\', sans-serif',
  '\'Bahiana\', cursive',
  '\'Caveat Brush\', cursive',
  '\'Indie Flower\', cursive',
  '\'Fjalla One\', sans-serif'];


window.onload = function() {
  maxSize = 14;  // ("em")
  myString="Hello World"; // my first gitlab project
  myString = myString.split('');
  myElement = 'span';
  helloworld=document.getElementById("helloworld");
  for(i=0;i<myString.length;i++) {
    newEl = document.createElement(myElement);
    txt = document.createTextNode(myString[i]);
    (function (newEl,txt) {
      setTimeout(function() {
        newEl.style.backgroundColor = rnd('color');
        newEl.style.fontFamily=rnd('font', fontStacks);
        newEl.style.fontSize=rnd('size', maxSize)+'em'; // 3 max 1.5 min, etc ...
        newEl.appendChild(txt);
        helloworld.appendChild(newEl);
      }, 200 * i)
    })(newEl,txt)
  }
};

function rnd(prop, val=0) {
  switch(prop) {
    case "color":
      color="rgba(";
      for (i=0;i<3;i++) {
        color+=Math.floor(Math.random()*255).toString()+", ";
      }
      color+=(Math.floor(Math.random()*10)/10).toString()+")";
      console.log(color);
      return color;
      break;
    case "time":
      val=Math.floor(Math.random()*(val==0?200:val));
      console.log(val);
      return val;
      break;
    case "height":
      val=Math.floor(Math.random()*(val==0?50:val));
      console.log(val);
      return val.toString();
      break;
    case "size":
      val=val/2+Math.floor(Math.random()*val/2*10)/10;
      console.log(val);
      return val.toString();
      break;
    case "font":
      console.log(val[Math.floor(Math.random()*val.length)]);
      return val[Math.floor(Math.random()*val.length)];
      break;
    default:
      return null;
  }
}
