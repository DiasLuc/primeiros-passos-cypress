class MyInfoPage {
    selectorsList() {
        const selectors = {
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
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().fNameField).clear().type(firstName)
        cy.get(this.selectorsList().mNameField).clear().type(middleName)
        cy.get(this.selectorsList().lNameField).clear().type(lastName)
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', "Successfully Updated")
        cy.get('.oxd-toast-close')
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseNum, driversLicenseDate){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNum)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', "Successfully Updated")
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorsList().dropdownArrow).eq(0).click()
        cy.contains("Senegalese").click()
        cy.get(this.selectorsList().dropdownArrow).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('1802-10-09')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderRadio).click({force: true})
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', "Successfully Updated")
        cy.get('.oxd-toast-close')
        cy.get(this.selectorsList().dropdownArrow).eq(2).click()
        cy.get('.oxd-select-dropdown > :nth-child(8)').click()
        cy.get(this.selectorsList().testField).clear().type("TESTFIELD")
        cy.get(this.selectorsList().submitButton).eq(1).click()
    }
    
}


export default MyInfoPage