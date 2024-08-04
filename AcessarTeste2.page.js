import AcessarTeste1Elements from "../elements/AcessarTeste1Elements"


class AcessarTeste2Page {

    static acessarPaginaTeste2() {
        cy.visit('https://marcosqa.github.io/localhost2/')

    }

    static preencherCamposDoFormulario() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Celular Samsumg')
        AcessarTeste1Elements.inputPrecoProduto().type('1.800')
        AcessarTeste1Elements.inputValidade().select('31/12/2021')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        cy.wait(5000)
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')

    }

    static validarFormularioComCampoVazio() {

        AcessarTeste1Elements.btnAdicionarProduto().click()

    }

    static validarDataPosterior() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Celular Apple2')
        AcessarTeste1Elements.inputPrecoProduto().type('4,850')
        AcessarTeste1Elements.inputValidade().select('02/09/2024')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')

        cy.screenshot('AcessarTeste2');
        cy.wait(1000)

    }

    static validarPrecoMenorQueZero() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Notebook Asus D5')
        AcessarTeste1Elements.inputPrecoProduto().type('-1')
        AcessarTeste1Elements.inputValidade().select('31/12/2021')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')


        cy.screenshot('AcessarTeste2');
        cy.wait(1000)

    }

    static validarCampoPrecoComLetraCaracteres() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Notebook Lenovo Ideapad')
        AcessarTeste1Elements.inputPrecoProduto().type('teste@m*')
        AcessarTeste1Elements.inputValidade().select('31/12/2021')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')


        cy.screenshot('AcessarTeste2');
        cy.wait(1000)

    }

    static validarCampoNomeDoProdutoComCaracteres() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Asus#$#%#teste')
        AcessarTeste1Elements.inputPrecoProduto().type('1,200')
        AcessarTeste1Elements.inputValidade().select('31/12/2021')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')


        cy.screenshot('AcessarTeste2');
        cy.wait(1000)


    }

}


export default AcessarTeste2Page