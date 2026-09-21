import { Elements } from "../src/pages/elements"
import { Forms } from "../src/pages/forms"
import { test } from "@playwright/test"

//test.describe('Validate elements', () => {
    // test.beforeEach(async({page}) => {
    //     await page.goto('https://demoqa.com/');
    //     //cy.visit(Cypress.env("baseUrl"))
    // }),
    test('ValidateElements', async ({page}) => {
        const elements = new Elements(page);
        // await page.goto('https://demoqa.com/forms');
        // await page.locator('span', {hasText: 'Elements'}).click()
        // await page.getByText('Text Box').click()
        elements.validateText();
        // elements.validateCheckBox()
        // elements.validateRadioButton()
        // elements.validateWebTables()
        // elements.validateButtons()
        // elements.validateLinks()
        // elements.validateBrokenImageAndLink()
        // elements.validateUploadAndDownload()
        // elements.validateDynamicProperties()
        // elements.validate()
    });
    // test('Validate Forms', () => {
    //     const forms = new Forms()
    //     forms.validateForms()
    // })
//})