# Formulário de Inscrição em Cursos

Este é um projeto de um formulário de inscrição para cursos. A aplicação permite que os usuários insiram suas informações, escolham um curso e enviem sua inscrição, que é armazenada em um banco de dados local.

## ✨ Funcionalidades

* **Formulário de Inscrição:** Formulário completo com campos para nome, e-mail, sexo e seleção de curso.

* **Validação de Dados:** Utiliza Zod para validar os dados do formulário em tempo real, garantindo que o nome, e-mail e a seleção de sexo e curso sejam preenchidos corretamente antes do envio.

* **Modo Escuro (Dark Mode):** Um botão permite ao usuário alternar entre o tema claro e escuro para melhor conforto visual.

* **Persistência de Dados:** As inscrições são salvas em um arquivo `db.json` usando `json-server`, que simula uma API RESTful para o backend.

## 💻 Tecnologias Utilizadas

As seguintes tecnologias foram usadas para desenvolver esta aplicação:

* **Frontend:**

  * HTML5

  * CSS3

  * TypeScript

* **Build Tool:**

  * [Vite](https://vitejs.dev/)

* **Validação de Dados:**

  * [Zod](https://zod.dev/)

* **Backend (Mock API):**

  * [json-server](https://github.com/typicode/json-server)

## 🚀 Como Rodar a Aplicação

Siga as instruções abaixo para executar o projeto em sua máquina local.

**Pré-requisitos:**

* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)

* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

**1. Clone o Repositório**

```
git clone https://github.com/EduardoTartas/formulario-cursos.git
cd formulario-cursos

```

**2. Instale as Dependências**

Execute o comando abaixo no terminal para instalar todas as dependências do projeto listadas no `package.json`.

```
npm install

```

**3. Inicie o Servidor da API (json-server)**

O formulário envia os dados para um endpoint local. Abra um **novo terminal** na pasta do projeto e inicie o `json-server` para "escutar" as requisições.

```
npx json-server --watch db.json

```

O servidor da API estará rodando em `http://localhost:3000`.

**4. Inicie a Aplicação Frontend**

No **terminal original**, execute o comando `dev` para iniciar o servidor de desenvolvimento do Vite.

```
npm run dev

```

**5. Acesse a Aplicação**

Abra seu navegador e acesse a URL fornecida pelo Vite (geralmente `http://localhost:5173`). Agora você pode interagir com o formulário.
