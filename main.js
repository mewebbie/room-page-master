
function bgChange(ele, index) {
    index+=1;
    if(ele.classList.contains('active')) {
        var navWrap = document.getElementsByClassName('nav-wrapper')[0];
        if(index == 2) navWrap.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
        if(index == 3) navWrap.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
        if(index == 1) navWrap.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
    }
}

function bgChangeMobile(ele,index) {
    index+=1;
    if(ele.classList.contains('active')) {
        var navWrap = document.getElementsByClassName('nav-wrapper')[0];
        if(index == 2) navWrap.style.backgroundImage = "url('images/mobile-image-hero-2.jpg')";
        if(index == 3) navWrap.style.backgroundImage = "url('images/mobile-image-hero-3.jpg')";
        if(index == 1) navWrap.style.backgroundImage = "url('images/mobile-image-hero-1.jpg')";
    }
}
const nextSlide = function(p) {
    var current = document.body.querySelector('.active');
    current.classList.remove('active'); 
    var nxtToCurrent = current.nextElementSibling;
    if(!nxtToCurrent.classList.contains('slide_ele')) document.querySelector('.slide_ele').classList.add('active');
    else nxtToCurrent.classList.add('active');    
    var susList = Array.from(document.body.querySelectorAll('.slide_ele'));
    if(p == 0 ) susList.forEach(bgChange);
    else susList.forEach(bgChangeMobile);
}

const prevSlide = function(p) {
    var current = document.body.querySelector('.active');
    if(document.body.getElementsByClassName('slide_ele')[0].classList.contains('active')) {
        document.body.getElementsByClassName('slide_ele')[2].classList.add('active');
        current.classList.remove('active'); 
    }
    else {
        current.classList.remove('active'); 
        var prevToCurrent = current.previousElementSibling;
        if(prevToCurrent.classList.contains('slide_ele')) prevToCurrent.classList.add('active');
    }
    var susList = Array.from(document.body.querySelectorAll('.slide_ele'));
    if(p === 0 ) susList.forEach(bgChange);
    else susList.forEach(bgChangeMobile);
}


