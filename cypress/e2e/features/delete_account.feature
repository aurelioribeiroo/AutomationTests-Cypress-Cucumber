Feature: Exclusão de conta

  Scenario: Usuário exclui sua conta
    Given que estou logado
    When acesso a opção de exclusão de conta
    Then minha conta deve ser excluída com sucesso