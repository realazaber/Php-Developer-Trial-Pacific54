<?php

include(get_template_directory() . "/inc/register_styles.php");
include(get_template_directory() . "/inc/register_scripts.php");



add_action('wp_enqueue_scripts', 'azaber_register_styles');
add_action('wp_enqueue_scripts', 'azaber_register_scripts');
