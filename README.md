# Playwright E2E Automation Framework
 
## Prerequisites
 
Ensure you have the following installed locally:
*   [Node.js](Node.js — Run JavaScript Everywhere) (v18 or higher recommended)
*   An IDE like [VS Code](https://visualstudio.com) (with the official [Playwright extension](https://visualstudio.com) installed)
---
 
## How to Install Playwright
 
Clone the repo to a local folder and run:
```bash
git clone https://github.com/gauri-mishra01_infosys/playwright_automation
```
 
## Install Dependencies
Install all required Node modules:
```npm
npm install
```
 
## Install Playwright Browsers
Download the specific browser binaries required by Playwright:
```npm
npx playwright install
```
---
# How to Install Typescript
```npm
npm install typescript
```
## How to Run Tests
 
You can trigger tests using the following `npm` shorthand scripts or directly via `npx`.
 
### Run All Tests (Headless mode)
```npm
npx playwright test
```
### Run Tests in UI Mode (Interactive)
Opens the powerful interactive testing dashboard to step through tests visually:
```npm
npx playwright test --ui
```
 
### Run Tests in a Specific Browser (Headed mode)
```npm
npx playwright test --project=chromium --headed
```
 
### Debugging Tests
Opens the step-by-step Playwright Inspector:
```npm
npx playwright test --debug
```
## Generating Reports
After running your tests, an HTML-based test execution report is automatically generated.
```npm
npx playwright show-report
```
## Useful Resources
 
*   [Official Playwright Documentation](https://playwright.dev/docs/intro)
*   [Playwright Trace Viewer Guide](https://playwright.dev)
 
## List of Tests covered
TEST CASE 1 - TEXT BOX - VALID, INVALID
TEST CASE 2 - CHECK BOX - WITH CHECK and WITH UN CHECK
TEST CASE 3 - RADIO BUTTON - 3 RADIO BUTTON CHECKS
TEST CASE 4 - WEB TABLES - ADD TABLE ROW AND EDIT THE TABLE
TEST CASE 5 - BUTTONS - 3 BUTTONS - CHECK ALL THE 3 BUTTONS
TEST CASE 6 - LINKS - 1 LINK WITH NEW TAB  and 3 LINKS WITH API CALL
TEST CASE 7 - BROKEN LINK AND IMAGE - 1 BROKEN LINK AND 1 BROKEN IMAGE
TEST CASE 8 - DOWNLOAD AND UPLOAD FILE
TEST CASE 9 - DYNAMIC PROPERTIES - 3 BUTTONS
TEST CASE 10 - FORMS - FORM SUBMISSION
TEST CASE 11 - VALIDATE API RESPONSE
TEST CASE 12 - VALIDATE ALERTS
