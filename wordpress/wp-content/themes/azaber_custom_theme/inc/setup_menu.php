<?php

function azaber_setup_menu()
{
    $locations = array(
        "main" => "Main nav menu"
    );

    register_nav_menus($locations);
}
