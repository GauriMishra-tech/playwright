import { Page, expect } from "@playwright/test"
import {selector} from "../selectors/selectors"
import testdata from "../testData/testData.json"
import fs from 'fs';
import path from 'path';
export class Elements{ 
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }
    async validateText(){
        await this.page.getByText('Elements').click()
        await this.page.getByText('Text Box').click()
        await this.page.locator(selector.inputName).fill(testdata.name)
        await this.page.locator(selector.inputEmail).fill(testdata.invalidEmail)
        await this.page.locator(selector.inputCurrentAddress).fill(testdata.currentAddress)
        await this.page.locator(selector.inputPermanentAddress).fill(testdata.permanentAddress)
        await this.page.locator('button', {hasText: 'Submit'}).click()
        await expect(this.page.locator(selector.emailError)).toBeVisible()
        await this.page.locator(selector.inputName).fill(testdata.name)
        await this.page.locator(selector.inputEmail).fill(testdata.email)
        await this.page.locator(selector.inputCurrentAddress).fill(testdata.currentAddress)
        await this.page.locator(selector.inputPermanentAddress).fill(testdata.permanentAddress)
        await this.page.locator('button', {hasText: 'Submit'}).click()
        await expect(this.page.getByText(testdata.name)).toBeVisible()
        await expect(this.page.getByText(testdata.email)).toBeVisible()
        await expect(this.page.locator('p', {hasText: testdata.currentAddress})).toBeVisible()
        await expect(this.page.locator('p', {hasText: testdata.permanentAddress})).toBeVisible()
    }
    async validateCheckBox(){
        await this.page.getByText('Check Box').click()
        await this.page.locator(selector.checkboxExpand).click()
        await this.page.locator(selector.homeCheckbox).click()
        await expect(this.page.locator(selector.homeCheckbox)).toHaveAttribute('aria-checked', 'true')
        await expect(this.page.getByText('You have selected :')).toBeVisible()
        await expect(this.page.locator('.text-success',{hasText:'home'})).toBeVisible()
        await this.page.locator(selector.downloadsCheckbox).click()
        await expect(this.page.locator(selector.downloadsCheckbox)).toHaveAttribute('aria-checked', 'false')
        await expect(this.page.locator('.text-success',{hasText:'downloads'})).not.toBeVisible()
    }
    async validateRadioButton(){
        await this.page.getByText('Radio Button').click()
        await expect(this.page.getByText('Do you like the site?')).toBeVisible()
        await this.page.locator(selector.yesRadioBtn).click()
        await expect(this.page.getByText('You have selected')).toBeVisible()
        await expect(this.page.locator('.text-success',{hasText:'Yes'})).toBeVisible()
        await this.page.locator(selector.impressiveRadioBtn).click()
        await expect(this.page.getByText('You have selected')).toBeVisible()
        await expect(this.page.locator('.text-success',{hasText:'Impressive'})).toBeVisible()
        await expect(this.page.locator(selector.noRadioBtn)).toBeDisabled()
    }
    async validateWebTables(){
        await this.page.getByText('Web Tables').click()
        await this.page.getByRole('button', { name: 'Add' }).click()
        await this.page.locator(selector.inputFirstName).fill('Sam')
        await this.page.locator(selector.inputLastName).fill('Smith')
        await this.page.locator(selector.inputEmail).fill('test@gmail.com')
        await this.page.locator(selector.inputAge).fill('25')
        await this.page.locator(selector.inputSalary).fill('10000')
        await this.page.locator(selector.inputDepartment).fill('Sales')
        await this.page.getByRole('button', { name: 'Submit' }).click()
        await expect(this.page.locator('table>tbody>tr')).toHaveCount(4)
        await this.page.locator(selector.searchBar).fill('Sales')
        await expect(this.page.locator('table>tbody>tr')).toHaveCount(1)
        await this.page.locator(selector.editBtn).click()
        await this.page.locator(selector.inputDepartment).fill('Finance')
        await this.page.getByRole('button', { name: 'Submit' }).click()
        await expect(this.page.locator('table>tbody>tr')).toHaveCount(0)
    }
    async validateButtons(){
        await this.page.getByText('Buttons').click()
        await this.page.getByText('Double Click Me').dblclick()
        await expect(this.page.getByText('You have done a double click' )).toBeVisible()
        await this.page.getByText('Right Click Me').click({ button: 'right' })
        await expect(this.page.getByText('You have done a right click')).toBeVisible()
        await this.page.locator('button.btn.btn-primary').last().click()
        await expect(this.page.getByText('You have done a dynamic click')).toBeVisible()
    }
    async validateLinks(){
        const responsePromise = this.page.waitForResponse((response) =>
            response.url() === 'https://demoqa.com/created' && response.status() === 201
        );
        const responsePromise1 = this.page.waitForResponse((response) =>
            response.url() === 'https://demoqa.com/no-content' && response.status() === 204
        );
        const responsePromise2 = this.page.waitForResponse((response) =>
            response.url() === 'https://demoqa.com/moved' && response.status() === 301
        );
        await this.page.getByText('Links').first().click()
        const pagePromise = this.page.context().waitForEvent('page');
        await this.page.getByText(/Home$/).click()
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://demoqa.com/')
        await newPage.close();
        await this.page.bringToFront();
        await this.page.getByText('Created').click()
        const response = await responsePromise
        expect(response.status()).toBe(201)
        await this.page.getByText('No Content').click()
        const response1 = await responsePromise1
        expect(response1.status()).toBe(204)
        await this.page.getByText('Moved').click()
        const response2 = await responsePromise2
        expect(response2.status()).toBe(301)
    }
    async validateBrokenImageAndLink(){
        await this.page.getByText('Broken Links - Images').click()
        const brokenImage1 = this.page.locator("img[src='/images/Toolsqa.jpg']")
        await expect(brokenImage1).toHaveJSProperty('naturalHeight', 0)
        await expect(brokenImage1).toHaveJSProperty('naturalWidth', 0)
        const brokenImage2 = this.page.locator("img[src='/images/Toolsqa_1.jpg']")
        await expect(brokenImage2).toHaveJSProperty('naturalHeight', 0)
        await expect(brokenImage2).toHaveJSProperty('naturalWidth', 0)
        const responsePromise = this.page.waitForResponse((response) =>
            response.url() === 'https://demoqa.com/' && response.status() === 200
        );
        await this.page.getByText('Click Here for Valid Link').click()
        const response = await responsePromise
        expect(response.status()).toBe(200)
        await this.page.goBack()
        const responsePromiseBrokenLink = this.page.waitForResponse((response) =>
            response.url() === 'http://the-internet.herokuapp.com/status_codes/500' && response.status() === 500
        );
        await this.page.getByText('Click Here for Broken Link').click()
        const responseBrokenLink = await responsePromiseBrokenLink
        expect(responseBrokenLink.status()).toBe(500)
        await this.page.getByText('This page returned a 500 status code.').isVisible()
        await this.page.goBack()
    }
    async validateUploadAndDownload(){
        await this.page.getByText('Upload and Download').click()
        const downloadPromise = this.page.waitForEvent('download');
        this.page.locator(selector.downloadButton, { hasText: 'Download' }).click({force:true})
        const download = await downloadPromise;
        const fileName = download.suggestedFilename();
        expect(fileName).toBe('sampleFile.jpeg');
        const downloadPath = path.join(__dirname, 'downloads', fileName);
        await download.saveAs(downloadPath);
        expect(fs.existsSync(downloadPath)).toBeTruthy();
        const filePath = path.resolve(__dirname, '../testData/download.jpeg');
        await this.page.setInputFiles('input[type="file"]', filePath)
        await this.page.getByText('C:\\fakepath\\download.jpeg').isVisible()
    }
    async validateDynamicProperties(){
        await this.page.getByText('Dynamic Properties').click()
        await this.page.getByText('Will enable 5 seconds').isDisabled()
        await this.page.getByText('Visible After 5 Seconds').isHidden()
        await this.page.getByText('Color Change').evaluate((el) => {
            return window.getComputedStyle(el).color === 'rgb(250, 250, 250)'
        })
        await this.page.waitForTimeout(5000) // Wait for dynamic properties to be enabled
        await this.page.getByText('Will enable 5 seconds').isEnabled()
        await this.page.getByText('Color Change').evaluate((el) => {
            return window.getComputedStyle(el).color === 'rgb(220, 53, 69)'
        })
        await this.page.getByText('Visible After 5 Seconds').isVisible()
    }
    async validateAlerts(){
        await this.page.getByText('Alerts, Frame & Windows').click()
            await this.page.getByText('Alerts').last().click()
            this.page.once('dialog', async (dialog) => {
                expect(dialog.message()).toBe('You clicked a button')
                await dialog.accept()
            })
            await this.page.locator(selector.alertButton, { hasText: 'Click me' }).click() // Trigger the alert
            this.page.once('dialog', async (dialog) => {
                expect(dialog.message()).toBe('Do you confirm action?')
                await dialog.accept()
            })
            await this.page.locator(selector.confirmButton, { hasText: 'Click me' }).click() // Trigger the confirm dialog
            this.page.once('dialog', async (dialog) => {
                expect(dialog.message()).toBe('Please enter your name')
                await dialog.accept('Input Text')
            })
            await this.page.locator(selector.promptButton, { hasText: 'Click me' }).click() // Trigger the prompt dialog
    }        
}