describe('User Onboarding App', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })

    const name =()=> cy.get('input[name=name]')
    const email = () => cy.get('input[name=email]')
    const password = () => cy.get('input[name=password]')
    const terms = () => cy.get('input[name=terms]')

    )

    it('it is working', () => {
        name().should('exist')
        email().should('exist')
        password().should('exist')
        terms().should('exist')

    })
})

describe('input texts are working', ()=> {
    it('can type name' () => {
        name()
            .should('have.value', '')
            .type('Doug')
            .should('have.value', 'Doug')
    })
    describe('input texts are working', ()=> {
        email('can type name' () => {
            email()
                .should('have.value', '')
                .type('doug@gmail.com')
                .should('have.value', 'doug@gmail.com')
        })
        describe('input texts are working', ()=> {
            it('can type name' () => {
                password()
                    .should('have.value', '')
                    .type('Hello')
                    .should('have.value', 'Hello')
            })
})

describe('checkbox works', ()=> {
    it('checkboxes work!', () => {
        terms()
            .check()
            .should('be checked')
            .uncheck()
            .should('not.be.checked')
    })
})