# duck
Back end repository for UniRadar project

<img src="https://github.com/munhozotavio/duck/blob/main/src/img/duck_hat.png" width="250" heigh="400"/>

<hr/>

# Universidade Estadual de Campinas
# Instituto da Computação

## Projeto desenvolvido para a disciplina: MC855-2s2022

#### Professor e Assistente

| Nome                     | Email                   |
| ------------------------ | ------------------------|
| Professora Juliana Borin | jufborin@unicamp.br     |
| Assistente Paulo Kussler | paulo.kussler@gmail.com |


#### Equipe

<table>
 <tr>
  <th>Nome</th>
  <th>RA</th>
  <th>Email</th>
  <th>Git</th>
 </tr>
 <tr>
  <td>Otávio Silveira Munhoz</td>
  <td>204280</td>
  <td>otaviosilmunhoz@gmail.com/o204280@dac.unicamp.br</td>
  <td>/munhozotavio</td>
 </tr>
 
 <tr>
  <td>Régis Gabetta de Souza</td>
  <td>223965</td>
  <td>regis_gabetta@hotmail.com/r223965@dac.unicamp.br</td>
  <td>/Regis-Gabetta</td>
 </tr>
 
 <tr>
  <td>Augusto S. Rodrigues</td>
  <td>213368</td>
  <td>a213368@dac.unicamp.br</td>
  <td>/AugustoSRodrigues</td>
 </tr>
 
 <tr>
  <td>Dorival Alves Da Silva Júnior</td>
  <td>215076</td>
  <td>d215076@dac.unicamp.br</td>
  <td>/Dorivis</td>
 </tr>
 
  <tr>
  <td>Thiago Dall'Oca</td>
  <td>206341</td>
  <td>tdalloca@gmail.com/t206341@dac.unicamp.br</td>
  <td>/tiagodalloca</td>
 </tr>
 
</table>

</hr>

### Descrição do projeto:
A descrição completa do projeto pode ser encontrada no link <a href="https://github.com/munhozotavio/goose">/munhozotavio/goose</a>. Este repositório contém apenas o backend do projeto

#### Tecnologias, ferramentas, dependências, versões. etc. 
- NodeJs
- Dependências do node:
  - mysql2
  - express
  - cors
  - body-parser
  - bcrypt
  - uuid 
 
Todas as dependências e suas versões podem ser encontradas no arquivo packase.json 
 
#### Como colocar no ar, como testar, etc
- Para criar o ambiente:
  - O primeiro passo é rodar o comando <code>npm i </code> para instalar os pacotes necessários
  - Depois disso é preciso inserir as informações do servidor de banco de dados no arquivo /sql_setup/config.js //Não commitar essas alterações
  - Criar um arquivo .env e adicionar a variável <code>GOOGLE_API_KEY="sua_chave_api"</code>
  - Rodar o comando <code>node sql_setup/create_tables.js</code> para criar as tabelas necessárias no banco de dados
  - Rodar o servidor <code>npm run local</code> ou <code>node server.js</code> (recomendo usar o primeiro)
- Com o ambiente definido você pode acessar as rotas:
  - /login (POST)
  - /login/create (POST)
  - /cars (GET E POST)
  - /location (GET)
  - /location/api (GET)
- Para começar a testar:
  - Crie um usuário através da rota /login/create (ele virá como inativo)
  - Altere o valor do campo <code>active</code> do user no banco para 1
  - Pronto, agora você pode acessar o sistema pelo front-end!
