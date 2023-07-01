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

- `Informações de uma loja no mapa`: Você pode navegar pelo mapa e ver os marcadores dos locais de cada loja cadastrada. Para ver
as informações de uma loja específica você pode clicar em um dos marcadores e será exibido um modal com as informações (imagem 7).

**Imagem 7 - modal com informação de uma loja**
<img src="/docs/images/modal-loja.png" width="800" />

- `Loja destaque`: Todos os marcadores são azuis, porém se ver uma loja com um marcador vermelho significa que essa é a loja com o maior montante (loja destaque - Imagem 8):

**Imagem 8 - loja destaque**
<img src="/docs/images/loja-destaque.png" width="800" />

## Tecnologia utilizadas:
Este projeto foi construído utilizando ReactJs para construir a interface. Foram utilizadas várias bibliotecas para auxiliar a criação da aplicação. Segue abaixo a descrição de todas elas:

- `Gráfico de linhas`: React Google Charts
- `Mapa`: React leaflet + Leaflet
- `Estilização`: Tailwind CSS
- `Validação de props`: Prop types
- `Manipulação dos formulários`: React Hook Form
- `Validação dos formulários`: Yup
- `Manipulação de dadas`: MommentJs
- `Requisições HTTP`: Axios
- `Notificação | Toast`: React Toastify
- `Simuladar API`: Json-server
- `Buscador de endereço`: VIA Cep

## Pontos de design:
Neste projeto procurei separar o máximo possível componentes que pudessem ser reutilizados, seja por motivo de lógica, seja por estilização
similares. A manipulação de dados externos, em especial os que são recebidos via API, separei todos em custom hooks.

## Melhorias futuras:
há alguns pontos que gostaria seriam necessários uma futura implementação como:

- implementação de testes unitários
- implementação de botão para logout
- implementação de exibição de vários meses para o gráfico de linha no dashboard
- melhoria no login com utilização de bibliotecas de criptografia
- regras para edição e remoção de lojas parceiras
- deploy da aplicação
- entre outros

Infelizmente não consegui dentro do tempo proposto ir além do que vos entrego nesse momento (em especial os testes unitários).

## Pontos extras:
Com o auxílio do Tailwind CSS consegui deixar o projeto responsivo. Utilizei bastante de grids para isso. Alguns pontinhos precisam de um retoque (legenda do gráfico de linhas) mas em sua maioria está funcional.

## Agradecimentos:
Agradeço a toda equipe pela oportunidade e me disponho nas redes de contato abaixo listadas para eventuais esclarecimentos.

<a href="mailto:brunocosta.fig@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://www.instagram.com/brunocostadev/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
<a href="https://www.linkedin.com/in/bruno-costa-b9b3141a2/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>