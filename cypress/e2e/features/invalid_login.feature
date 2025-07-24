Feature: Login com dados inválidos

  Scenario: Tentativa de login com credenciais inválidas
    Given que estou na página de login
    When insiro email e senha inválidos
    Then devo visualizar uma mensagem de erro