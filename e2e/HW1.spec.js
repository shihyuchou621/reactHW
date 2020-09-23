describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000');
    for (let i = 0; i < 10; i++) {
      cy.get('button').click();
      cy.get('button').contains(`counter: ${i + 1}`);
    }
  });
});