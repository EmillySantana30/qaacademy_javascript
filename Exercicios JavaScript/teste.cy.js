// describe('Validar site Google', () => {
//   it('Pesquisar onça no Google', () => {
//     cy.visit('https://www.google.com.br/')
//     cy.get('[id="APjFqb"]').click();
//     cy.get('[id="APjFqb"]').type('onça WWF Brasil').type('{ENTER}');
//     cy.get('[href="https://www.wwf.org.br/natureza_brasileira/areas_prioritarias/pantanal/nossas_solucoes_no_pantanal/protecao_de_especies_no_pantanal/onca_pintada/"]', { timeout: 6000 }).eq(0).click({ force: true });
//     cy.origin('https://www.wwf.org.br', () => {
//       cy.get('[src="//cdnassets.panda.org/_skins/international/img/logo.png"]', { timeout: 6000 }).should('be.visible')
//     })

//   })
// })

//1- Pesquisar por uma imagem, exibir o resultado, clicar no link da imagem e validar que a imagem está sendo exibida;
describe("Exercicios", () => {
  it('Exercicio 1', () => {
    const URL = "https://www.google.com";
    const campoDePesquisa = '[class="gLFyf"]';
    const conteudo = "Casa na natureza";
    const imagem = '[class="uhHOwf BYbUcd"]';
    const validadorDaPesquisa = 'Airbnb Newsroom';
    cy.visit(URL);
    cy.get(campoDePesquisa).click();
    cy.get(campoDePesquisa).type(conteudo).type("{ENTER}");
    cy.get(imagem).eq(0).click();
    cy.contains(validadorDaPesquisa).should('be.visible');
  })

  //2 - Acessar um ecommerce e adicionar um item ao carrinho
  describe('Teste Ecommerce', () => {
    it.only('Adicionar item no carrinho', () => {
      const URL = 'https://www.madeiramadeira.com.br/'
      const promocoesDoDia = '[class="cav--c-gTHiXu"]'
      const comoda = '[class="cav--c-gNPphv cav--c-gNPphv-epiGtV-textStyle-bodySmallRegular cav--c-gNPphv-iAsWAM-css"]'
      const adicionarCarrinho = '[class="cav--c-iOefvc cav--c-iOefvc-fGlPcc-variant-primary cav--c-iOefvc-ieZmGuu-css"]'
      const validarProdutoCarrinho = '[class="cav--c-gNPphv cav--c-gNPphv-cdLabr-textStyle-bodyMediumSemibold cav--c-gNPphv-iDlqYz-css"]'

      cy.visit(URL)
      cy.get(promocoesDoDia).eq(0).click({ force: true });
      cy.get(comoda).eq(0).click({ force: true });
      cy.get(adicionarCarrinho).eq(0).click({ force: true });
      cy.get(validarProdutoCarrinho).should('be.visible')

    })
  })
})
