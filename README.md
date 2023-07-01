:construction: Projeto em construção :construction:
# Desafio Vaga FrontEnd Agility

## Descrição
Este projeto tem como objetivo a construção de uma aplicação proposta pela equipe técnica da Agility. O projeto consiste em uma aplicação
que permita ao cliente visualizar as métricas de suas lojas parceiras. A aplicação contém as seguintes funcionalidades:

- Tela de Login com autenticação
- Dashboard com indicadores de vendas, ranking de cidades e gráfico de novos clientes no mês
- Mapa de lojas com marcadores para cada loja cadastrada
- Formulário de cadastro de novas lojas

## Instruções de instalação
Para rodar o projeto localmente será necessário clonar o projeto. Use o link [Link do clone](https://github.com/Bruno-Costa-fig/Agility-client-system.git).

### Passos:
1º - Execute o comando *npm install* ou *yarn* para baixar todas as dependências do projeto.

2° - Para executar executar o projeto use o comando *npm run dev* ou *yarn dev*. Pronto. A interface será exibida no endereço [http://localhost:5173/](http://localhost:5173/).

3° - Foi criada uma API Fake com *Json-server*. Ela se encontra dentro da pasta */server*. Será necessário executar a instalação do *json-server* para executá-la. Utilize o comando *npm install* ou *yarn* para fazer a instalação.

4° - Para executar a API você precisa executar o comando *npm start* ou *yarn start*.

5° - Agora sim tudo pronto! 

## Instruções de Uso
- `Página de Login`: Para fazer login na aplicação você pode utilizar como usuário (campo login) **bruno@email.com** e como senha **1234**. Consulte os usuários disponíveis [clicando neste link](https://github.com/Bruno-Costa-fig/Agility-client-system/blob/develop/server/data/db.json).

**Página de login**
<img src="/docs/images/pagina-login.png" width="800" />

- `Menu de navegação`: No campo superior esquerdo (conforme imagem 1) temos o botão para exibir o menu de navegação(imagem 2). Através dele podemos
navegar entre as páginas disponíveis que são:
  - `Página inicial`: Dashboard com as métricas das lojas e cidades (imagem 3)
  - `Mapa de lojas`: Página com o mapa das lojas (imagem 4)

**Imagem 1 - Botão para exibir menu**
<img src="/docs/images/botao-menu.png" width="800" />

**Imagem 2 - Menu de navegação**
<img src="/docs/images/menu-navegacao.png" width="800" />

**Imagem 3 - Página inicial**
<img src="/docs/images/dashboard.png" width="800" />

**Imagem 4 - Página mapa lojas**
<img src="/docs/images/mapa-lojas.png" width="800" />

- `Cadastro de nova loja`: Você pode ainda cadastrar uma nova loja. Você pode abrir o formulário clicando no botão **+ cadastrar loja** (imagem 5). Quando o formulário for exibido (imagem 6) basta adicionar todas as informações necessárias e clicar no botão **cadastrar**:

**Imagem 5 - Botão para abrir formulário de cadastro de nova loja**
<img src="/docs/images/botao-nova-loja.png" width="800" />

**Imagem 6 - formulário de cadastro de nova loja**
<img src="/docs/images/form-cadastro-lojas.png" width="800" />