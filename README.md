# Lidere - api

## Contexto

Esse projeto é uma aplicação JavaScript utilizando Node.js que se comunica através de API’s REST.

## Dependências

- typescript;
- sequelize e sequelize-typescript;
- yup;
- pg;
- express.

## Fluxos

O cadastro é sempre vinculado a um Tutor, portanto não há como fazer registro de animais, endereços e contatos sem informar o id do tutor.
_A collection associada do postman contém exemplos de requisição._

- **Fluxo Tutores** que compreende:

  - (1) Listar `/tutors`;
  - (2) Cadastrar `/tutors`.
  - (3) Atualizar `/tutors/:id`.
  - (4) Deletar `/tutors/:id`.
  - (5) Listar detalhes `tutors/:id`.

- **Fluxo para endereços** que compreende: :

  - (6) Cadastrar `/tutors/address`;
  - (7) Atualizar `/tutors/address/:id`;
  - (8) Deletar `/tutors/address/:id`;

- **Fluxo para contatos** que compreende: :

  - (9) Cadastrar `/tutors/contacts`;
  - (10) Atualizar `/tutors/contacts/:id`;
  - (11) Deletar `/tutors/contacts/:id`;

- **Fluxo para animais** que compreende:

  - (12) Listar `/animals`;
  - (13) Cadastrar `/animals`.
  - (14) Atualizar `/animals/:id`.
  - (15) Deletar `/animals/:id`.

## Desenvolvimento

- Para o banco de dados, utilizamos a biblioteca ORM `Sequelize`, que fez interface com o `Postgresql`!

---

## Estrutura dos diretórios

```
📦src
 ┃ 📂controller
 ┃ ┣ 📜controllers.ts
 ┃ 📂database
 ┃ ┣ 📜config.ts
 ┃ ┣  ┃ 📂models
 ┃ ┣  ┣   📜models.ts
 ┃ 📂routes
 ┃ ┣ 📜routes.ts
 ┃ 📂services
 ┃ ┣  📂models
 ┃ ┣     📂schemas
 ┣ 📜server.ts
```

# Para testar a aplicação na sua máquina

### Depois de clonar a aplicação, instale as dependências com yarn/npm na pasta raiz do projeto, com o comando `npm install` ou `yarn install`;

- Certifique-se de que seu banco de dados local esteja ativado.

- Crie um arquivo _.env_ na raiz do projeto e preencha com as credenciais de acesso do seu banco. Use o exemplo do _.env.example_. As tabelas, colunas e schemas serão configurados automaticamente pela aplicação, mas é importante que informe um banco de dados e credenciais válidas.

- Dentro da pasta raiz, inicie a api com o comando `yarn start`.
