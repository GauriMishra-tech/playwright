import { Elements } from "../src/pages/elements"
import { Forms } from "../src/pages/forms"
import test from "@playwright/test"
test.describe('Validate elements', () => {
    test.beforeEach(async({page}) => {
        await page.goto('https://demoqa.com/');
        //cy.visit(Cypress.env("baseUrl"))
    }),
    test('ValidateElements', () => {
        const elements = new Elements()
        elements.validateText()
        elements.validateCheckBox()
        elements.validateRadioButton()
        elements.validateWebTables()
        elements.validateButtons()
        elements.validateLinks()
        elements.validateBrokenImageAndLink()
        elements.validateUploadAndDownload()
        elements.validateDynamicProperties()
        elements.validate()
    })
    test('Validate Forms', () => {
        const forms = new Forms()
        forms.validateForms()
    })
})