import userData from "../fixtures/users/userData.json"

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
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
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

  it('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
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