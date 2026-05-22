Tema WordPress — Gi.Ga Inteligência Comercial
==============================================

Estrutura dos arquivos (copie tudo para wp-content/themes/giga/):

  giga/
  ├── style.css         → cabeçalho do tema + CSS completo (tokens, layout, componentes)
  ├── functions.php     → enqueue de assets, suporte a menus, helper giga_asset(), handler do form de contato
  ├── header.php        → <head>, header fixo, menu
  ├── footer.php        → rodapé + script de reveal-on-scroll
  ├── front-page.php    → página inicial one-page (Hero, Problem, WhyUs, Methodology, Solutions, HowWeWork, About, Contact)
  ├── index.php         → fallback para outras páginas/posts
  └── assets/           → coloque aqui as imagens (mesmos nomes do projeto original):
        ├── giga-logo.png
        ├── giga-team.jpg
        ├── giovana.jpg
        └── gabriela.jpg

Instalação
----------
1. Crie a pasta wp-content/themes/giga/ no seu WordPress.
2. Copie todos os arquivos desta pasta para lá.
3. Coloque as imagens em wp-content/themes/giga/assets/.
4. No admin do WordPress: Aparência → Temas → Ativar "Gi.Ga Inteligência Comercial".
5. Em Configurações → Leitura, defina "Sua página inicial exibe" → "Uma página estática".
   (Pode criar uma página em branco chamada "Início" e selecioná-la — o tema usa front-page.php automaticamente.)

Formulário de contato
---------------------
- Por padrão, usa wp_mail() do WordPress. Ajuste o e-mail destino em functions.php (variável $to) se quiser.
- Para envios confiáveis, instale o plugin "WP Mail SMTP" e configure SMTP.

Observações
-----------
- O CSS é vanilla, sem dependência de Tailwind ou build. Os tokens estão no topo de style.css — ajuste as cores ali.
- Os ícones foram substituídos por símbolos simples (●, ★, ◆, ✓). Se quiser SVGs reais (Lucide), basta trocar nos templates.
- Animações de "reveal" rodam via IntersectionObserver no footer.php.
