/// <reference types="cypress"/>

context('searchPage', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })
    it('should be able type ingredients in input field and search for the result', ()=>{
        cy.get('input').type('apple')
        cy.get('button').click()
    })
})