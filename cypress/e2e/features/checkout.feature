Feature: Finalização de compra

  Scenario: Usuário finaliza a compra com sucesso
    Given que estou com itens no carrinho
    When acesso a página de checkout
    And informo os dados de pagamento
    Then a compra deve ser finalizada com sucesso