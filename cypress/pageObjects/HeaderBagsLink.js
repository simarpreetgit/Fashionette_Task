class HeaderBagsLink {
  getBagLink() {
    cy.get("a[href='https://www.fashionette.de/taschen']").click({
      force: true,
    })
  }
  addBagToBasket() {
    cy.get('.flex-grid__third:visible').each(($li, index, $list) => {
      if ($li.text().includes('Love Moschino')) {
        cy.wrap($li).click()
      }
    })
    cy.get('.product-details__description .btn .btn__content').click({
      force: true,
    })
    cy.get('.cart-amount').should('have.length', 1)
    cy.get('.minicart-dialog__footer .btn .btn__content').click({ force: true })
  }
  getVoucherButton() {
    cy.get('.cart__sum__voucher-link').click({ force: true })
    cy.get('.inputfield__input').type(data.voucher)
    cy.get('.btn__submit').eq(0).click({ force: true })
    cy.get('.cart__voucher__error').should(
      'include.text',
      'Der Gutschein "qachallenge" ist ungültig',
    )
  }
  getRemoveButton() {
    cy.get('.cart-item--remove .icon--trash-can').click({ force: true })
    cy.get('.box--headline__slim').should(
      'have.text',
      'Oh, Dein Warenkorb ist leer...',
    )
  }
}

export default HeaderBagsLink
