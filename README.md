
# Conceitos de Clean Architecture aplicados a um exemplo

Exemplo de clean arch para inserção e listagem de um estudante inserido em um repositório em memória


## Documentação da API

#### Retorna todos os itens

```http
  GET /student
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
|  |  |  |

#### Retorna um item

```http
  POST /student
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome que você deseja inserir |
| `cpf`      | `string` | **Obrigatório**. O cpf que você deseja inserir |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`




## Instalação

Instale e rode com o Docker :D

```docker
    docker build --tag node-docker .
    docker run -p 2000:3000 node-docker
```
    
## Stack utilizada

**Back-end:** Node, Express, TypeScript


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```



## Funcionalidades

- Inserir studant
- Listar studant




## Apêndice

Criação de uma API seguindo o modelo apresentado no curso da Imersão Full Cycle

