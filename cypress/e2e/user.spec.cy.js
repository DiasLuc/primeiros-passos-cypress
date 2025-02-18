import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('User Orange HRM Tests', () => {
  
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkInDashboard()
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails("John", "D.", "Rockefeller")
    myInfoPage.fillEmployeeDetails("employeeID", "OtherID", "DLNUMBER", "2100-01-05")
    myInfoPage.fillStatus()
    
  })
})