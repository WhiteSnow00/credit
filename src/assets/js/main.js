import jQuery from 'jquery';
jQuery(document).ready(function() {

  jQuery('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == '#blog') return;
    if (jQuery('.panel-cover').hasClass('panel-cover--collapsed')) return;
    jQuery('.main-post-list').removeClass('hidden');
    var currentWidth = jQuery('.panel-cover').width();
    if (currentWidth < 960) {
      jQuery('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      jQuery('.panel-cover').css('max-width', currentWidth);
      var swing = 'swing';
      jQuery('.panel-cover').animate({ 'max-width': '700px', 'width': '30%' }, 400, swing, function() {});
    }
  });

  if (window.location.hash && window.location.hash == '#blog') {
    jQuery('.panel-cover').addClass('panel-cover--collapsed');
    jQuery('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == '/tag/') {
    jQuery('.panel-cover').addClass('panel-cover--collapsed');
  }

  jQuery('.btn-mobile-menu__icon').click(function() {
    if (jQuery('.navigation-wrapper').css('display') == 'block') {
      jQuery('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        jQuery('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        jQuery('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });
      jQuery('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

    } else {
      jQuery('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    jQuery('.btn-mobile-menu__icon').toggleClass('fa fa-bars fa fa-chevron-circle-up animated fadeIn');
  });

  jQuery('.navigation-wrapper .blog-button').click(function() {
    if (jQuery('.navigation-wrapper').css('display') == 'block') {
      jQuery('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        jQuery('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        jQuery('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });

      jQuery('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }

    jQuery('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });
});
