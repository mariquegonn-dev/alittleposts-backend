
# 📋 "A little posts" backend

Backend do repositório "A little posts".

Esse projeto foi criado para ser consumido por um frontend. Nessa aplicação será possível criar, modificar e apagar tarefas, dando uma prioridade ou não pra ela ser executada.

Essa API foi criada utilizando node.js e express. O banco da dados utilizado foi o mongodb e a biblioteca mongoose.


# 🏷️ Etiquetas

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


# ✍🏻 Como instalar

Clone o projeto, utilizando o terminal:

```bash
  git clone https://github.com/mariquegonn-dev/lotus-ts
```

Para iniciar o projeto:

```bash
  npm run dev
```


# 🎢 Documentação da API

## ⭕ Rota /anotacoes

#### 1. Retorna todas as anotações

```http
  GET /anotacoes
```

| Parâmetro   | Tipo       | 
| :---------- | :--------- |
| `title` | `string` | 
| `notes` | `string` | 
| `priority` | `boolean` |

#### 2. Cria uma nova anotação

```http
  POST /anotacoes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. |
| `notes`      | `string` | **Obrigatório**.  |
| `priority`      | `boolean` | **Não Obrigatório**. |


#### 3. Deleta uma anotação

```http
  DELETE /anotacoes:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `_id`      | `string` | **Obrigatório**. id gerado na criação de uma anotação |

## ⭕ Rota /priorities

#### 1. Muda o boolean de priority 

```http
  POST /priorities:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `_id`      | `string` | **Obrigatório**. id gerado na criação de uma anotação |

#### 2. Retorna o valor do boolean escolhido
```http
  GET /priorities 
```

```http
  QUERY /name: priority | value: true ou false
```

## ⭕ Rota /contents

#### 1. Altera o conteúdo(notes) da anotação

```http
  POST /priorities:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `_id`      | `string` | **Obrigatório**. id gerado na criação de uma anotação |


# 👨🏻‍💻Autores e Agradecimentos

- [mariquegonn-dev](https://www.github.com/mariquegonn-dev)

Obrigado por ter chegado até aqui! 

Esse projeto foi feito com carinho e atenção, mas acima disso, com profissionalidade. Espero que tenha gostado, e caso tenha interesse, olhe meus outros projetos, ou me mande uma mensagem no [linkedin](https://www.linkedin.com/in/mariquegonn-dev) ou [whatsapp](https://wa.me/5571987510739?text=Ol%C3%A1+Henrique%21v).


