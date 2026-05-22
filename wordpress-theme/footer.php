<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>

<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div style="max-width:320px;">
                <img src="<?php echo esc_url( giga_asset( 'giga-logo.png' ) ); ?>" alt="Gi.Ga Inteligência Comercial" style="height:48px;" />
                <p class="muted" style="margin-top:16px;font-size:14px;">Conectando estratégia, operação e crescimento para empresas B2B.</p>
            </div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:40px;font-size:14px;">
                <div>
                    <h4>Navegar</h4>
                    <ul>
                        <li><a href="#desafios">Desafios</a></li>
                        <li><a href="#por-que">Por que a Gi.Ga</a></li>
                        <li><a href="#metodologia">Metodologia</a></li>
                        <li><a href="#solucoes">Soluções</a></li>
                        <li><a href="#quem-somos">Quem Somos</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="mailto:contato@gigainteligencia.com">✉ contato@gigainteligencia.com</a></li>
                        <li><a href="https://wa.me/5551982432615" target="_blank" rel="noreferrer">☎ +55 51 98243-2615</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copy">
            <span>© <?php echo esc_html( date( 'Y' ) ); ?> Gi.Ga Inteligência Comercial. Todos os direitos reservados.</span>
            <span>Conectando estratégia, operação e crescimento.</span>
        </div>
    </div>
</footer>

<script>
    // Reveal on scroll
    (function () {
        var els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            els.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        els.forEach(function (el) { io.observe(el); });
    })();
</script>

<?php wp_footer(); ?>
</body>
</html>
