///<reference types = "cypress">
import Login from '../../pageObjects/Login'
import HeaderBagsLink from '../../pageObjects/HeaderBagsLink'
describe('Verify the login page and add to cart via fashionette.de', () => {
  const login = new Login()
  const headerBagslink = new HeaderBagsLink()
  before(() => {
    cy.fixture('userDetails').then((data) => {
      globalThis.data = data
    })
  })
  it('Verfiy item add to basket and voucher link', () => {
    cy.visit('/')
    login.getLoginDetails()
    // handle cookies
    // cy.get('#usercentrics-root').shadow().find('.kDAnxM').click()
    login.getUserDetails()
    headerBagslink.getBagLink()
    headerBagslink.addBagToBasket()
    headerBagslink.getVoucherButton()
    headerBagslink.getRemoveButton()
  })
})
