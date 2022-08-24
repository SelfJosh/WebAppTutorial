// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//Funtions to be called onmouseover and onmouseout to change the color of "Hello World"

function newColor() {
    document.getElementById("hello_world").style.color = "grey";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "black";
}

var id = null;

function videoAnimation() {
    var elem = document.getElementById("videoContainer");
    var pos = -1300;
    clearInterval(id);
    id - setInterval(frame, 0)
    function frame() {
        if (pos == 400) {
            clearInterval(id)
        } else {
            pos++,pos++;
            elem.style.left = pos + 'px'
        }
    }
}