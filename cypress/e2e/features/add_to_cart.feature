Feature: Adição de produtos ao carrinho

  Scenario: Usuário adiciona produto ao carrinho
    Given que estou na página inicial
    When visualizo um produto
    And clico em "Add to cart"
    Then o produto deve ser adicionado ao carrinho com sucesso