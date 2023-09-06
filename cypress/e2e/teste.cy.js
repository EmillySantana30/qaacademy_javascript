describe('Validar site Google', () => {
   it('Pesquisar onça no Google', () => {
    cy.visit('https://www.google.com.br/')
    cy.get('[id="APjFqb"]').click();
    cy.get('[id="APjFqb"]').type('onça WWF Brasil').type('{ENTER}');
    cy.get('[href="https://www.wwf.org.br/natureza_brasileira/areas_prioritarias/pantanal/nossas_solucoes_no_pantanal/protecao_de_especies_no_pantanal/onca_pintada/"]', { timeout: 6000 }).eq(0).click({ force: true });
    cy.origin('https://www.wwf.org.br', () => {
    cy.get('[src="//cdnassets.panda.org/_skins/international/img/logo.png"]', { timeout: 6000 }).should('be.visible')
    })

  })
})

//1- Pesquisar por uma imagem, exibir o resultado, clicar no link da imagem e validar que a imagem está sendo exibida;
describe('Teste Pesquisa de Imagem', () => {
it.only('Pesquisar Harry Potter no Google', () => {
  cy.visit('https://www.google.com/search?q=google+imagens&oq=google+imagens&aqs=chrome.0.69i59j0i512j0i3i10j0i512l4j69i60.2048j0j9&sourceid=chrome&ie=UTF-8')
  cy.get('[id="APjFqb"]').click();
  cy.get('[id="APjFqb"]').clear().type('Harry Potter').type('{ENTER}');
  cy.get('[id="dimg_33"]', { timeout: 10000 }).eq(0).click({ force: true });
  
  })

})

//2 - Acessar um ecommerce e adicionar um item ao carrinho


//3- Validar que o item foi adicionado no carrinho
