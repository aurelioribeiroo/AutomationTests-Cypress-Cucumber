Feature: Navegação por categorias

  Scenario: Usuário navega entre as categorias de produtos
    Given que estou na página inicial
    When seleciono uma categoria de produto
    Then produtos da categoria devem ser exibidos