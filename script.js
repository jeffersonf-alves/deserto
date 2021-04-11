var slyderShow = document.getElementById('slyder');
var menu = document.getElementById('menu');

function showMenu() {
    menu.style.display = "block";
}
function closeMenu() {
    menu.style.display = "none";
}

function changeSlyder() {
    if(slyderShow.classList == "container") {
        slyderShow.classList.remove('container');
        slyderShow.classList.add('container-2');
    } else if(slyderShow.classList == "container-2") {
        slyderShow.classList.remove('container-2');
        slyderShow.classList.add('container-3');
    } else if(slyderShow.classList == "container-3") {
        slyderShow.classList.remove('container-3');
        slyderShow.classList.add('container');
    }
}
setInterval(changeSlyder, 7000);


function up(e){
    e.classList.add('imgContent');
}
function removeClass(e) {
    e.classList.remove('imgContent');
}