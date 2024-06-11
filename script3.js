var animate = document.querySelector('.animate');
animate.onmouseover = animate.ontouch = function () {
   animate.classList.toggle('roundup');
}
animate.onmouseout = animate.ontouchend = function () {
   animate.classList.toggle('roundup');
}
