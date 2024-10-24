describe('Test DemoQA Practice Form section', () => {
    it('Entering credentials', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('include', 'demoqa')
        cy.get('#firstName').click().type('Edgar')
        cy.get('#lastName').click().type('Alaverdyan')
        cy.get('#userEmail').click().type('test@gm.com')
        cy.get('#gender-radio-1').check({ force: true })
        cy.get('#gender-radio-1').should('be.checked')
        cy.get('#userNumber').click().type('9955656566')
        cy.get('#hobbies-checkbox-1').check({force: true})
        cy.get('#currentAddress').click().type('Tigran Mets 71 str')
        cy.get('#submit').click()
        cy.get('.modal-content').should('be.visible').contains('Thanks for submitting the form')
        cy.get('#closeLargeModal').click({ force: true })
        })
})