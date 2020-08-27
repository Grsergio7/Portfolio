// Modal //

var parent = document.querySelector('.modal-parent'),
    parent2 = document.querySelector('.modal-parent-2'),
    parent3 = document.querySelector('.modal-parent-3'),
    p1 = document.querySelector('.hero2'),
    p2 = document.querySelector('.hero3'),
    p3 = document.querySelector('.hero4'),
    X = document.querySelector('.X'),
    X2 = document.querySelector('.X2'),
    X3 = document.querySelector('.X3'),
    section = document.querySelector('section');

p1.addEventListener('click', appear);
p2.addEventListener('click', appear2);
p3.addEventListener('click', appear3);

function appear() {
    parent.style.display = "block";
    section.style.filter = 'blur(10px)'
}
function appear2() {
    parent2.style.display = "block";
    section.style.filter = 'blur(10px)'
}
function appear3() {
    parent3.style.display = "block";
    section.style.filter = 'blur(10px)'
}

X.addEventListener('click', disappearX);
X2.addEventListener('click', disappearX2);
X3.addEventListener('click', disappearX3);

function disappearX() {
    parent.style.display = 'none';
    section.style.filter = 'blur(0px)'
}
function disappearX2() {
    parent2.style.display = 'none';
    section.style.filter = 'blur(0px)'
}
function disappearX3() {
    parent3.style.display = 'none';
    section.style.filter = 'blur(0px)'
}

parent.addEventListener('click', disappearParent);
parent2.addEventListener('click', disappearParent2);
parent3.addEventListener('click', disappearParent3);

function disappearParent(e) {
    if (e.target.className == 'modal-parent') {
    parent.style.display = 'none';
    section.style.filter = 'blur(0px)'
    }
}
function disappearParent2(e) {
    if (e.target.className == 'modal-parent-2') {
    parent2.style.display = 'none';
    section.style.filter = 'blur(0px)'
    }
}
function disappearParent3(e) {
    if (e.target.className == 'modal-parent-3') {
    parent3.style.display = 'none';
    section.style.filter = 'blur(0px)'
    }
}