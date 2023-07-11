<?php
// Template Name: Footer Template
// Template Post Type: post, page

?>

<div class="footer-content">
    <?php
    if (have_posts()) :
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
    endif;
    ?>
</div>