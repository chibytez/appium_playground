
describe ('Learning Webdriver Api', function () {

    it('should click on login icon successfully', function () {
        const LOGIN_ICON = '~Login'

        $(LOGIN_ICON).click()
        browser.pause(3000)
    });
});