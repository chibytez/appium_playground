describe('Learning API', () => {

    it('should swipe horizontally', () => {
        const SWIPE_HORIZONTAL_ICON = '~Swipe';
        const SWIPE_HEADER_TXT = '~Swipe-screen'

        // click on he swipe icon
        $(SWIPE_HORIZONTAL_ICON).click()

        // touch on the screen
        $(SWIPE_HEADER_TXT).click();

        // swipe from right to left
        const anchor_percentage = 50
        const start_point_percentage = 90
        const end_point_perentage = 10

        const {height, width} = driver.getWindowSize()
        const anchor = height * anchor_percentage / 100
        const start_point = width * start_point_percentage / 100
        const end_point = width * end_point_perentage / 100

        for (let swipe_time = 0; swipe_time < 5; swipe_time++) {
            driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: start_point,
                        y: anchor
                    }
                },
                {
                    action: 'wait',
                    options: {ms: 1000}
                },
                {
                    action: 'moveTo',
                    options: {
                        x: end_point,
                        y: anchor
                    }
                },
                {
                  action: 'release',
                  option: {}  
                }
            ])
    
        }
    })
})