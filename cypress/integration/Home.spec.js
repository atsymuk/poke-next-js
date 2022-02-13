describe('Home page', () => {
  it('should open home page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('Welcome to POKE NEXT JS!')
  })
})
