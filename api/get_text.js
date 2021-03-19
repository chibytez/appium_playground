describe('Learning WebdriverIp API', () => {
      
      it('learn getValue API', () =>{
          const FORM_ICON_SCREEN = '~Forms'
          const INPUT_TXT = '~text-input'
          const INPUT_TXT_DISPLAYED = '~input-text-result'
         
          // click on Form from the screen
          $(FORM_ICON_SCREEN).click()

          //try to input some values in text field
          $(INPUT_TXT).setValue("chibuike")

         //Get the value from the  field
         let display_txt = $(INPUT_TXT_DISPLAYED).getText()

         //print out the value
         console.log("your input is:", display_txt);
         browser.pause(6000)

      })
  })