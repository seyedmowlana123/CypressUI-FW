import { onLoginPage } from "../page_objects/loginPage"

describe('Sample Test Suite', ()=>{
 //Assigning the env variable which was received from package.json file
    const environment = Cypress.env('configFile')

    beforeEach('Load Application', ()=>{
        //cy.loadLoginPage()
        cy.visit(Cypress.env(environment).URL)
    })

    it('Login Functionality', ()=>{
        cy.Login(Cypress.env(environment).username, Cypress.env(environment).password)
        cy.shouldBeVisible('[type="submit"]')
    })
})