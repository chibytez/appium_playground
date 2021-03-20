
describe('Learning API', () => {
    it('should', () => {
        const FORM_ICON_SCREEN = '~Forms'
        const LOGIN_ICON = '~Login'
        const TOOGLE_SWITCH = '~switch'

        // go to login form 
        $(LOGIN_ICON).click()

        // wait sometimes - 4seconds -> try manully click on the form screen 

        // toggle the switch button
        $(TOOGLE_SWITCH).waitForDisplayed({timeout: 6000})
        $(TOOGLE_SWITCH).click()

        // wait a little to see the result
        browser.pause(2000)
    })
})