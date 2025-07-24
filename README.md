# 🧪 Projeto de Testes Automatizados - Cypress + Cucumber

Este projeto automatiza testes end-to-end no site [https://www.automationexercise.com](https://www.automationexercise.com), utilizando:

- ✅ Cypress
- ✅ Cucumber (BDD)
- ✅ JavaScript
- ✅ Page Object Model (POM)

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/aurelioribeiroo/AutomationTests-Cypress-Cucumber.git
cd AutomationTests-Cypress-Cucumber
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o Cypress com interface

```bash
npx cypress open
```

> Selecione o arquivo `.feature` desejado na interface para rodar o cenário.

### 4. Executar em modo headless (sem interface)

```bash
npx cypress run
```

---

## 📁 Estrutura do projeto

```
cypress/
├── e2e/
│   ├── features/              # Cenários BDD (.feature)
├── pages/                     # Page Objects
├── support/
│   └── step_definitions/      # Steps dos cenários
│   └── e2e.js                 # Arquivo de suporte
cypress.config.js              # Configurações do Cypress e Cucumber
package.json                   # Dependências e scripts
```

---

## 🧱 Tecnologias usadas

- [Cypress](https://www.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- JavaScript (ES6+)
- Node.js

---

## 👨‍💻 Autor

**José Aurélio do Carmo Ribeiro Júnior**  
[LinkedIn](https://www.linkedin.com/in/jos%C3%A9-aurelio-do-carmo-ribeiro-junior-93553490/)  
[GitHub](https://github.com/aurelioribeiroo)

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT.
