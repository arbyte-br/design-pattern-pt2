# Iniciando
* utilize a versão 10 ou superior do nodejs
* Após clonar o projeto, rode o comando `npm install` ou `yarn install`
* Configure um arquivo chamado .env, contendo as mesmas variaveis do arquivo .enx-example, com os valores corretos
* Rode a api com o comando `npm start` ou `npm run dev`, se estiver utilizando yarn, utilize os comandos `yarn start` ou `yarn run dev`

## Desing Patterns utilizados
# Singleton
    * Forma de atribuir o valor a uma variável, assim evitamos instãncias desnecessárias. 
# Factory
    * Um arquivo isolado que irá fazer todas as instâncias do projeto/dominio
# Repository
    * Código responsável por manipulação de dados no banco
# Service
    * Código dedicado a regra de negócio da aplicação
# DDD (Domain-driven design)
    * Estrutura isolada de dominios na aplicação
    
    src
        v1/api
            domains
                domainName
                    controllers
                        DomainController.js
                    factories
                        index.js
                    repositories
                        DomainRepository.js
                    routes
                        index.js -> carregar todas as rotas dinamicamente
                        //rotas
                    services
                        DomainService.js
        database
            mongo
                index.js
                schemas
                    index.js
                    meuModel.js
        routes
            index.js
        app.js    


# Injeção de dependencia
    * Este é o conceito de injetar via parâmetro algum objeto em uma classe via constructor, por exemplo.

# Clean Code
    * Escrever o código o mais légivel possivel, prezando não fazer arquivos com muitas linhas de código, pois isso foge das boas práticas de programação. 


# Estrutura de roteamento no express
    Para trabalharmos com camadas de dominio, primeiro criamos o arquivo [root na raiz das rotas](./src/routes/index.js).
    Esse arquivo, contem uma função (loadIn), que é responsável por carregar dinamicamente as rotas de todos os dominios
    que estão dentro do diretório v1/api/domains*. 
    Ao finalizar a leitura de todos os arquivos criando as rotas, elas são retornadas para o arquivo app.js.
    Depois inserimos essas rotas na nossa aplicação atraves do comando `app.use('/', routerConfig.routes)`
    