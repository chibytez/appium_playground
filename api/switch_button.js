describe('Learning API', () => {
    it ('should toggle switch button', () => {
        const FORM_ICON_SCREEN = '~Forms'
        const TOOGLE_SWITCH = '~switch'

        // go to form field
        $(FORM_ICON_SCREEN).click()

        // toggle the switch button
        $(TOOGLE_SWITCH).click()

        // wait a little to see the result
        browser.pause(6000)
    })
})