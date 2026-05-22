<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Transformamos sua força de vendas B2B com estratégia, previsibilidade e relacionamento de alto valor. +30 anos de experiência somados em vendas complexas." />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="inner">
        <a href="<?php echo esc_url( home_url( '/#top' ) ); ?>" aria-label="Gi.Ga Inteligência Comercial">
            <img src="<?php echo esc_url( giga_asset( 'giga-logo.png' ) ); ?>" alt="Gi.Ga Inteligência Comercial" />
        </a>
        <nav class="site-nav">
            <a href="#desafios">Desafios</a>
            <a href="#por-que">Por que a Gi.Ga</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#solucoes">Soluções</a>
            <a href="#quem-somos">Quem Somos</a>
        </nav>
        <a href="#contato" class="btn btn-primary" style="padding:10px 18px;">Agendar Reunião</a>
    </div>
</header>
