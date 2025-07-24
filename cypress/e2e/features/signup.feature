Feature: Cadastro de usuário

  Scenario: Usuário realiza cadastro com sucesso
    Given que estou na página inicial
    When acesso a página de cadastro
    And preencho os dados obrigatórios do formulário de cadastro
    Then devo visualizar uma mensagem de conta criada com sucesso