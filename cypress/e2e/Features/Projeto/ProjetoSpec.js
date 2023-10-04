/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import { elementosProjeto } from "../../Pages/ProjetoSpec";

const elementosLoja = elementosProjeto;

Given("que o usuario esta no site", function() {
    const URL = "https://www.madeiramadeira.com.br/";
    cy.visit(URL)
})
When("pesquisa por um produto", function() {
    cy.get(elementosLoja.ofertasDoDia).eq(12).click({force: true});
})
When("adiciona no carrinho", function() {
    cy.get(elementosLoja.guardaRoupa, {timeout:5000}).eq(0).click({force: true});
    cy.get(elementosLoja.carrinho,{timeout:5000}).click({force:true});
    cy.get (elementosLoja.adicionar).click({force:true});
    cy.get (elementosLoja.paginaCarrinho,{timeout: 5000}).click({force:true});
})
When("remove do carrinho", function() {
    cy.get(elementosLoja.remover).eq(2).click({force: true});
})
Then("preenche os dados da compra", function(){
    cy.get(elementosLoja.compra,{timeout:5000}).should('be.visible').click({force:true});
    cy.get(elementosLoja.email).type('emillyandradesantana@hotmail.com').type('{ENTER}')
})


// const elementosProjeto = elementos;

// describe('Projeto Automacao', () => {
//     it.only('Deve automatizar uma compra online', () => {
// //Realizar busca de itens
// cy.visit(URL)
// // Adição de um item no carrinho
// cy.get(ofertasDoDia)
// //Alterar a quantidade de um item no carrinho
// cy.get('h2 [class="cav--c-gNPphv cav--c-gNPphv-epiGtV-textStyle-bodySmallRegular cav--c-gNPphv-iAsWAM-css"]').eq(1).click();
// cy.get ('button[class="cav--c-iOefvc cav--c-iOefvc-kAkgtL-variant-secondary cav--c-iOefvc-icLCAaD-css"]').click();
// cy.get('button[class="cav--c-iOefvc cav--c-iOefvc-cYmIRc-variant-ghost cav--c-iOefvc-iPJLV-css"]').eq(1).click();
// //Remoção de item no carrinho
// cy.get ('button[class="cav--c-iOefvc cav--c-iOefvc-cYmIRc-variant-ghost cav--c-iOefvc-iPJLV-css"]').eq(1).click();
// //Ir para a tela de checkout e preencher os dados necessarios para concluiir a compra
// cy.get ('button[class="cav--c-iOefvc cav--c-iOefvc-fGlPcc-variant-primary cav--c-iOefvc-dMKlZS-responsive-true"]').eq(1).click();