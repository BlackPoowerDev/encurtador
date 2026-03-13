# 🔗 URL Shortener

Um encurtador de links simples e rápido feito com **Node.js**.
Permite transformar URLs longas em links curtos e fáceis de compartilhar.

---

## 🚀 Funcionalidades

* 🔗 Criar links encurtados
* ↪️ Redirecionamento automático para a URL original
* 📊 Estrutura preparada para armazenar links em banco de dados
* ⚡ Geração de códigos curtos para cada URL
* 🧩 API simples para integração com outros sistemas

---

## 🛠️ Tecnologias utilizadas

* **Node.js**
* **Express**
* **POSTGRE**

---

## 📁 Estrutura do Projeto

```
encurtador
│
├── config
│   └── tables.js
├── controllers
│   └── create.shorten
│   └── get.shorten
├── models
│   └── db.js
├── routes
│   └── router.shorten.js
├── server.js
├── .env
├── package.json
└── README.md

```

---

## ⚙️ Instalação

Clone o projeto:

```
git clone https://github.com/BlackPoowerDev/encurtador.git
```

Entre na pasta:

```
cd encurtador
```

Instale as dependências:

```
npm install
```

---

## ▶️ Executando o projeto

```
npm start
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## 📡 Exemplo de uso da API

### Criar link curto

```
POST /api/shorten
```

Body:

```
{
  "url": "https://racoelho.com.br/listas/desafios/encurtador-de-links"
}
```

Resposta:

```
{
    "short_url": "http://localhost:3000/0pnjde",
    "original_url": "https://racoelho.com.br/listas/desafios/encurtador-de-links"
}
```

---

### Redirecionar link

Acessando:

```
http://localhost:3000/0pnjde
```

O sistema redireciona automaticamente para:

```
https://racoelho.com.br/listas/desafios/encurtador-de-links
```

---

## 📸 Demonstração

Você pode adicionar aqui prints do sistema funcionando.


## 💡 Possíveis melhorias

* 📊 contador de cliques
* 🔐 autenticação de usuários
* 🏢 sistema multiusuário
* 📈 dashboard de estatísticas
* 🌐 deploy online

---

## 👨‍💻 Autor

Desenvolvido por **Rene S.**

GitHub:
https://github.com/BlackPoowerDev
