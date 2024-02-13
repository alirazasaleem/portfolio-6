$(document).ready(function() {
  $('header,section,.header-content').css('min-height', ($(window).height()));
  $('.about-img').css('min-height', ($(window).height() - 100));
  $('section').css({
    'padding-top': '100px',
    'padding-bottom': '100px'
  });

  $('.img-gallery>div').click(function(event) {
    var background_image_src = $(this).css('background-image');
    background_image_src = background_image_src.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    $('#preview-img>img').css('src', background_image_src);
    $('#preview-img').slideDown('slow');
  });

  $('.nav.navbar-nav a,.side-menu-bar a').animateScroll({
    speed:1000
  });

});
