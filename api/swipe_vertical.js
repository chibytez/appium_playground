describe('Learning API', () => {

    it('should swipe vetically', () => {

        const FORMS_ICON_HOME_SCREEN = '~Forms'
        const ACTIVE_BUTTON = '~button-Active'
        const FORM_HEADER_TXT = '~Forms-screen'

        // click on form icon
        $(FORMS_ICON_HOME_SCREEN).click()

        // swipe up vertically
        const {height} = driver.getWindowSize()
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endpointPercentage = 10;

        const anchor  = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endpointPercentage / 100

        // Touch on screen before doing touch action
        $(FORM_HEADER_TXT).click()

        // press on start point, wait 1s, moveto endpoint, release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                   x: anchor,
                   y: endPoint
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])

        // click on active button
        $(ACTIVE_BUTTON).click()

    });
});