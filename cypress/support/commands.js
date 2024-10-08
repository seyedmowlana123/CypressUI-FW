// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { onLoginPage } from "../page_objects/loginPage"
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loadLoginPage', ()=>{
    cy.visit("https://app.stg.cowrie.world/#/login")
})

Cypress.Commands.add('Login', (username, password)=>{
    onLoginPage.loginToApp(username, password)
})

Cypress.Commands.add('shouldBeVisible', (element)=>{
    cy.get(element).should('be.visible')
})
