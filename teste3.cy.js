// <reference types="cypress" />

import AcessarTeste3Page from "../../support/pages/AcessarTeste3.page"


it('Acessar pagina de teste2 e preencher formulario', () => {
    AcessarTeste3Page.acessarPaginaTeste3()
    AcessarTeste3Page.preencherCamposDoFormulario()
    cy.wait(5000)

})

it('Validar formulario com campo vazio', () => {
    AcessarTeste3Page.acessarPaginaTeste3()
    AcessarTeste3Page.validarFormularioComCampoVazio()


})

it('Validar data posterior', () => {
    AcessarTeste3Page.acessarPaginaTeste3()
    AcessarTeste3Page.validarDataPosterior()


})

it('Validar preco menor que zero', () => {
    AcessarTeste3Page.acessarPaginaTeste3()
    AcessarTeste3Page.validarPrecoMenorQueZero()

})

it('Validar se o campo preco esta aceitando letra e caracteres', () => {
    AcessarTeste3Page.acessarPaginaTeste3()
    AcessarTeste3Page.validarCampoPrecoComLetraCaracteres()

})



it('Validar se o campo nome do produto esta aceitando caracteres', () => {
    AcessarTeste3Page.acessarPaginaTeste3()
    AcessarTeste3Page.validarCampoNomeDoProdutoComCaracteres()

})







