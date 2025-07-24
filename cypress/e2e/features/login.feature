Feature: Login

  Scenario: Login com usuário válido
    Given que estou na página inicial
    When clico em SignupLogin
    And preencho o login com "testuser@example.com" e senha "123456"
    Then devo ver o usuário logado como "testuser"
