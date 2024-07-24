## Introdução
- Esse repositório foi criado com o objetivo de ter uma base inicial de qualquer projeto backend que utilize associações de tabelas utilizando NodeJS + Sequelize.
- Uma das principais vantagens é que esse projeto é adaptado ao que a CLI do Sequelize gera como arquivos, sem a necessidade de grandes mudanças.
- A partir do clone desse repositorio você pode fazer as modificações necessárias, adaptando-as necessidades do seu projeto.

## As associações
- Esse repositorio conta com as associações dos tipos:
- 1:N (um para muitos) -> essa associação pode ser visualizada entre as tabelas Users e Posts, onde um usuário pode ter vários posts e um post pertence à um usuário.
- N:N (muitos para muitos) -> essa associação pode ser visualizada entre as tabelas Users e Addresses, onde um usuário pode ter vários endereços e um endereço pode pertencer a vários usuários. Vale lembrar que em um relacionamento do tipo muito para muitos é criado uma tabela pivô, essa por sua vez está presente no código como a tabela UserAddresses, que armazena as chaves estrangeiras que fazem referência ao ID do usuário e ao ID do seu endereço.

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
