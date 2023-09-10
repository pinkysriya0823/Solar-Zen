var menubtn =document.getElementById("menubtn")
var sidenav =document.getElementById("sidenav")
var menu =document.getElementById("menu")
sidenav.style.right=-"250px";


menubtn.onclick = function() {
if(sidenav.style.right =="-250px"){
    sidenav.style.right="0";
    menu.src ="Furniture_Shop_imgs/close.png";
}
else{
  sidenav.style.right ="-250px";
 menu.src ="Furniture_Shop_imgs/menu.png";
}
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
