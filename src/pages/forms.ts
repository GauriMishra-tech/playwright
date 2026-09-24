import { Page } from "@playwright/test";
import {selector} from "../selectors/selectors"
import testdata from "../testData/testData.json"
import path from 'path';
export class Forms{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;    
    }
    async validateForms(){
        await this.page.getByText('Forms').click()
        await this.page.getByText('Practice Form').click()
        await this.page.locator(selector.inputFirstName).fill(testdata.firstName)
        await this.page.locator(selector.inputLastName).fill(testdata.lastName)
        await this.page.locator(selector.inputEmail).fill(testdata.email)
        await this.page.locator(selector.genderRadioBtn).click()
        await this.page.locator(selector.inputMobileNo).fill(testdata.mobileNumber)
        await this.page.locator(selector.inputDate).click()
        await this.page.locator(selector.selectYear).selectOption('1980')
        await this.page.locator(selector.selectMonth).selectOption('May')
        await this.page.locator(selector.selectDay).click()
        await this.page.locator(selector.inputSubject).fill(testdata.subject[0] +"{Enter}"+ testdata.subject[1] +"{Enter}")
        await this.page.locator(selector.hobbiesCheckbox).click()
        const filePath = path.resolve(__dirname, '../testData/download.jpeg');
        await this.page.setInputFiles('input[type="file"]', filePath)
        await this.page.locator(selector.inputCurrentAddress).fill(testdata.currentAddress)
        await this.page.locator(selector.selectState).fill("N")
        await this.page.keyboard.press('Enter')
        await this.page.locator(selector.selectCity).fill("D")
        await this.page.keyboard.press('Enter')
        await this.page.getByText('Submit').click()
        await this.page.getByText('Thanks for submitting the form').isVisible()
        await this.page.getByText(testdata.firstName+' '+testdata.lastName).isVisible()
        await this.page.getByText(testdata.email).isVisible()
        await this.page.getByText(testdata.mobileNumber).isVisible()
        await this.page.getByText(testdata.subject[0]+", "+testdata.subject[1]).isVisible()
        await this.page.getByText(testdata.currentAddress).isVisible()
        await this.page.getByText('download.jpeg').isVisible()
    }
}