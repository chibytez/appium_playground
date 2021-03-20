
describe('Learning API', () => {

    it('should take screen shot', () => {
        const FORM_ICON_SCREEN = '~Forms'
        const TOOGLE_SWITCH = '~switch'

        // go to form field
        $(FORM_ICON_SCREEN).click()

        // take a picture for a whole screen
        browser.saveScreenshot("./screenshot/API_Learning_saveScreenShots.png")

         // take a specific picture(eg: switch button)
         $(TOOGLE_SWITCH).saveScreenshot("./screenshot/Switch_button.png")
         browser.saveScreenshot("./screenshot/API_Learning_saveScreenShots.png")
    })
})