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
}

add_action('enqueue_block_editor_assets', 'azaber_custom_block_scripts_register');