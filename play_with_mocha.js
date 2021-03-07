
describe('Account Features', function () {

    before (function (){
        console.log("BEFORE ALL TEST CASES");
    })

    after(function() {
        console.log("AFTER ALL TEST CASES")
    })

    beforeEach(function () {
        console.log("BEFORE A TEST CASE");
    })

    afterEach(function () {
        console.log("AFTER A CASE CASE");
    })

    it('should show error when email is missing', function () {
        console.log("First test case");
    })

    it('should create an account successfully', function () {
        console.log("Second test case");
    })
})