# Teste Técnico Front End Neoway

## Descrição

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Front End na Neoway. A aplicação é uma interface web construída em React para listar, filtrar e abrir perfis de notícias da News API. Os 100 primeiros registros de acordo com a consulta do usuário são exibidos e os usuários podem clicar nos itens para serem redirecionados para uma página com o conteúdo completo da notícia.

## Funcionalidades

- **Input de Busca:** Um campo de busca permite que os usuários digitem consultas e escolha o idioma para filtrar as notícias em tempo real.
- **Adicionar aos Favoritos:** Os usuários podem adicionar notícias aos favoritos para fácil acesso posterior.
- **Cache:** É usado localStorage para salvar a última notícia aberta.
- **Filtro:** Os usuários podem filtrar as notícias com base em uma consulta fornecida.
- **SPA (Single Page Application):** A aplicação é uma SPA, proporcionando uma experiência de usuário mais fluida.
- **Responsivo:** O layout da aplicação é responsivo, garantindo uma boa experiência em diferentes dispositivos.
- **Redux:** Foi utilizado o Redux para fazer o gerenciamento dos estado da aplicação.
- **Acessibilidade:** Foi utilizado tags semânticas para melhorar a acessibilidade da aplicação.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**

## Rodando o Projeto

Para executar o projeto, siga estas etapas:

1. Clone este repositório em sua máquina.
2. No terminal, navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar todas as dependências.
4. Após a instalação das dependências, execute `npm run dev` para iniciar o servidor de desenvolvimento.
4. Para executar os teste dos componentes execute o comando `npm run test`.
5. O projeto estará disponível em [http://localhost:5173/desafio-frontend-neoway](http://localhost:5173/desafio-frontend-neoway).

## Projeto Online

O projeto também está disponível no Github Pages: [Visualizar Projeto](https://diegosouz4.github.io/desafio-frontend-neoway/). Mas, a API usada não permite requisições fora do ambiente de desenvolvimento, por isso, é recomendável visualizar o projeto localmente para garantir a funcionalidade completa. 

**Nota:** Infelizmente, a API usada não permite requisições fora do ambiente de desenvolvimento, por isso, é recomendável visualizar o projeto localmente para garantir a funcionalidade completa.
