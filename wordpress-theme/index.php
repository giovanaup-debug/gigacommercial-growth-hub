<?php
/**
 * Fallback genérico — o conteúdo principal está em front-page.php
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>
<main class="container section">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <article style="margin-bottom:48px;">
                <h1><?php the_title(); ?></h1>
                <div class="muted" style="margin-top:16px;line-height:1.7;">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <h1>Nada por aqui ainda.</h1>
        <p class="muted" style="margin-top:12px;">Volte para a <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color:var(--primary);">página inicial</a>.</p>
    <?php endif; ?>
</main>
<?php get_footer(); ?>
