/// <reference types="cypress"/>

context('searchPage', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })
    it('should see the search page', ()=>{
        cy.get('input').type('apple')
        cy.get('button').click()
        cy.get('img')
        cy.get('.css-11crptk').contains('apple')
    })
})