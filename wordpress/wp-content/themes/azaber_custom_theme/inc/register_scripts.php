<?php

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
