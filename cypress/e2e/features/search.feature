Feature: Pesquisa de produtos

  Scenario: Usuário realiza uma pesquisa por produto
    Given que estou na página inicial
    When busco pelo termo "T-shirt"
    Then produtos relacionados à busca devem ser exibidos