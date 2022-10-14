/// <reference types="cypress"/>

context('searchPage', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })
    it('should see the search page', ()=>{
        cy.get('h1').contains('Search')
    })
})

export {}