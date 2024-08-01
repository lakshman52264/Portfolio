AOS.init();
document.addEventListener('DOMContentLoaded', function() {
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {
   
    header.style.top = '-60px'; 
} else {
    
    header.style.top = '0';
}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});
});

document.addEventListener('DOMContentLoaded', function() {
let lastScrollTop = 0;
const header = document.getElementById('header');
const backToTopBtn = document.getElementById('backToTopBtn');
const headerHeight = header.offsetHeight; 

window.addEventListener('scroll', function() {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;


if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
    header.style.transform = `translateY(-${headerHeight}px)`; 
} else {
    header.style.transform = 'translateY(0)'; 
}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 


if (scrollTop > 300) { 
    backToTopBtn.classList.add('show');
} else {
    backToTopBtn.classList.remove('show');
}
});


backToTopBtn.addEventListener('click', function(e) {
e.preventDefault();
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
});