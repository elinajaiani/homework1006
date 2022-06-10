var button = document.getElementById ("button");
count = 10 ;
button.onclick = function () {
    count=count-1;
    button=this.innerHTML="turn on" + count;
}
