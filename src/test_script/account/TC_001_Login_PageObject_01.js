import LoginPage from '../../page_objects/account/Login'

describe('Account Function', () => {
    
    it('should raise an error for wrong credentials', () => {

        // 1. click on login icon from home page
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. use login page object to interact with element
        LoginPage.email_txt_field.setValue("teo");
        LoginPage.password_txt_field.setValue("");
        LoginPage.login_btn.click()

        browser.pause(2000)
    })
})