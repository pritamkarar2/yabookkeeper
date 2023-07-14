let scrollToTopButton = document.getElementById("myBtn");

var header = document.getElementById("header");
var sticky = header.offsetTop;

function onScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backtoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function() {
  
  $(".banner").css({'background-position-y' : ($(window).scrollTop()/20)+'%'});
  
  $(window).scroll(function() {
    onScroll();
    $(".banner").css({'background-position-y' : ($(window).scrollTop()/20)+'%'});    
  });
  
});