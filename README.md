Este projeto é uma API RESTful desenvolvida com Node.js e MySQL, para a A3 da UC de Sistemas Distribuídos e Mobile, com base em relatório passado em aula.
A aplicação realiza operações CRUD sobre múltiplas entidades: usuários, tarefas, status e comentários.
Usamos as seguintes tecnologias:
- Node.js
- Express
- MySQL
- Postman / Navegador (para testes)
- GitHub

Para rodar, tenha node instalado, e rode com apache e mysql (também podem ser usados via xampp)

*clone esse repositório, ou copie e cole arquivo por arquivo em seu PC*

É importante instalar também o 'npm install' (via terminal windows ou terminal VScode na pasta do arquivo)

Rode a API com 'node index.js' ( via terminal windows, powershell windows ou terminal VScode na pasta do arquivo)


Nossa API tem os seguintes endpoints:

Usuários:

- GET /usuarios> Lista todos os usuários
  
- GET /usuarios/:id> Consulta usuário por ID
  
- POST /usuarios> Cadastra novo usuário
  
- PUT /usuarios/:id> Atualiza todos os dados do usuário
  
- PATCH /usuarios/:id> Atualiza parcialmente
  
- DELETE /usuarios/:id> Deleta um usuário

Tarefas:

- GET /tarefas > Lista todas as tarefas
  
- POST /tarefas > Cadastra nova tarefa
  
- PATCH /tarefas/:id > Atualiza o título de uma tarefa
  
- GET /tarefas/usuario/:id > Lista tarefas de um usuário específico

  Status:
  
- GET /status > Lista todos os status cadastrados
  
- POST /status > Adiciona novo status

  Comentários:
  
- GET /comentarios > Lista todos os comentários
  
- GET /comentarios/tarefa/:id > Lista comentários de uma tarefa específica
  
- POST /comentarios > Adiciona novo comentário
  
  
