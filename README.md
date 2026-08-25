Consulta Rebanho SISBOV — Santa Rosa
Aplicativo de consulta do rebanho (arquivo único HTML/CSS/JS, sem dependências de servidor). Publicado como site estático no Render.
Publicar pela primeira vez
Crie um repositório no GitHub (público ou privado) e suba o arquivo `index.html`.
Acesse render.com e crie uma conta gratuita (pode entrar direto com o GitHub).
Clique em New > Static Site e selecione o repositório criado.
Configure:
Build Command: deixe em branco
Publish Directory: `.` (raiz do repositório)
Clique em Create Static Site. O Render vai gerar uma URL pública, algo como:
`https://consulta-santa-rosa.onrender.com`
Envie esse link para os usuários. Eles podem abrir no navegador do celular e, se quiserem, adicionar à tela inicial (funciona como um app instalado).
Atualizar o app para todos os usuários
Sempre que precisar mudar algo no `index.html`:
Vá até o repositório no GitHub.
Abra o arquivo `index.html`, clique no ícone de lápis (editar) ou faça upload de uma versão nova substituindo o arquivo.
Confirme o commit (Commit changes).
O Render detecta a mudança automaticamente e republica em 1–2 minutos — sem precisar fazer nada no Render.
Os usuários só precisam recarregar a página (F5 ou puxar para atualizar no celular) para ver a versão nova.
Atualização automática dos dados do rebanho (manifest remoto)
Essa atualização de app (o próprio HTML) é separada da atualização dos dados (animais, sanidade). Como o Render já está servindo o repositório, dá para hospedar o `manifest.json` e os arquivos de dados no mesmo lugar, sem precisar de Google Apps Script.
Configuração única (feita uma vez):
Dentro do app, no painel "Publicar para todos os usuários", cole a URL:
`https://SEU-SITE.onrender.com/manifest.json`
Deixe o campo "Padrão de URL dos dados" em branco.
Clique em "Salvar configuração". Cada pessoa faz isso uma única vez no próprio aparelho.
Toda vez que a base de dados mudar:
No app, clique em "Gerar arquivos para publicar" — baixa `manifest.json`, `animais_data.txt` e `sanidade_data.txt`.
Suba esses 3 arquivos na raiz do mesmo repositório GitHub (junto do `index.html`), substituindo os anteriores.
O Render republica sozinho em 1–2 minutos.
Da próxima vez que cada usuário abrir o app com internet, ele confere o manifest.json e atualiza a base automaticamente — sem precisar fazer nada.
Segurança
Nunca compartilhe login/senha do GitHub em texto puro (chat, e-mail, etc). Se algum acesso já foi exposto, troque a senha assim que possível.
O plano gratuito do Render pode "dormir" sites que ficam muito tempo sem acesso, levando alguns segundos a mais para acordar na primeira visita do dia — isso é normal e não afeta o funcionamento do app.
