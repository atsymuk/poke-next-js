describe('Details page', () => {
  it('should open details page', () => {
    cy.visit('http://localhost:3000/pokemon/1')

    cy.get('h1').contains('bulbasaur')
  })

  it('should redirect to 404 if pokemon is not found', () => {
    cy.visit('http://localhost:3000/pokemon/asdfasdf')

    cy.location('pathname').should('eq', '/404')
  })
})
