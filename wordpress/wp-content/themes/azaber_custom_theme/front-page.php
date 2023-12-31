<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>SEO Master - SEO Agency Website Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <?php wp_head(); ?>
</head>

<body>
    <?php
    get_header();
    ?>
    <div class="container-xxl bg-white p-0">



        <?php
        get_template_part('template-parts/full-screen-search');
        get_template_part('template-parts/spinner');

        ?>
        <div class="container-xxl position-relative p-0">
            <?php
            if (have_posts()) {
                while (have_posts()) {
                    the_post();
                    the_content();
                }
            }
            ?>
        </div>

        <!-- Back to Top -->
        <?php
        get_template_part('template-parts/back-to-top');
        ?>

        <?php
        get_footer("footer.php");
        wp_footer();
        ?>

    </div>
</body>

</html>