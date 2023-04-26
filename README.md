# Cartão de Crédito Válido 💳

## Índice

- [Cartão de Crédito Válido 💳](#cartão-de-crédito-válido-)
  - [Índice](#índice)
  - [1. Sobre o projeto 😍](#1-sobre-o-projeto-)
  - [2. Guia 	📝](#2-guia-)
    - [Para instalar 📥](#para-instalar-)
    - [Para executar a aplicação 📂](#para-executar-a-aplicação-)
    - [Para deployar ✅](#para-deployar-)
  - [3. Contato 📬](#3-contato-)

***

## 1. Sobre o projeto 😍

**1. Introdução:**

O projeto foi criado para exercitar o desenvolvimento da auto-aprendizagem promovido pelo [Laboratória](https://www.laboratoria.la/), turma SAP-010. O objetivo deste projeto é informar ao usuário se o número do cartão consultado é válido ou não, utilizando o [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm). Aqui está o [desenho do protótipo](https://www.figma.com/file/eeHb7cShF6uPt2JZQY7rzv/CartaoDeCreditoValido?node-id=0%3A1&t=rkuIqKLIhaEhH5ws-1).

**2. Aplicação:**

A aplicação ainda está em construção e durante o passar do tempo será aprimorada para a aplicação de resposividade, exibição da bandeira, validação dos demais campos do formulário além de melhorias no layout.

**3. Funcionalidades:**

O projeto possui duas funcionalidades, sendo elas:

**Validar o número do cartão:**

Esta funcionalidade recebe o número de um cartão e retorna uma mensagem exibida em tela se este número está válido ou não, após o acionamento (click) do botão **submit**.

**Mascarar o número do cartão:**

Esta funcionalidade exibe o número do cartão na tela ocultando os últimos quatro digitos.

**3. Decisões tomadas:**

Abaixo estão descritas algumas decisões que foram tomadas durante a execução do projeto.

Os textos do projeto estão todos em **inglês** apenas para exercitar a prática.

Dois elementos do formulário, mais especificadamente o **expiration date** e o **cvv** foram colocados dentro de divs, para facilitar o alinhamento lado a lado deste dois elementos.

Os **seletores do CSS** foram organizados por ordem alfabética para facilitar a manutenção.

Cada imagem das **bandeiras de cartão** de crédito foram colocadas dentro em uma div, para poder deixa-las com o tamanho padronizado, ocupando 100% do espaco da div.

## 2. Guia 	📝

Abaixo estão as instruções para que você possa executar este projeto na sua máquina.

### Para instalar 📥

**Step 1:**

Verifique se você possui algum editor de código-fonte como o VSCode.

**Step 2:**

Verifique se possui o **Node.js** instalado em sua máquina. Para fazer isso você pode executar abrir o prompt de comando (cmd) e digitar node -v, se seu sistema operacional for windowns. Caso não tenha o node instalado, você poderá instala-lo [clicando aqui](https://nodejs.org/en).

**Step 3:**

Assegure que a versão instalada seja igual ou superior à 12, faça isso utilizando o comando node -v em seu prompt de comando (cmd).

**Step 4:**

Verifique se o npm (gerenciador de pacotes do Node) esta instalado com o comando npm -v.

**Step 5:**

Verifique se possui o Git instalado atraves do comando git --version, caso não possua, [clique aqui](https://git-scm.com/downloads) para instala-lo.

### Para executar a aplicação 📂

**Step 1:**

Faça o clone do projeto em um repositório de sua preferência. Para clonar o projeto abra (de preferência) o GitBash dentro do repositório desajado. Digite (dentro do GitBash) o comando **git clone** [e cole a url do projeto em seguida] e em seguida pressione o botão **enter**. Aguarde até que o arquivo seja clonado (copiado).A pasta do projeto deverá aparecer quando o processo for concluído.

**Step 2:**

Abra o projeto com o editor de código-fonte de sua preferência.

**Step 3:**

Acesse a pasta do projeto e com o prompt de comando de sua preferencia digite o comando "npm install" e pressione o entre para baixar as depedências do projeto em sua máquina. Aguarde até que o processo seja concluído.

**Step 4:**

Ainda dentro da pasta do projeto digite o comando "npm start" para inicializar o servidor. Aguarde até que ele lhe informe a URL como localhost. Copie e cole a URL no browser de sua preferência para testar as funcionalidades do projeto.

  ⚠️ É importante que você não feche o terminal onde o comando "npm start" está sendo executado.

### Para deployar ✅

**Step 1:**

Para subir o projeto no GitHub crie um repositório utilizando a interface gráfica do Github. Pré requisito: ter uma conta no GitHub além de já ter feito a instalação do Git.

**Step :2**

Se tiver feito alterações no projeto digite o comando git add . dentro do Git Bash.

**Step :3**

Se tiver feito alterações no projeto digite o comando git add . dentro do Git Bash.

**Step :4**

Em seguida digite o git commit -m "first commit".

**Step :5**

Em seguida digite o git remote set-url origin [cole a url do seu repositório aqui], para que você trocar o repositório do projeto.

**Step :6**

Em seguida digite o git push -u origin main, para subir definitivamente o projeto para o repositório do GitHub.

**Step :7**

Por fim digite o comando npm run deploy para poder configurar adequadamente o prjeto no GitHub Pages.

## 3. Contato 📬

Este projeto foi desenvolvido por Helouíse Itokazo.

📧 helouise.almeida93@gmail.com




