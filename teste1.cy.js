/// <reference types="cypress" />

import AcessarTeste1Page from "../../support/pages/AcessarTeste1.page";


it('Acessar pagina de teste1 e preencher formulario', () => {
    AcessarTeste1Page.acessarPaginaTeste1()
    AcessarTeste1Page.preencherCamposDoFormulario()
    cy.wait(5000)

})

it('Validar formulario com campo vazio', () => {
    AcessarTeste1Page.acessarPaginaTeste1()
    AcessarTeste1Page.validarFormularioComCampoVazio()


})

it('Validar data posterior', () => {
    AcessarTeste1Page.acessarPaginaTeste1()
    AcessarTeste1Page.validarDataPosterior()


})

it('Validar preco menor que zero', () => {
    AcessarTeste1Page.acessarPaginaTeste1()
    AcessarTeste1Page.validarPrecoMenorQueZero()

})

it('Validar se o campo preco esta aceitando letra e caracteres', () => {
    AcessarTeste1Page.acessarPaginaTeste1()
    AcessarTeste1Page.validarCampoPrecoComLetraCaracteres()

})



it('Validar se o campo nome do produto esta aceitando caracteres', () => {
    AcessarTeste1Page.acessarPaginaTeste1()
    AcessarTeste1Page.validarCampoNomeDoProdutoComCaracteres()

})