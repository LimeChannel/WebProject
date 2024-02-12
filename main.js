var rev = document.getElementsByClassName("review");
var N = rev.length;
var num = document.getElementById("numb");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
function closeAll(body) {
    var i;
    for (i = 0; i !== rev.length; i += 1) {
        body[i].style.display = "none";
    }
}
function open(i) {
    closeAll(rev);
    rev[i].style.display = "block";
    changeNumber();
}
function number() {
    var i;
    for (i = 0; i !== N; i += 1) {
        if (rev[i].style.display === "block") {
            return i;
        }
    }
}
function newNumber(i) {
    var n = number() + i;
    if (n === N) {
        n = 0;
    }
    if (n < 0) {
        n = N - 1;
    }
    return n;
}
function changeNumber() {
    var n = (number() + 1) + "/" + N;
    num.innerHTML = n;
}
window.addEventListener("DOMContentLoaded", function () {
    open(1);
    prev.addEventListener("click", function () {
        var n = newNumber(-1);
        open(n);
    });
    next.addEventListener("click", function () {
        var n = newNumber(1);
        open(n);
    });
});
