# Iniciando
* utilize a versão 10 ou superior do nodejs
* Após clonar o projeto, rode o comando `npm install` ou `yarn install`
* Configure um arquivo chamado .env, contendo as mesmas variaveis do arquivo .enx-example, com os valores corretos
* Rode a api com o comando `npm start` ou `npm run dev`, se estiver utilizando yarn, utilize os comandos `yarn start` ou `yarn run dev`

## Desing Patterns utilizados
# DDD (Domain-driven design)
    * Cria estrutura isolada de dominios na sua aplicação: EX
    
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
