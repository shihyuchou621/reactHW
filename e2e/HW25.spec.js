describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000');
    // for (let i = 0; i < 10; i++) {
    //   cy.get('button').click();
    //   cy.get('button').contains(`counter: ${i + 1}`);
    // }
    cy.contains('Modal').click();
    cy.wait(500);
    cy.contains('關閉').click();
    cy.wait(500);

    cy.contains('top').click();
    cy.wait(500);
    cy.contains('關閉').click();
    cy.wait(500);

    cy.contains('header').click();
    cy.wait(500);
    cy.contains('關閉').click();
    cy.wait(500);

    cy.contains('top + animation').click();
    cy.contains('關閉').click();
  });
});