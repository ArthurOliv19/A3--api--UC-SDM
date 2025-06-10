Este projeto é uma API RESTful desenvolvida com Node.js e MySQL, para a A3 da UC de Sistemas Distribuídos e Mobile, com base em relatório passado em aula.
A aplicação realiza operações CRUD sobre múltiplas entidades: usuários, tarefas, status e comentários.
Usamos as seguintes tecnologias:
- Node.js
- Express
- MySQL
- Postman / Insomnia / Navegador (para testes)
- GitHub

Para rodar, tenha node instalado e mysql ( esse último também pode ser usado via xampp)
*clone esse repositório, ou copie e cole arquivo por arquivo em seu PC*
É importante instalar também o 'npm install'
Rode a API com 'node index.js'

Nossa API tem os seguintes endpoints:

Usuários
GET /usuarios: Lista todos os usuários
POST /usuarios: Cadastra novo usuário

Tarefas
GET /tarefas> Lista todas as tarefas
POST /tarefas> Cadastra nova tarefa
PATCH /tarefas/:id> Atualiza o título de uma tarefa
GET /tarefas/usuario/:id> Tarefas por usuário

Status
GET /status: Lista os status cadastrados
POST /status: Adiciona um novo status

Comentários
GET /comentarios: Lista todos os comentários
GET /comentarios/tarefa/:id> Comentários de uma tarefa específica
POST /comentarios: Adiciona novo comentário

  
  
