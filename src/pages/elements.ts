import element from "../selectors/selectors.json"
import testdata from "../fixtures/testdata.json"
export class Elements{ 
    validateText(){
        cy.get('span').contains('Elements').click()
        cy.get('span').contains('Text Box').click(),
        cy.get(element.inputName).type(testdata.name),
        cy.get(element.inputEmail).type(testdata.invalidEmail),
        cy.get(element.inputCurrentAddress).type(testdata.currentAddress),
        cy.get(element.inputPermanentAddress).type(testdata.permanentAddress),
        cy.get('button').contains('Submit').click(),
        cy.get(element.emailError).should('be.visible'),
        cy.get(element.inputEmail).clear().type(testdata.email),
        cy.get('button').contains('Submit').click(),
        cy.get('p').contains(testdata.name).should('be.visible'),
        cy.get('p').contains(testdata.email).should('be.visible'),
        cy.get('p').contains(testdata.currentAddress).should('be.visible'),
        cy.get('p').contains(testdata.permanentAddress).should('be.visible')
    }
    validateCheckBox(){
        cy.get('span').contains('Check Box').click(),
        cy.get( element.checkboxExpand).click(),
        cy.get( element.homeCheckbox).click(),
        cy.get( element.homeCheckbox).should('have.attr','aria-checked','true'),
        cy.get('span').contains('You have selected :').should('be.visible'),
        cy.get('span').contains('home').should('be.visible'),
        cy.get( element.downloadsCheckbox).click(),
        cy.get( element.downloadsCheckbox).should('have.attr','aria-checked','false'),
        cy.get('span').contains('downloads').should('not.exist')
    }
    validateRadioButton(){
        cy.get('span').contains('Radio Button').click(),
        cy.get('div.mb-3').contains('Do you like the site?').should('be.visible'),
        cy.get( element.yesRadioBtn).click(),
        cy.get('p').contains('You have selected').should('be.visible'),
        cy.get('span').contains('Yes').should('be.visible'),
        cy.get( element.impressiveRadioBtn).click(),
        cy.get('p').contains('You have selected ').should('be.visible'),
        cy.get('span').contains('Impressive').should('be.visible'),
        cy.get( element.noRadioBtn).siblings().should('have.attr','disabled')
    }
    validateWebTables(){
        cy.get('span').contains('Web Tables').click(),
        cy.get('button').contains('Add').click(),
        cy.get( element.inputFirstName).type('Sam'),
        cy.get( element.inputLastName).type('Smith'),
        cy.get( element.inputEmail).type('test@gmail.com'),
        cy.get( element.inputAge).type('25'),
        cy.get( element.inputSalary).type('10000'),
        cy.get( element.inputDepartment).type('Sales'),
        cy.get('button').contains('Submit').click(),
        cy.get('table>tbody>tr').should('have.length',4),
        cy.get( element.searchBar).type('Sales'),
        cy.get('table>tbody>tr').should('have.length',1),
        cy.get( element.editBtn).click(),
        cy.get( element.inputDepartment).clear().type('Finance'),
        cy.get('button').contains('Submit').click(),
        cy.get('table>tbody>tr').should('have.length',0)
    }
    validateButtons(){
        cy.get('span').contains('Buttons').click(),
        cy.get('button').contains('Double Click Me').dblclick(),
        cy.get('p').contains('You have done a double click').should('be.visible'),
        cy.get('button').contains('Right Click Me').rightclick(),
        cy.get('p').contains('You have done a right click').should('be.visible')
        cy.get('button.btn.btn-primary').last().click(),
        cy.get('p').contains('You have done a dynamic click').should('be.visible')
    }
    validateLinks(){
        cy.intercept('GET', 'https://demoqa.com/created').as('Created')
        cy.intercept('GET', 'https://demoqa.com/no-content').as('NoContent')
        cy.intercept('GET', 'https://demoqa.com/moved').as('Moved')
        cy.get('span').contains('Links').click()
        cy.get('a').contains('Home').should('have.attr','target', '_blank')
        .and('have.attr', 'href', 'https://demoqa.com')
        cy.get('a').contains('Created').click()
        cy.wait("@Created").its('response.statusCode').should('equal',201)
        cy.get('a').contains('No Content').click()
        cy.wait("@NoContent").its('response.statusCode').should('equal',204)
        cy.get('a').contains('Moved').click()
        cy.wait("@Moved").its('response.statusCode').should('equal',301)
    }
    validateBrokenImageAndLink(){
        cy.get('span').contains('Broken Links - Images').click()
        cy.get("img[src='/images/Toolsqa.jpg']")
        .and('have.prop','naturalHeight', 0)
        .and('have.prop','naturalWidth',0)
        cy.get("img[src='/images/Toolsqa_1.jpg']")
        .and('have.prop','naturalHeight', 0)
        .and('have.prop','naturalWidth',0)
        cy.intercept('GET','https://demoqa.com/').as('ValidLink')
        cy.get('a').contains('Click Here for Valid Link')
        .should('have.attr','href','http://demoqa.com').click()
        cy.wait("@ValidLink").its('response.statusCode').should("equal",200)
        cy.go('back')
        cy.intercept('GET','http://the-internet.herokuapp.com/status_codes/500').as('InvalidLink')
        cy.get('a').contains('Click Here for Broken Link')
        .should('have.attr','href','http://the-internet.herokuapp.com/status_codes/500').click()
        cy.wait("@InvalidLink").its('response.statusCode').should("equal",500)
        cy.get('p').contains('This page returned a 500 status code.')
        cy.go('back')
    }
    validateUploadAndDownload(){
        cy.get('span').contains('Upload and Download').click()
        cy.get('a').contains('Download').click({force:true})
        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist')
        cy.get('#uploadFile').selectFile('/Users/gaurimishra/Desktop/qa/assessment/cypress/fixtures/download.jpeg',{force:true})
        cy.get('#uploadedFilePath').contains(`C:\\fakepath\\download.jpeg`).should("be.visible")
    }
    validateDynamicProperties(){
        cy.get('span').contains('Dynamic Properties').click()
        cy.get('button#enableAfter').should('have.attr','disabled')
        cy.get('button#visibleAfter').should("not.exist")
        //Wait time for dynamic properties to be enabled
        cy.wait(5000)
        cy.get('button#enableAfter').should('not.have.attr','disabled')
        cy.get('button#colorChange').should('have.css','color','rgb(220, 53, 69)')
        cy.get('button#visibleAfter').should('be.visible')
    }
    validate(){
        cy.get('span').contains('Alerts, Frame & Windows').click()
        //cy.get('span').contains('Browser Windows').click()
        // cy.window().then((win)=>{
        //     cy.stub(win,"open").as('WindowOpen')
        // })
        // cy.get('button').contains('New Tab').click()
        // cy.get('@WindowOpen').then((stub)=>{
        //     const url=stub.getCall(0).args[0]
        //     cy.visit(url)
        // })
        cy.get('a span').contains('Alerts').click()
        cy.get('button#alertButton').contains('Click me').click()
        cy.on('window:alert',(msg)=>{
            expect(msg).to.eq('You clicked a button')
        })
        cy.contains('button#confirmButton','Click me').click()
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.eq('Do you confirm action?')
        })
        cy.contains('span','Ok').should('be.visible')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Test')
        })
        cy.contains('#promtButton','Click me').click()
        cy.contains('span','Test').should('be.visible')
        cy.get('a span').contains('Frames').click()
        cy.get('#frame1').should('be.visible')
        cy.get('#frame1').its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap).find('h1').should('have.text','This is a sample page')
        cy.get('#frame2').should('be.visible')
        cy.get('a span').contains('Nested Frames').click()
        cy.get('#frame1').its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap).find('iframe').its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap).find('p').should('have.text','Child Iframe')
        cy.contains('span','Modal Dialogs').click()
        cy.contains('button','Small modal').click()
        cy.contains('button#closeSmallModal','Close').click()
        cy.contains('button','Large modal').click()
        cy.contains('button#closeLargeModal','Close').click()
        cy.contains('span','Widgets').click()
        cy.contains('span','Slider').click()
        // cy.get('#sliderValue').invoke('value','75').trigger('change')
        // cy.get('.range-slider.range-slider--primary').should('have.value',75)
        cy.contains('span','Progress Bar').click()
        cy.get('.progress-bar.bg-info').should('have.attr', 'aria-valuenow', '0');
        cy.get('#startStopButton').click();
        cy.wait(1000); // Wait briefly for progress to move
        cy.get('#startStopButton').click();
    }
}
