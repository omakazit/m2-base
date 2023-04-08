import admin from "../../../../fixtures/admin"

describe('Admin menu test', () => {
    it('Can see Omakazit menu in configuration page', () => {
        cy.visit(admin.adminUrl);
        cy.get('#username').type(admin.adminLogin.username)
        cy.get('#login').type(admin.adminLogin.password)
        cy.wait(3000)
        cy.get('.action-login').click()
        cy.wait(3000)
        cy.get('#menu-magento-backend-stores').click()
        cy.get('.item-system-config').click()
        cy.wait(3000)
        cy.contains('Omakazit Extensions').should('exist')
    })
})
