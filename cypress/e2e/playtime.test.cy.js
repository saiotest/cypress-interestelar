describe('template spec', () => {
	it('passes', () => {
		cy.visit('/')
		const { username, password } = Cypress.env('loginCredentials')
		cy.get('[name="username"').type(username)
		cy.get('[name="password"').type(password)

		cy.get('button').contains('Login').click()

		cy.url().should('include', '/dashboard')
	})
})
