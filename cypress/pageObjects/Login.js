class Login {
  getLoginDetails() {
    cy.get('.header__user-icon').click({ force: true })
    cy.get("input[type='email']:visible").type(data.email_address)
    cy.get("input[type='password']").type(data.password)
    cy.get('.btn__submit').eq(0).click({ force: true })
  }

  getUserDetails() {
    cy.url().should('include', '/account/customer')
    cy.get('.account-firstname').should('include.text', 'Hallo john!')
  }
}
export default Login
