# 🧠 HealthHub — App de Bem-Estar e Saúde Mental no Trabalho

O **HealthHub** é um aplicativo desenvolvido para promover a conscientização sobre **saúde mental**, oferecer **conteúdos educativos**, enviar **alertas úteis** e permitir que colaboradores acompanhem seu próprio bem-estar no ambiente corporativo.

Este documento explica:

* O objetivo do app
* Suas principais funcionalidades
* Como instalar o projeto
* Como rodar no ambiente de desenvolvimento
* Como integrar com a API

---

## 👥 Nome e RM dos Integrantes

- Pedro Manzo Yokoo – RM556115
  
- Guilherme Camasmie Laiber de Jesus – RM554894

- Fernando Fernandes Prado – RM557982


---

## Link do vídeo no Youtube

https://youtu.be/kqxDFDs9Z8A

---

## 📌 **✨ Sobre o App**

O HealthHub foi criado com o propósito de melhorar a experiência dos trabalhadores, oferecendo ferramentas que auxiliam:

* Redução do estresse no ambiente de trabalho
* Identificação de riscos emocionais
* Informações úteis e educativas
* Interface simples, acessível e multilíngue

O app utiliza **i18n**, **modo claro/escuro**, **autenticação**, **área do usuário**, e integração com API.

---

## 📱 **Principais Funcionalidades**

### 🔐 Login e Cadastro

* Login por e-mail e senha
* Cadastro de novos usuários
* Armazenamento seguro no AsyncStorage

### 👤 Gerenciamento de Usuário

* Atualizar nome, e-mail e senha
* Excluir conta
* Sincronização via API

### 🌍 Suporte a Idiomas (i18n)

* Português
* Inglês
* Alternância de idioma em tempo real

### 🌓 Tema Claro e Escuro

* Alteração instantânea de tema
* Persistência no AsyncStorage

### ⚙️ Tela de Configurações

* Alterar idioma
* Alterar tema
* Editar dados pessoais
* Excluir usuário

---

## 🛠️ **Tecnologias Utilizadas**

* **React Native (Expo)**
* **React Navigation**
* **Context API** (ThemeContext)
* **i18next / react-i18next**
* **AsyncStorage**
* **Fetch API** para comunicação com backend

Backend utilizado:

```
https://health-hub-ef44.onrender.com/api/
```

---

## 📦 **Como Instalar o Projeto**

### 🔽 1. Clonar o repositório

```
git clone SEU_REPOSITORIO.git
cd SEU_PROJETO
```

### 🧩 2. Instalar dependências

```
npm install
```

ou

```
yarn install
```

### ⚙️ 3. Verificar problemas com expo-doctor

```
npx expo-doctor
```

---

## ▶️ **Como Rodar o Projeto**

### Para rodar no Expo Go

⚠️ Funções que dependem de notificações push **não funcionam** no Expo Go.

```
npx expo start
```

Abra o QR Code no seu celular.

### Para rodar em build de desenvolvimento

Necessário para notificações e módulos nativos:

```
expo run:android
expo run:ios
```
---

## 🔗 **Integração com a API**

O aplicativo se comunica com a API através de rotas como:

### 🔍 Buscar usuário por e-mail

```
GET /api/usuarios/email/{email}
```

### ✏️ Atualizar usuário

```
PUT /api/usuarios/{id}
```

### ❌ Deletar usuário

```
DELETE /api/usuarios/{id}
```

Todas as requisições usam `fetch` e tratam erros adequadamente.

---

