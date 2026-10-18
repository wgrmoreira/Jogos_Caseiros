# Jogos Caseiros

1. Extraia o ZIP e envie **o conteúdo desta pasta** para a raiz do repositório no GitHub (incluindo `index.html`, `assets` e `.nojekyll`).
2. Em **Settings → Pages**, selecione **Deploy from a branch**, a branch utilizada e a pasta **/ (root)**. Salve.
3. Aguarde a publicação e abra o endereço informado pelo GitHub Pages.

Não precisa instalar dependências ou compilar. Para uma conferência rápida, abra `index.html` no navegador. Instalação do app, área de transferência e cache offline funcionam melhor com HTTPS, como no GitHub Pages.

## O que está incluído

- Doze jogos com os mesmos endereços do portal original, abrindo em outra aba.
- Capas SVG originais, editáveis e locais, sem fontes ou bibliotecas externas.
- Filtros por categoria, busca sem distinção de acentos, ordenação e estado sem resultados.
- Tela de apoio, cópia de PIX, alternativa de cópia manual e instruções de instalação para iPhone.
- Manifest e service worker: catálogo disponível offline depois da primeira visita online; jogos externos e QR Code exigem internet. A instalação depende do suporte do navegador.
- `original.html`: HTML recebido, preservado como referência.

## Preservação do QR Code

O ZIP original não contém um arquivo de QR Code: a imagem é carregada de `api.qrserver.com`. A nova versão preserva literalmente a mesma expressão que monta a URL e o mesmo conteúdo PIX, em `pix.js`. Não houve recriação, edição, filtro ou substituição da imagem. Sua disponibilidade continua dependendo do serviço externo original.

## Manutenção

Edite nomes, categorias e links em `games.js`; capas ficam em `assets/covers`. Ao atualizar arquivos, altere a versão de `CACHE` em `sw.js` para renovar o cache offline. Todos os caminhos são relativos e compatíveis com páginas de projeto no GitHub Pages.

## Análise do material recebido

O arquivo HUB.zip continha `index.html` e `assets/img/logo.png`. Todo o CSS e JavaScript estavam embutidos no HTML. Havia duas telas (catálogo e apoio), aviso de PIX copiado, modal de instalação no iPhone e solicitação automática de tela cheia no primeiro clique. O HTML referenciava `manifest.json` e `sw.js`, ausentes no ZIP. Esses arquivos foram implementados nesta versão. A navegação usa âncoras para permitir voltar pelo navegador. A tela cheia automática foi removida para manter a navegação previsível e acessível.

Categorias: Ação (2), Puzzle (7), RPG (1), Esporte (2). O título de Pelada foi ajustado para “International Superstars Pelada 2026 Deluxe”, conforme solicitado, preservando o destino original.

## Celulares

Abra o endereço do GitHub Pages no Safari (iPhone) ou Chrome (Android). O portal adapta o cabeçalho, a busca, os filtros e as capas à largura da tela, com uma coluna em telas de até 400 px e controles maiores para toque. Não exige instalação. Grande Azul foi adicionado à categoria Ação, com capa original e seu link informado. A compatibilidade de cada jogo externo depende do próprio jogo.

Atualização v4: Cores! incluído em Puzzle, com capa vetorial original de padrões de cores em um tabuleiro. Total: 12 jogos, sendo 7 puzzles.
