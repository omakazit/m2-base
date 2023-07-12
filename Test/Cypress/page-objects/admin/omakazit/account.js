import admin from "../../../fixtures/admin";

export class OmakazitAdminAccount {
    static login() {
        cy.visit(admin.adminUrl);
        cy.get('#username').type(admin.adminLogin.username)
        cy.get('#login').type(admin.adminLogin.password)
        cy.get('.action-login').click()
        cy.wait(3000)
    }
}
