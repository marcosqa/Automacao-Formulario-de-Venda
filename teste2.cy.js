// <reference types="cypress" />

import AcessarTeste2Page from "../../support/pages/AcessarTeste2.page"


it('Acessar pagina de teste1 e preencher formulario', () => {
    AcessarTeste2Page.acessarPaginaTeste2()
    AcessarTeste2Page.preencherCamposDoFormulario()
    cy.wait(5000)

})

it('Validar formulario com campo vazio', () => {
    AcessarTeste2Page.acessarPaginaTeste2()
    AcessarTeste2Page.validarFormularioComCampoVazio()


})

it('Validar data posterior', () => {
    AcessarTeste2Page.acessarPaginaTeste2()
    AcessarTeste2Page.validarDataPosterior()


})

it('Validar preco menor que zero', () => {
    AcessarTeste2Page.acessarPaginaTeste2()
    AcessarTeste2Page.validarPrecoMenorQueZero()

})

it('Validar se o campo preco esta aceitando letra e caracteres', () => {
    AcessarTeste2Page.acessarPaginaTeste2()
    AcessarTeste2Page.validarCampoPrecoComLetraCaracteres()

})



it('Validar se o campo nome do produto esta aceitando caracteres', () => {
    AcessarTeste2Page.acessarPaginaTeste2()
    AcessarTeste2Page.validarCampoNomeDoProdutoComCaracteres()

})







