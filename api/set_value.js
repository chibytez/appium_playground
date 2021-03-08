
describe('Learning Webdriver APi', () => {

    it('should input username and password', () => {
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'
        const PASSWORD_TXT_FIELD = '~input-password'
        const LOGIN_BTN = '~button-LOGIN'

        $(LOGIN_ICON_HOME_SCREEN).click()

        $(EMAIL_TXT_FIELD).setValue('chibuike@gmail.com')

        $(PASSWORD_TXT_FIELD).setValue('password')

        $(LOGIN_BTN).click()
        
        browser.pause(3000)
    })
}); 