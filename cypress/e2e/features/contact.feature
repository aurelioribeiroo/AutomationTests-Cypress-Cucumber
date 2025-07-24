Feature: Contato via formulário

  Scenario: Usuário envia uma mensagem via formulário de contato
    Given que estou na página inicial
    When acesso a página de contato
    And preencho o formulário com nome, email e mensagem
    Then devo visualizar uma mensagem de sucesso de envio