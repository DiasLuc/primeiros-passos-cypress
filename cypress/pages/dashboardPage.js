class DashboardPage{
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            path: '/web/index.php/dashboard/index',
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }
        return selectors
    }

    checkInDashboard(){
        cy.location('pathname').should('equal', this.selectorsList().path)
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}

export default DashboardPage