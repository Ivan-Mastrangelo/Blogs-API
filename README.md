# Sobre

Este é um projeto desenvolvido como forma de avaliação do curso de Desenvolvimento Web, módulo de Back End, ministrado pela escola Trybe.

Nele foi solicitada a construção de uma API conectada a um banco de dados com um CRUD para o cadastro de usuários e inserção e consulta de posts de um blog, através de alguns endpoints (seguindo os princípios do REST) que estarão conectados ao banco de dados. Para tanto foram utilizados o Node.js, o MySQL, o ORM Sequelize e a biblioteca JWT, para geração de tokens de validação da pessoa usuária, e a biblioteca JOI foi utilizada nos middlewares, para validação dos dados de entrada.

## Habilidades desenvolvidas 

 - Construir um back-end usando `ORM` com o pacote `sequelize`
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que forem criados 
 - Fazer um `CRUD` com o `ORM`

### Para executá-lo localmente

Basta clonar o projeto:
```
git@github.com:Ivan-Mastrangelo/Blogs-API.git
```
Entrar no diretório criado:
```
  cd Blogs-API
  ```
Instalar as dependências do projeto:
```
  npm install
  ```
Será necessária a criação de um arquivo .env na raiz do projeto para a conexão com seu banco de dados e a chave JWT, no seguinte formato:
```
MYSQL_USER=seu login do banco de dados
MYSQL_PASSWORD=senha
HOSTNAME=localhost
JWT_SECRET=secret
```
E iniciar o servidor:
```
  npm run start
  ```
Para criar o banco de dados, rode o comando:
```
npm run prestart
```
Para povoar o banco com alguns dados iniciais(opcional), rode o comando:
```
npm run seed
```
Agora basta abrir algum emulador de requisições como o Postman ou o Insomnia e realizar as requisições nos seguintes formatos:

Para criação de usuário, uma rota POST:
```
http://localhost:3000/user
```
Com o corpo no seguinte formato json:
```
{
  "displayName": "fulano de tal",
  "email": "fulano@gmail.com",
  "password": "123456",
  "image": "null"
}
```

Para realização de login, uma rota POST:
```
http://localhost:3000/login
```
Com o corpo no seguinte formato json:
```
{
  "email": "fulano@gmail.com",
  "password": "123456"
}
```
Obs: A partir do login é necessário inserir o token gerado na chave Authorization do campo Headres das próximas requisições.

Para recuperar todos os usuário, uma rota GET:

```
http://localhost:3000/user
```
Para recuperar apenas um usuário basta colocar uma barra e o número do id do usuário ao final da url acima.

Para recuperação de todas as categorias de posts criadas, uma rota GET:
```
http://localhost:3000/categories
```
Para a criação de uma categoria, rota POST:
```
http://localhost:3000/categories
```
Com o corpo no seguinte formato json:
```
{
  "name": "Música" 
}
```
Para recuperar todos os posts criados, uma rota GET:
```
http://localhost:3000/post
```
Para recuperar apenas um post basta colocar uma barra e o número do id do post ao final da url acima.

Para criação de um novo posts, rota POST:
```
http://localhost:3000/post
```
Com o corpo no seguinte formato json:
```
{
  "title": "Novo post",
  "content": "Tudo que se queira dizer",
  "categoryIds": [1, 3]
}
```
Para a atualização de um post, rota PUT com id do post:
```
http://localhost:3000/post/:id
```
Para excluir um post, rota DELETE com o id do post, mas atenção, apenas o criador do post pode removê-lo:
```
http://localhost:3000/post/:id
```
Para recuperar posts por parte de seu título ou conteúdo, rota GET, e inserir a palavra ou parte após o sinal de igual:
```
http://localhost:3000/post/search?q=
```
---
---
