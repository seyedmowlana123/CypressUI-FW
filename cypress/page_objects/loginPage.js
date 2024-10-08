/// <reference types="cypress" />

class loginPage{
    loginToApp(username, password){
       
        cy.get('[placeholder="johndoe@workemail.com"]').type(username)
        cy.get('[placeholder="Password"]').type(password)
        cy.get('[type="submit"]').click()
    }
}

export const onLoginPage = new loginPage()