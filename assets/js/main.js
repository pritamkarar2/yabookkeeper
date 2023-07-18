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

function backtoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function () {
  if ($('section:nth-of-type(2)').isInViewport()) $('section:nth-of-type(2)').animate({ 'opacity': '1' }, 500);

  $(".banner").css({ 'background-position-y': ($(window).scrollTop() / 20) + '%' });

  $(window).on("resize scroll", function () {
    onScroll();

    $(".banner").css({ 'background-position-y': ($(window).scrollTop() / 10) + '%' });

    $('main > section').each(function () {      
      if ($(this).isInViewport()) $(this).animate({ 'opacity': '1' }, 1000);
    });
  });

});