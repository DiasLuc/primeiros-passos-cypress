import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    
    fNameField: "[name='firstName']",
    mNameField: "[name='middleName']",
    lNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    dropdownArrow: ".oxd-select-text--arrow",
    genderRadio: "[type='radio'][value='2']",
    testField: "[options='']"

  }
  
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkInDashboard()
    
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    cy.get(loginPage.selectorsList().wrongCredentialAlert)
  })

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkInDashboard()
    menuPage.accessMyInfo()

    cy.get(selectorsList.fNameField).clear().type("FNameTest")
    cy.get(selectorsList.mNameField).clear().type("MNameTest")
    cy.get(selectorsList.lNameField).clear().type("LNameTest")
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeID')
    cy.get(selectorsList.genericField).eq(4).clear().type('OTHER ID')
    cy.get(selectorsList.genericField).eq(5).clear().type('LICENSENUMBER')
    cy.get(selectorsList.dateField).eq(0).clear().type('2103-10-09')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', "Successfully Updated")
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.dropdownArrow).eq(0).click()
    cy.contains("Senegalese").click()
    cy.get(selectorsList.dropdownArrow).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1802-10-09')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genderRadio).click({force: true})
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', "Successfully Updated")
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.dropdownArrow).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(8)').click()
    cy.get(selectorsList.testField).clear().type("TESTFIELD")
    cy.get(selectorsList.submitButton).eq(1).click()
  })
})