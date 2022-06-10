var button = document.getElementById ("button");
count = 10 ;
button.onclick = function () {
  count=count-1;
   button=this.innerHTML="click me" + count;
}

var button = document.getElementById ("button");
count = 0 ;
button.onclick = function () {
  count=count+1;
   button=this.innerHTML="click me" + count;
}

let number = 0;
      document.querySelector("button").onclick = function() {
          number = number + 1;
          alert(number);
      }