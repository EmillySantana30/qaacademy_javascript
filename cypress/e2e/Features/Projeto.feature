Feature: Ecommerce
    Scenario: Compra de produto
        Given que o usuario esta no site
        When pesquisa por um produto
        When adiciona no carrinho
        When remove do carrinho 
        Then preenche os dados da compra