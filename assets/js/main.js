// =====nav show====
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('.main-nav').toggleClass('show');
    }); 
});


// =====sticky nav=====

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("main-head-2");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// ======button active====



$('.male').click(function(){
    $('.male').addClass('active-btn');
    $('.female').removeClass('active-btn');
    $('.male-body').addClass('human-body');
    $('.female-body').removeClass('human-body');
})
$('.female').click(function(){
    $('.female').addClass('active-btn');
    $('.male').removeClass('active-btn');
    $('.female-body').addClass('human-body');
    $('.male-body').removeClass('human-body');
})



// =====go to top====
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}