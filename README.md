<p align ="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>

<p align="center">
  <a href="https://on.cypress.io">Documentação</a> |
  <a href="https://on.cypress.io/changelog">Changelog</a>

<p>

<h4> O que é?</h4>

O cypress.io é um framework utilizado na automação de testes, que vamos utilizar em nosso projeto.

</p>

<p>

<h4> Pré condições </h4>

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

É necessário possuir instalado em sua máquina o **node.js** e o **npm**.
Para verificar se estão instalados, abra o terminal e digite:

**node -v && npm -v**

Caso não estejam instalados clique no link abaixo e instale o pacote de acordo com seu sistema operacional.

**Node.js**
https://nodejs.org/pt-br/download/

Faça uma validação se foram instalados corretamente.

<h4> Instalar o Visual Studio Code </h4>

Acesse o link https://code.visualstudio.com/ e realize o download e instalaçao de acordo com seu sistema operacional

<h4> Abrindo o projeto em sua máquina </h4>

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

1. Realize um Fork no deste projeto clicando no ícone localizado no canto superior direito deste repositório
2. Perceba que agora este projeto está na lista de seus repositórios
3. Em sua máquina local, crie uma pasta com um nome de sua preferencia referente a automaçao
4. Dentro desta pasta, abra um tela do terminal
5. Volte a tela de seu repositório que foi realizado o fork e clique no botao verde **CODE**.
6. Copie o endereço
7. Execute o comando a seguir para baixar o projeto para sua máquina: (Lembrando que seu username do git deve estar no lugar de _seuUsuario_)             
8. Abra o seu VSCode, clique em "arquivo", em seguida "abrir pasta" e abra a pasta que com o nome do projeto que foi clonado
9. Abra o terminal integrado do VSCode e execute o comando **ls** para validar que os arquivos estão presentes.

<h4> Instalando as dependências </h4>

Temos algumas dependencias do projeto como o Cypress e o Cucumber que precisam ser instaladas na sua má
quina. Por isso vamos executar os passos:

1. No terminal do VsCode execute o comando _pwd_ para validar que esta na pasta do projeto
2. Execute o comando: **Npm i**
3. Aguarde todas as nossas ferramentas serem instaladas com sucesso
4. Execuite no terminal o comando **npx cypress open** para abrir a interface do cypress
5. Caso aconteça algum errro informando que o cypress não está instalado, execute o comando **npm i cypress -d** para re-instalar
6. Execute novamente o comando **npx cypress open**

**Incluindo seus dados de acesso na automaçao**

Para incluir os dados de acesso do seu usuário:
1. Copie todo o conteúdo do arquivo cypress.example.json e colar dentro do arquivo cypress.json
2. Insira seus dados de acesso dentro das " " do CYPRESS_EMAIL, CYPRESS_SENHA, CYPRESS_USER_NAME
3. Dentro do VScode clique em Arquivo > Salvar tudo

Pronto! Agora onde existir dentro do código, o valor da variável que você colocou aqui será utilizado.

Top não?

**Executando com Runner do Cypress**

No arquivo cypress.json, indique qual a baseUrl que será utilizada para realizar os testes.
Insira o endereço do Beta ou Localhost para executar os testes em modo interativo e visual.

Após escolher o ambiente de seus testes, no terminal dentro do VSCode execute o comando: **npx cypress run**
Escolha os testes que deseja executar ou execute todos eles clicando em _Run integration specs_

**Executando testes em modo headless**

Aqui os testes não possuirao interface grafica.

1. Acesse o arquivo **packpage.json**
2. Em _scripts_, existem test:local e test:beta que possuem as rotas dos ambientes de teste
3. Para executa-los em seu terminal: npm run test:local ou npm run test:beta
4. Ao final da execucao da suite, serao criadas evidencias em videos que podem ser acessadas atraves do explorador
5. Para visualizar essa midias sem precisar sair do VS CODE, instale um pluggin para visualizar vídeos de sua preferencia.

🚀

</p>

Boa automação!
