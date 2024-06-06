## 0 - Iniciando o projeto e instalando depedências (caso esteja iniciando um projeto do zero, sem usar esse repositório)

- npm init -y
- npm i sequelize sequelize-cli pg pg-hstore express
- npm i -D nodemon
- npx sequelize-cli init (para criar a estrutura do sequelize)

## 1 - Criando banco de dados

- Configurar variáveis de ambiente relacionadas ao arquivo config/config.js
- npx sequelize db:create (para criar o banco de dados)

## 2 - Criando tabelas (migrations + models simultaneamente)

- npx sequelize db:migrate --name=user (para criar as tabelas no banco de dados)
- npx sequelize model:create --name User --attributes name:string,email:string,password:string (para criar um model e uma
  migration ao mesmo tempo)

## 3 - Subindo tabelas

- npx sequelize db:migrate (para subir as tabelas no banco de dados)
- npx sequelize db:migrate:undo (para desfazer a última migração)
- npx sequelize db:migrate:undo:all (para desfazer todas as migrações)

## 4 - Criando controllers

- ver os arquivos dentro da pasta "controllers" como exemplo

## 5 - Criando seeds para popular o banco de dados

- npx sequelize seed:generate --name demo-user (para criar um seed)
- npx sequelize db:seed:all (para subir o seed no banco de dados)
- npx sequelize db:seed:undo (para desfazer o seed)
- npx sequelize db:seed:undo:all (para desfazer todos os seeds)
