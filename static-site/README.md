# Gi.Ga — Landing Page (Static Site)

Site estático em HTML, CSS e JavaScript puros — pronto para deploy no Render como **Static Site**.

## Estrutura

```
static-site/
├── index.html        # Página principal
├── css/
│   └── styles.css    # Estilos
├── js/
│   └── main.js       # Animações + formulário (WhatsApp)
└── images/           # Logo e fotos
```

## Rodar localmente

Basta abrir `index.html` no navegador, ou usar um servidor estático:

```bash
npx serve static-site
# ou
python3 -m http.server -d static-site 8080
```

## Deploy no Render (Static Site)

1. Suba o conteúdo desta pasta para um repositório no GitHub.
2. No Render: **New → Static Site** → conecte o repositório.
3. Configurações:
   - **Build Command:** (vazio)
   - **Publish Directory:** `.` (ou `static-site` se subir o projeto inteiro)
4. **Create Static Site**.

## Formulário

O formulário valida os campos e abre o WhatsApp (`+55 51 98243-2615`) com a mensagem preenchida. Não requer backend.

Para alterar o número, edite `js/main.js` na linha do `wa.me/`.
