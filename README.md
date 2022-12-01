# Sistema Gerenciamento de Vendas

#### Sistema web completo, backend e frontend, para gerenciamento de vendas em lojas de roupas, sapatos e etc. Nele podemos cadastrar clients, editar clientes, adicionar produtos, cadastrar modelos de produtos, efetuar vendas, gráficos de vendas e muito mais!

# Tecnologias empregadas

## Frontend

<ul>
    <li>React</li>
    <li>TypeScript</li>
    <li>Axios</li>
    <li>Material UI (Biblioteca UI)</li>
    <li>Moment</li>
</ul>

## Backend

<ul>
    <li>Node.Js</li>
    <li>TypeScript</li>
    <li>PostgreSQL</li>
    <li>Prisma ORM</li>
    <li>Express</li>
    <li>Moment</li>
</ul>

# Primeiramente, vamos discutir como executar 🏃‍

```bash
# Clone este repositório
$ git clone https://github.com/diogoleite87/Sistema-Gerenciamento-Vendas.git

# Acessa a pasta do Backend no terminal
$ cd Sistema-Gerenciamento-Vendas/backend

# Instale as dependências
$ yarn

# Crie um arquivo .env, insira e edite os dados do seu usuário postgres
.env : DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME-BD?schema=public"

# Execute a migrate para gerar as tabelas automaticamente no seu postgres
$ yarn prisma migrate dev

# Execute a aplicação
$ yarn dev

# Volte para o root. O Servidor iniciará na porta padrão Node
$ cd ..

# Acesse a pasta do Frontend no terminal
$ cd frontend

# Instale as depencências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação iniciará na porta que estiver disponível em sua máquina

```

# Demonstração de Algumas Funcionalidades do Sistema

## Tela Inicial

#### Na tela inicial temos dois gráficos, um com vendas nos últimos 7 dias e outro do total em R$ em vendas também nos últimos 7 dias. Completando com a soma das vendas e valor das vendas nos últimos 7 dias, também possui 4 botões de atalho na parte superior.

<img src='./img/homePage.png'>

## Cadastrando Cliente

#### Selecionando a opção "Cadastrar Cliente" no canto superior direito, podemos adicionar um novo cliente e seus respectivos dados/atributos.

<img src='./img/createClient.gif'>

## Cadastrar Modelo

#### Selecionando a opção "Modelos" no canto superior direito, podemos adicionar marca, cores e variantes de marcas específicas.

<img src='./img/createModel.gif'>

## Cadastrar Produto

#### Selecionando a opção "Cadastrar Produto" no canto superior direito, podemos cadastrar um produto com os atributos adicionados na opção "Modelos" mostrado anteriormente, além de poder adicionar valores, tamanho e quantidade que deseja adicionar de tal produto.

<img src='./img/createProduct.gif'>

## Efetuar Venda

#### Selecionando a opção "Nova Venda" no canto superior direito, podemos efetuar a venda dos produtos disponíveis, ou seja, na qual o ID não esteja vinculado a nenhuma outra venda, selecionando o cliente, produto na qual será vendido e o valor da venda.

<img src='./img/createSold.gif'>

## Tela Clientes

#### Na tela de clientes, será listado todos os clientes cadastrados no sistema, com a possibilidade de editar as informações do cliente, exibir essas informações, encaminhar para o WhatsApp do cliente, excluir cliente e ver histórico de compras do cliente.

<img src='./img/clientPage.gif'>

## Tela Produtos

#### Na tela de produtos, podemos listar o estoque disponível, estoque detalhado, cores cadastradas, marcas cadastradas e modelos cadastrados.

<img src='./img/productPage.gif'>

## Tela Vendas

#### Na tela de vendas, podemos listar as vendas efetuadas de acordo com a data inserida, por padrão é data atual.

<img src='./img/soldsPage.png'>
