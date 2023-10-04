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
    cy.get(elementosLoja.mercadoria).eq(0).click({force: true});
    cy.get(elementosLoja.carrinho).click({force:true});
    cy.get (elementosLoja.adicionar, {timeout:70000}).click({force:true});
    cy.get (elementosLoja.paginaCarrinho).click({force:true});
    })
When("remove do carrinho", function() {
    cy.get(elementosLoja.remover,{timeout:7000}).eq(2).click();
   
})
Then("preenche os dados da compra", function(){
    cy.get(elementosLoja.compra).should('be.visible').click();
    cy.get(elementosLoja.email).type('emillyandradesantana@hotmail.com').type('{ENTER}')
})

