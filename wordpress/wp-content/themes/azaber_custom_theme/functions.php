<?php

function azaber_register_styles()
{
    // Main Style
    wp_enqueue_style('azaber-main-style', get_template_directory_uri() . "/css/style.css", array(), '1.0', 'all');

    // Bootstrap
    wp_enqueue_style('azaber-bootstrap', get_template_directory_uri() . "/css/bootstrap.min.css", array(), '1.0', 'all');

    // Google Fonts
    wp_enqueue_style('azaber-google-fonts', 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Roboto:wght@400;500;700&display=swap', array(), '1.0', 'all');

    // Font Awesome
    wp_enqueue_style('azaber-font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css', array(), '5.10.0', 'all');

    // Bootstrap Icons
    wp_enqueue_style('azaber-bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css', array(), '1.4.1', 'all');

    // Animate.css
    wp_enqueue_style('azaber-animate', get_template_directory_uri() . "/lib/animate/animate.min.css", array(), '1.0', 'all');

    // Owl Carousel
    wp_enqueue_style('azaber-owl-carousel', get_template_directory_uri() . "/lib/owlcarousel/assets/owl.carousel.min.css", array(), '1.0', 'all');

    // Lightbox
    wp_enqueue_style('azaber-lightbox', get_template_directory_uri() . "/lib/lightbox/css/lightbox.min.css", array(), '1.0', 'all');
}

function azaber_register_scripts()
{
    // jQuery
    wp_enqueue_script('azaber-jquery', 'https://code.jquery.com/jquery-3.4.1.min.js', array(), '3.4.1', true);

    // Bootstrap Bundle
    wp_enqueue_script('azaber-bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', array('azaber-jquery'), '5.0.0', true);

    // Wow.js
    wp_enqueue_script('azaber-wow', get_template_directory_uri() . '/lib/wow/wow.min.js', array('azaber-jquery'), '1.0', true);

    // Easing
    wp_enqueue_script('azaber-easing', get_template_directory_uri() . '/lib/easing/easing.min.js', array('azaber-jquery'), '1.0', true);

    // Waypoints
    wp_enqueue_script('azaber-waypoints', get_template_directory_uri() . '/lib/waypoints/waypoints.min.js', array('azaber-jquery'), '1.0', true);

    // Owl Carousel
    wp_enqueue_script('azaber-owl-carousel', get_template_directory_uri() . '/lib/owlcarousel/owl.carousel.min.js', array('azaber-jquery'), '1.0', true);

    // Isotope
    wp_enqueue_script('azaber-isotope', get_template_directory_uri() . '/lib/isotope/isotope.pkgd.min.js', array('azaber-jquery'), '1.0', true);

    // Lightbox
    wp_enqueue_script('azaber-lightbox', get_template_directory_uri() . '/lib/lightbox/js/lightbox.min.js', array('azaber-jquery'), '1.0', true);

    // Main JS
    wp_enqueue_script('azaber-main-js', get_template_directory_uri() . '/js/main.js', array('azaber-jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'azaber_register_styles');
add_action('wp_enqueue_scripts', 'azaber_register_scripts');
