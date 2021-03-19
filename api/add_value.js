describe('Learning Webdriver APi', () => {

    it('should addvalue to the api', () => {
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'

        $(LOGIN_ICON_HOME_SCREEN).click()

        $(EMAIL_TXT_FIELD).addValue('chibuike@gmail')
        $(EMAIL_TXT_FIELD).addValue('.com')

        $(EMAIL_TXT_FIELD).setValue('new@gmail.com')


        $(EMAIL_TXT_FIELD).clearValue()
        
        browser.pause(3000)
    })
});  