class sampleLocators{

    someSmapleLocators(){
    //Cypress has different syntax for locators. No xpaths in cypress.
    //By Tag Name
    cy.get('input')

    //By ID
    cy.get('#inputEmail1')

    //By Class Name
    cy.get('.input-full-width')

    //By Attribute Name
    cy.get('[placeholder]')

    //By Attribute Name & Value
    cy.get('[placeholder="Email"]')

    //By Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //By Tag name & attribute with value
    cy.get('input[placeholder="Email"]')

    //By two different attributes
    cy.get('[placeholder="Email"][type="email"]')

    //By tag name, attribute with value, ID & Class Name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
    }
   
}