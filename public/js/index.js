
const header = document.querySelector('header');
const logo = document.querySelector('.logo img');


function handleScroll() {
   
    if (window.scrollY > 0) {
        header.classList.add('scrolled');       
        logo.style.maxHeight = '90px'; 
    } else {
        header.classList.remove('scrolled');
        logo.style.maxHeight = '130px'; 
    }
}


window.addEventListener('scroll', handleScroll);
