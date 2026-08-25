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
Atualização dos dados do rebanho (manifest remoto)
Essa atualização de app é separada da atualização dos dados (animais, sanidade). Os dados continuam sendo sincronizados pelo mecanismo já existente dentro do próprio app, na aba de sincronização remota, apontando para a URL do `manifest.json` configurada (ex: Google Apps Script). Isso não muda com a publicação no Render — pode continuar como está ou ser movido para o mesmo servidor Render depois, se fizer sentido.
Segurança
Nunca compartilhe login/senha do GitHub em texto puro (chat, e-mail, etc). Se algum acesso já foi exposto, troque a senha assim que possível.
O plano gratuito do Render pode "dormir" sites que ficam muito tempo sem acesso, levando alguns segundos a mais para acordar na primeira visita do dia — isso é normal e não afeta o funcionamento do app.
