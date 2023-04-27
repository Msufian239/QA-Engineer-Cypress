describe('Adding a new computer', () => {

  beforeEach(() => {
    // Run this code before each test
  cy.visit('https://computer-database.gatling.io/computers');
  cy.wait(2000)
  });
// Adding a new computer with valid data, ensuring that the computer is successfully created.
  it('Adds a new computer with valid data', () => {
    cy.get('#add').click()
    cy.get('#name').type('New Computer')
    cy.get('#introduced').type('2022-01-01')
    cy.get('#discontinued').type('2023-01-01')
    cy.get('#company').select('Apple Inc.')
    cy.get('.actions > [type="submit"]').click()
    cy.wait(10000)
    cy.contains('Done ! Computer New Computer has been created')
  })
//Attempting to add a new computer with invalid data, ensuring that an error message is displayed.
  it('Displays error message when adding a new computer with invalid data', () => {
    cy.get('#add').click()

    cy.get('.actions > [type="submit"]').click()
    cy.contains('Computer name')
    cy.contains('Introduced date')
  })
})
