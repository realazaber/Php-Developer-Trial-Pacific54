<?php
/*
Plugin Name: Azaber Custom Blocks
*/

function azaber_custom_block_scripts_register()
{
    wp_enqueue_script(
        'service-block',
        plugin_dir_url(__FILE__) . 'service.js',
        array('wp-blocks', 'wp-editor'),
        true
    );
    wp_enqueue_script(
        'portfolio-block',
        plugin_dir_url(__FILE__) . 'portfolio-item.js',
        array('wp-blocks', 'wp-editor'),
        true
    );
    wp_enqueue_script(
        'testimonial-block',
        plugin_dir_url(__FILE__) . 'testimonial.js',
        array('wp-blocks', 'wp-editor'),
        true
    );
    wp_enqueue_script(
        'team-member-block',
        plugin_dir_url(__FILE__) . 'team-member.js',
        array('wp-blocks', 'wp-editor'),
        true
    );
}

add_action('enqueue_block_editor_assets', 'azaber_custom_block_scripts_register');
