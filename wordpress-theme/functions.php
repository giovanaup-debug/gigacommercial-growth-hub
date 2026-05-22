<?php
/**
 * Gi.Ga Inteligência Comercial — funções do tema
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

function giga_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    register_nav_menus( array(
        'primary' => __( 'Menu principal', 'giga' ),
    ) );
}
add_action( 'after_setup_theme', 'giga_setup' );

function giga_assets() {
    wp_enqueue_style( 'giga-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', array(), null );
    wp_enqueue_style( 'giga-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'giga_assets' );

/**
 * Helper: caminho para uma imagem dentro de /assets/ do tema.
 * Coloque os arquivos em: wp-content/themes/giga/assets/
 *  - giga-logo.png
 *  - giga-team.jpg
 *  - giovana.jpg
 *  - gabriela.jpg
 */
function giga_asset( $file ) {
    return get_template_directory_uri() . '/assets/' . ltrim( $file, '/' );
}

/**
 * Endpoint para o formulário de contato.
 * Por padrão abre o cliente de e-mail (mailto). Se quiser enviar via WordPress,
 * descomente o bloco wp_mail abaixo e troque o action do <form> para admin-post.php.
 */
function giga_handle_contact() {
    if ( empty( $_POST['giga_nonce'] ) || ! wp_verify_nonce( $_POST['giga_nonce'], 'giga_contact' ) ) {
        wp_safe_redirect( home_url( '/?contato=erro' ) );
        exit;
    }
    $name    = sanitize_text_field( $_POST['name'] ?? '' );
    $email   = sanitize_email( $_POST['email'] ?? '' );
    $company = sanitize_text_field( $_POST['company'] ?? '' );
    $msg     = sanitize_textarea_field( $_POST['message'] ?? '' );

    $to      = 'contato@gigacomercial.com';
    $subject = 'Agendar Reunião — site Gi.Ga';
    $body    = "Nome: {$name}\nEmpresa: {$company}\nE-mail: {$email}\n\n{$msg}";
    $headers = array( 'Reply-To: ' . $email );

    wp_mail( $to, $subject, $body, $headers );
    wp_safe_redirect( home_url( '/?contato=ok#contato' ) );
    exit;
}
add_action( 'admin_post_nopriv_giga_contact', 'giga_handle_contact' );
add_action( 'admin_post_giga_contact', 'giga_handle_contact' );
