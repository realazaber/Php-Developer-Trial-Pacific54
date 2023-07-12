<?php

include(get_template_directory() . "/inc/register_styles.php");
include(get_template_directory() . "/inc/register_scripts.php");

include(get_template_directory() . "/inc/setup_menu.php");



add_action('wp_enqueue_scripts', 'azaber_register_styles');
add_action('wp_enqueue_scripts', 'azaber_register_scripts');
add_action('init', 'azaber_setup_menu');
