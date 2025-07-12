// script.js

jQuery(document).ready(function($) { // Use jQuery safely with $ alias

    /* --- Smooth Scrolling for Navigation Links --- */
    $('a.nav-link[href^="#"], .cta-button[href^="#"]').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var target = $(this.hash); // Get the target section ID from the hash
        if (target.length) { // Check if the target section exists
            $('html, body').animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight() // Adjust for fixed navbar height
            }, 800); // Scroll duration in milliseconds
        }
    });

    /* --- Active Navigation Link on Scroll --- */
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        var navbarHeight = $('.navbar').outerHeight();

        $('section').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('id'));

            // Check if section is in viewport, considering navbar height
            if (currLink.offset().top - navbarHeight <= scrollPos &&
                currLink.offset().top + currLink.outerHeight() - navbarHeight > scrollPos) {
                
                // Remove active class from all links
                $('.navbar-nav .nav-link').removeClass('active');
                
                // Add active class to the corresponding nav link
                $('.navbar-nav').find('a[href="#' + currLink.attr('id') + '"]').addClass('active');
            } else {
                // If section is not in view, remove active class
                $('.navbar-nav').find('a[href="#' + currLink.attr('id') + '"]').removeClass('active');
            }
        });
    }).scroll(); // Trigger scroll event on load to set initial active state

    /* --- Logo Click Functionality (Go to Home Section) --- */
    // Main header logo
    $('.logo-link').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#inicio').offset().top - $('.navbar').outerHeight() // Scroll to the 'inicio' section
        }, 800);
    });

    // Navbar brand logo
    $('.navbar-brand').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#inicio').offset().top - $('.navbar').outerHeight() // Scroll to the 'inicio' section
        }, 800);
    });

    // Important Note: If "vetabiz.com" implies an *external* website URL
    // rather than the home section of the current page, you would change
    // the `href` attribute in your `index.html` directly to `https://www.vetabiz.com`
    // for both the .logo-link and .navbar-brand, and remove these JS click handlers
    // for them. Given typical single-page site structures, linking to the #inicio
    // section is more common for internal logo clicks.

    /* --- Scroll-to-Top Button (Dynamic) --- */
    // Append the button to the body
    $('body').append('<button id="scrollToTopBtn" title="Ir arriba"><i class="fas fa-arrow-up"></i></button>');

    var scrollTopButton = $('#scrollToTopBtn');

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) { // Show button after scrolling 300px
            scrollTopButton.fadeIn();
        } else {
            scrollTopButton.fadeOut();
        }
    });

    scrollTopButton.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800); // Smooth scroll to top
        return false;
    });

    /* --- Dynamic Footer Year --- */
    // This was already in your index.html, but it's better placed here
    document.getElementById('currentYear').textContent = new Date().getFullYear();

});