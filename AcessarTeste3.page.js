import AcessarTeste1Elements from "../elements/AcessarTeste1Elements"


class AcessarTeste3Page {

    static acessarPaginaTeste3() {
        cy.visit('https://marcosqa.github.io/localhost3/')

    }

    static preencherCamposDoFormulario() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Celular Samsumg A32')
        AcessarTeste1Elements.inputPrecoProduto().type('1.899')
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

        AcessarTeste1Elements.inputNomeDoProduto().type('Notebook Asus A32Y')
        AcessarTeste1Elements.inputPrecoProduto().type('4,100')
        AcessarTeste1Elements.inputValidade().select('02/08/2024')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')

        cy.screenshot('AcessarTeste3');
        cy.wait(1000)

    }

    static validarPrecoMenorQueZero() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Notebook Asus A200Ya')
        AcessarTeste1Elements.inputPrecoProduto().type('-1')
        AcessarTeste1Elements.inputValidade().select('31/12/2021')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')


        cy.screenshot('AcessarTeste3');
        cy.wait(1000)

    }

    static validarCampoPrecoComLetraCaracteres() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Notebook Asus A200RT')
        AcessarTeste1Elements.inputPrecoProduto().type('teste@um$e6')
        AcessarTeste1Elements.inputValidade().select('31/12/2021')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')


        cy.screenshot('AcessarTeste3');
        cy.wait(1000)

    }

    static validarCampoNomeDoProdutoComCaracteres() {

        AcessarTeste1Elements.inputNomeDoProduto().type('Asus#$#%#%')
        AcessarTeste1Elements.inputPrecoProduto().type('1,200')
        AcessarTeste1Elements.inputValidade().select('31/12/2021')
        AcessarTeste1Elements.btnAdicionarProduto().click()
        AcessarTeste1Elements.validarNomeFormulario()
            .should('contain', 'Validade')
        AcessarTeste1Elements.validarNomeNoFormulario()
            .should('contain', 'Nome')


        cy.screenshot('AcessarTeste3');
        cy.wait(1000)


    }

}


export default AcessarTeste3Page