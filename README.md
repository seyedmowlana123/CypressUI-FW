## About Framework
* Test Automation framework is created using Cypress with JavaScript.
* Design pattern which is used in this framework is Page Object Model.
* All the pages are listed in the pages folder. Pages will contain logics.
* Test classes will call the respective page classes for step by step test execution.
* Environment variables are stored in cypress.env.json file.
* Locator identification sample file is added for reference.
* Fixtures folder will contain all the test data.
* Test run status will be available in the reports folder.

## How to Setup
* Clone the project from GitHub repo.
* Open the project in Visual Studio Code.
* Install cypress by using "npm install cypress --save-dev" command in the terminal.
* Type "npx cypress open" command in the terminal.
* To run the scripts in dev environment type "npm run cypress:dev".
* To run the scripts in qa environment type "npm run cypress:qa".