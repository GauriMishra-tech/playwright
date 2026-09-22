import { Elements } from "../src/pages/elements"
import { Forms } from "../src/pages/forms"
import { test } from "@playwright/test"

test.describe('Validate tests', () => {
    test.beforeEach(async({page}) => {
        await page.goto('https://demoqa.com/frames');
    }),
    test('Validate elements', async ({page}) => {
        const elements = new Elements(page)
        await elements.validateText()
        await elements.validateCheckBox()
        await elements.validateRadioButton()
        await  elements.validateWebTables()
        await elements.validateButtons()
        await elements.validateLinks()
        await elements.validateBrokenImageAndLink()
        await elements.validateUploadAndDownload()
        await elements.validateDynamicProperties()
        await elements.validateAlerts()
    });
    test('Validate Forms', async ({page}) => {
        const forms = new Forms(page)
        await forms.validateForms()
    })
})