function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    //Check if in mobile or desktop
    if (window.innerWidth <= 799) 
    {  
        if (menu.style.display === "block") //If block exist, close it
        {
            menu.style.display = "none";
        } else {
            menu.style.display = "block"; //If not display block
        }
    }
}

document.addEventListener('DOMContentLoaded', showSlides);

// Scroll to Top Functionality
var mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[currentSlide].style.display = 'block';
            slides[(currentSlide + 1) % slides.length].style.display = 'block';
        }

        function changeSlide(n) {
            currentSlide = (currentSlide + n + slides.length) % slides.length;
            showSlides();
        }

        document.addEventListener('DOMContentLoaded', showSlides);