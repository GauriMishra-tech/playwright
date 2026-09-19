import selector from "../selectors/selectors.json"
import testdata from "../fixtures/testdata.json"
export class Forms{
    validateForms(){
        cy.get('span').contains('Forms').click()
        cy.get('span').contains('Practice Form').click()
        cy.get(selector.inputFirstName).type(testdata.firstName)
        cy.get(selector.inputLastName).type(testdata.lastName)
        cy.get(selector.inputEmail).type(testdata.email)
        cy.get(selector.genderRadioBtn).click()
        cy.get(selector.inputMobileNo).type(testdata.mobileNumber)
        cy.get(selector.inputDate).click()
        cy.get(selector.selectYear).select('1980')
        cy.get(selector.selectMonth).select('May')
        cy.get(selector.selectDay).click()
        cy.get(selector.inputSubject).type(testdata.subject[0] +"{Enter}"+ testdata.subject[1] +"{Enter}")
        cy.get(selector.hobbiesCheckbox).click()
        cy.get('#uploadPicture').selectFile('/Users/gaurimishra/Desktop/qa/assessment/cypress/fixtures/download.jpeg',{force:true})
        cy.get(selector.inputCurrentAddress).type(testdata.currentAddress)
        cy.get(selector.selectState).type("N {Enter}")
        cy.get(selector.selectCity).type("D {Enter}")
        cy.get('button').contains('Submit').click()
        cy.get('.modal-content div').contains('Thanks for submitting the form').should("be.visible")
        cy.get('tr>td').contains(testdata.firstName+' '+testdata.lastName)
        cy.get('tr>td').contains(testdata.email)
        cy.get('tr>td').contains(testdata.mobileNumber)
        cy.get('tr>td').contains(testdata.subject[0]+", "+testdata.subject[1])
        cy.get('tr>td').contains(testdata.currentAddress)
        cy.get('tr>td').contains('download.jpeg')

    }

}