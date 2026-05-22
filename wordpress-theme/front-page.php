<?php
/**
 * Página inicial — one-page institucional da Gi.Ga
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<main id="top">

    <!-- HERO -->
    <section class="hero">
        <div class="bg-grid-soft"></div>
        <div class="blob"></div>
        <div class="container hero-grid">
            <div>
                <span class="tag reveal"><span class="dot"></span> Inteligência Comercial · B2B</span>
                <h1 class="reveal" style="margin-top:24px;">
                    Conectando <span class="text-accent-grad">estratégia</span>, operação e
                    <span class="text-accent-grad">crescimento</span>.
                </h1>
                <p class="reveal muted" style="margin-top:24px;max-width:640px;font-size:18px;">
                    A Gi.Ga | Inteligência Comercial transforma sua força de vendas através de estratégia inteligente,
                    previsibilidade e relacionamento de alto valor. Mais de 30 anos de experiência somados em vendas consultivas.
                </p>
                <div class="reveal" style="margin-top:40px;display:flex;flex-wrap:wrap;gap:12px;">
                    <a href="#contato" class="btn btn-primary">Agendar Reunião →</a>
                    <a href="#solucoes" class="btn btn-outline">Conheça nossas soluções</a>
                </div>
                <div class="hero-stats reveal">
                    <div class="stat"><div class="k">+30</div><div class="v">Anos de experiência somados</div></div>
                    <div class="stat"><div class="k">B2B</div><div class="v">Vendas consultivas</div></div>
                    <div class="stat"><div class="k">Médio porte</div><div class="v">Atendimento especializado</div></div>
                </div>
            </div>
            <div class="reveal" style="display:flex;justify-content:center;">
                <img src="<?php echo esc_url( giga_asset( 'giga-logo.png' ) ); ?>" alt="Gi.Ga" style="width:66%;max-width:420px;" />
            </div>
        </div>
    </section>

    <!-- PROBLEM -->
    <section id="desafios" class="section bg-secondary-40" style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
        <div class="container">
            <div class="reveal" style="max-width:640px;">
                <span class="eyebrow">Cenário atual</span>
                <h2 style="margin-top:12px;">Desafios do <span class="text-accent-grad">mercado</span></h2>
                <p class="muted" style="margin-top:20px;">
                    Vendas B2B exigem método. Os principais gargalos que identificamos nas operações comerciais são:
                </p>
            </div>

            <div class="grid-3" style="margin-top:56px;">
                <?php
                $challenges = array(
                    'Escassez de talentos qualificados',
                    'Falta de previsibilidade na receita',
                    'Processos comerciais inexistentes',
                    'Baixa conversão e prospecção ineficiente',
                    'Ausência de dados para tomada de decisão',
                    'Gestão de CRM negligenciada',
                );
                foreach ( $challenges as $c ) : ?>
                    <div class="card reveal" style="display:flex;gap:16px;align-items:flex-start;">
                        <div class="icon-box">●</div>
                        <p style="font-weight:500;line-height:1.35;padding-top:6px;"><?php echo esc_html( $c ); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="grid-2" style="margin-top:48px;">
                <div class="highlight reveal">
                    <div class="big text-accent-grad">76%</div>
                    <p class="white-70" style="margin-top:16px;">das empresas têm dificuldade em contratar vendedores de alta performance.</p>
                    <p class="source">Fonte: Manpower Group</p>
                </div>
                <div class="highlight reveal">
                    <div class="big text-accent-grad">&lt;35%</div>
                    <p class="white-70" style="margin-top:16px;">do tempo é gasto vendendo de fato. O resto é burocracia e falha processual.</p>
                    <p class="source">Fonte: Gartner</p>
                </div>
            </div>
        </div>
    </section>

    <!-- WHY US -->
    <section id="por-que" class="section">
        <div class="container">
            <div class="reveal" style="max-width:640px;">
                <span class="eyebrow">Diferenciais</span>
                <h2 style="margin-top:12px;">Por que a <span class="text-accent-grad">Gi.Ga</span></h2>
            </div>
            <div class="grid-3" style="margin-top:56px;">
                <?php
                $why = array(
                    array( 'Eficiência Operacional', 'Redução imediata de custos fixos e otimização de recursos através de uma estrutura enxuta.' ),
                    array( 'Expertise de Alta Performance', 'Acesso imediato a especialistas com histórico comprovado em vendas complexas e negociações.' ),
                    array( 'Escalabilidade Acelerada', 'Implementação de processos replicáveis que permitem aumentar o volume sem perder qualidade.' ),
                    array( 'Inteligência de Dados', 'Transformação de informações em oportunidades, identificando nichos lucrativos e assertivos.' ),
                    array( 'Foco no Core Business', 'Sua empresa foca na excelência da entrega enquanto nós garantimos a tração comercial.' ),
                    array( 'Processos Previsíveis', 'Saia da dependência da sorte. Tenha controle total sobre seu funil de vendas e metas.' ),
                );
                foreach ( $why as $w ) : ?>
                    <div class="card reveal">
                        <div class="icon-box solid">★</div>
                        <h3 style="margin-top:20px;"><?php echo esc_html( $w[0] ); ?></h3>
                        <p class="muted" style="margin-top:8px;font-size:14px;line-height:1.6;"><?php echo esc_html( $w[1] ); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- METHODOLOGY -->
    <section id="metodologia" class="section section-dark">
        <div class="bg-grid-soft" style="position:absolute;inset:0;opacity:.1;"></div>
        <div class="container" style="position:relative;">
            <div class="reveal" style="max-width:640px;">
                <span class="eyebrow eyebrow-light">Como pensamos</span>
                <h2 style="margin-top:12px;color:#fff;">Nossa <span class="text-accent-grad">metodologia</span></h2>
                <p class="white-70" style="margin-top:20px;">Um framework integrado que conecta planejamento, execução e dados em um único motor de crescimento.</p>
            </div>
            <div class="grid-3" style="margin-top:56px;">
                <?php
                $steps = array(
                    array( '01', 'Estratégia Comercial', 'Planejamento comercial e inteligência de mercado para gerar crescimento sustentável.' ),
                    array( '02', 'Desenvolvimento de Negócios', 'Transformação da estratégia em ação prática, prospecção ativa e ganho de tração.' ),
                    array( '03', 'Inteligência de Dados e Otimização', 'Monitoramento de dados e KPIs para garantir previsibilidade e evolução contínua.' ),
                );
                foreach ( $steps as $s ) : ?>
                    <div class="card-dark reveal">
                        <div style="font-family:monospace;color:var(--teal-soft);font-size:14px;"><?php echo esc_html( $s[0] ); ?></div>
                        <h3 style="margin-top:12px;color:#fff;font-size:20px;"><?php echo esc_html( $s[1] ); ?></h3>
                        <p class="white-70" style="margin-top:12px;font-size:14px;line-height:1.6;"><?php echo esc_html( $s[2] ); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- SOLUTIONS -->
    <section id="solucoes" class="section">
        <div class="container">
            <div class="reveal" style="display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between;align-items:flex-end;">
                <div style="max-width:640px;">
                    <span class="eyebrow">Soluções</span>
                    <h2 style="margin-top:12px;">Nossas <span class="text-accent-grad">soluções</span></h2>
                </div>
                <p class="muted" style="max-width:340px;font-size:14px;">
                    Atuação integrada da estratégia à execução dedicados ao seu crescimento.
                </p>
            </div>

            <div style="margin-top:56px;display:grid;gap:20px;">
                <?php
                $solutions = array(
                    array(
                        'tag'    => '01',
                        'title'  => 'Estratégia Comercial',
                        'desc'   => 'Estruturação de processos, planejamento de metas. Inteligência de mercado com identificação de novos nichos e/ou regiões e perfis de clientes com maior potencial de retorno (ICP).',
                        'badge'  => 'Planejamento e previsibilidade estratégica',
                        'items'  => array( 'Definição de ICP', 'Playbook comercial', 'Planejamento de metas' ),
                    ),
                    array(
                        'tag'    => '02',
                        'title'  => 'Desenvolvimento de Negócios',
                        'desc'   => 'Prospecção ativa de alto nível (Outbound), qualificação e condução de negociações complexas para abertura de contas estratégicas. Criação e padronização de scripts de cada etapa.',
                        'badge'  => 'Metodologia replicável · Ganho de tração',
                        'items'  => array( 'Outbound com método', 'Qualificação consultiva', 'Negociação executiva' ),
                    ),
                    array(
                        'tag'    => '03',
                        'title'  => 'Inteligência de Dados e Otimização',
                        'desc'   => 'Monitoramento contínuo de KPIs e saúde do funil, gestão de CRM e otimização de resultados baseada em indicadores reais de faturamento.',
                        'badge'  => 'ROI e escala comercial',
                        'items'  => array( 'KPIs e dashboards', 'Gestão de CRM', 'Otimização contínua' ),
                    ),
                );
                foreach ( $solutions as $s ) : ?>
                    <article class="solution reveal">
                        <div>
                            <div style="font-family:monospace;color:var(--primary);font-size:12px;letter-spacing:.2em;"><?php echo esc_html( $s['tag'] ); ?></div>
                            <h3 style="font-size:24px;margin-top:12px;line-height:1.2;"><?php echo esc_html( $s['title'] ); ?></h3>
                        </div>
                        <div class="muted" style="line-height:1.7;">
                            <?php echo esc_html( $s['desc'] ); ?>
                            <div><span class="badge">✓ <?php echo esc_html( $s['badge'] ); ?></span></div>
                        </div>
                        <ul class="bullets solution-side">
                            <?php foreach ( $s['items'] as $b ) : ?>
                                <li>✓ <span><?php echo esc_html( $b ); ?></span></li>
                            <?php endforeach; ?>
                        </ul>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- HOW WE WORK -->
    <section class="section bg-secondary-40" style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
        <div class="container">
            <div class="reveal" style="max-width:640px;">
                <span class="eyebrow">Processo</span>
                <h2 style="margin-top:12px;">Como <span class="text-accent-grad">atuamos</span></h2>
                <p class="muted" style="margin-top:20px;">Um ciclo contínuo de melhoria que conecta diagnóstico, execução e dados.</p>
            </div>
            <div class="grid-4" style="margin-top:56px;">
                <?php
                $cycle = array(
                    array( 'Diagnóstico', 'Ciclo de viabilidade e planejamento.' ),
                    array( 'Estruturação', 'Implementação da estratégia e processos.' ),
                    array( 'Execução', 'Desenvolvimento ativo de negócios.' ),
                    array( 'Otimização', 'Monitoramento e resultados.' ),
                );
                foreach ( $cycle as $i => $c ) : ?>
                    <div class="card reveal">
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <div class="icon-box solid">◆</div>
                            <span style="font-family:monospace;color:var(--muted-foreground);font-size:12px;">0<?php echo $i + 1; ?></span>
                        </div>
                        <h3 style="margin-top:20px;font-size:18px;"><?php echo esc_html( $c[0] ); ?></h3>
                        <p class="muted" style="margin-top:8px;font-size:14px;line-height:1.6;"><?php echo esc_html( $c[1] ); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- ABOUT -->
    <section id="quem-somos" class="section">
        <div class="container">
            <div class="about-grid">
                <div class="reveal" style="position:relative;">
                    <img src="<?php echo esc_url( giga_asset( 'giga-team.jpg' ) ); ?>" alt="Giovana Urrutia e Gabriela Amando" style="width:100%;border-radius:24px;border:1px solid var(--border);" />
                </div>
                <div class="reveal">
                    <span class="eyebrow">Quem somos</span>
                    <h2 style="margin-top:12px;"><span class="text-accent-grad">+30 anos</span> de experiência somados em vendas consultivas.</h2>
                    <p class="muted" style="margin-top:24px;line-height:1.7;">
                        Unimos estratégia e execução para construir relacionamentos consultivos e crescimento sustentável.
                        Atuamos lado a lado com fundadores e líderes que precisam transformar venda artesanal em um processo industrial — previsível, mensurável e replicável.
                    </p>
                    <div style="margin-top:32px;display:flex;gap:16px;font-weight:700;">
                        <span>GIOVANA URRUTIA</span><span class="muted">·</span><span>GABRIELA AMANDO</span>
                    </div>
                </div>
            </div>

            <div class="grid-2" style="margin-top:80px;">
                <?php
                $partners = array(
                    array(
                        'name'  => 'Giovana Urrutia',
                        'photo' => 'giovana.jpg',
                        'bullets' => array(
                            '+15 anos consolidando operações de alta performance em tecnologia e serviços.',
                            'Expertise em vendas consultivas e gestão de contas B2B focadas em aumento de receita.',
                            'Especialista em estruturação de processos e execução disciplinada voltada ao fechamento.',
                            'Mestra em Psicologia com foco em comportamento organizacional, otimizando negociações corporativas.',
                        ),
                    ),
                    array(
                        'name'  => 'Gabriela Amando',
                        'photo' => 'gabriela.jpg',
                        'bullets' => array(
                            '+15 anos de experiência com vendas B2B de contas Enterprise.',
                            'Top Performer Global, com histórico sólido na abertura de mercado e grandes contas.',
                            'Especialista em negociações complexas e desenvolvimento estratégico de relacionamento.',
                            'Formada em Administração com MBA em Logística e Supply Chain Management pela FGV.',
                        ),
                    ),
                );
                foreach ( $partners as $p ) : ?>
                    <article class="partner reveal">
                        <div class="partner-head">
                            <img src="<?php echo esc_url( giga_asset( $p['photo'] ) ); ?>" alt="<?php echo esc_attr( $p['name'] ); ?>" />
                            <div>
                                <h3 style="font-size:22px;"><?php echo esc_html( $p['name'] ); ?></h3>
                                <div style="color:var(--primary);font-size:14px;margin-top:4px;">Sócia-fundadora</div>
                            </div>
                        </div>
                        <ul>
                            <?php foreach ( $p['bullets'] as $b ) : ?>
                                <li><?php echo esc_html( $b ); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CONTACT -->
    <section id="contato" class="section contact">
        <div class="bg-grid-soft" style="position:absolute;inset:0;opacity:.1;"></div>
        <div class="blob"></div>
        <div class="container contact-grid">
            <div class="reveal contact-info">
                <span class="eyebrow eyebrow-light">Vamos conversar</span>
                <h2 style="margin-top:12px;color:#fff;">Vamos construir juntos o futuro do seu <span class="text-accent-grad">negócio</span>?</h2>
                <p style="margin-top:16px;color:#fff;">Entre em contato e vamos impulsionar as vendas da sua operação.</p>
                <div style="margin-top:32px;font-size:14px;">
                    <a href="mailto:contato@gigacomercial.com">✉ contato@gigacomercial.com</a>
                    <a href="https://wa.me/5551982432615" target="_blank" rel="noreferrer">☎ +55 51 98243-2615</a>
                </div>
                <?php if ( isset( $_GET['contato'] ) && $_GET['contato'] === 'ok' ) : ?>
                    <p style="margin-top:24px;color:var(--teal-soft);">Mensagem enviada — entraremos em contato em breve.</p>
                <?php endif; ?>
            </div>

            <form class="form reveal" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
                <input type="hidden" name="action" value="giga_contact" />
                <?php wp_nonce_field( 'giga_contact', 'giga_nonce' ); ?>

                <div>
                    <label>Nome</label>
                    <input type="text" name="name" placeholder="Seu nome" required minlength="2" maxlength="100" />
                </div>
                <div>
                    <label>Empresa</label>
                    <input type="text" name="company" placeholder="Nome da empresa" required minlength="2" maxlength="120" />
                </div>
                <div class="full">
                    <label>E-mail corporativo</label>
                    <input type="email" name="email" placeholder="voce@empresa.com" required maxlength="255" />
                </div>
                <div class="full">
                    <label>Como podemos ajudar?</label>
                    <textarea name="message" rows="4" placeholder="Conte sobre seu cenário comercial atual..." required minlength="10" maxlength="1000"></textarea>
                </div>
                <div class="full" style="display:flex;justify-content:flex-end;">
                    <button type="submit" class="btn btn-teal">Enviar mensagem →</button>
                </div>
            </form>
        </div>
    </section>

</main>

<?php get_footer(); ?>
