# Trello Automated Testing Framework

This repository contains an automated testing framework for the Trello.com site, utilizing JavaScript, WebdriverIO, Mocha, and potentially Cucumber for behavior-driven development (BDD) in the future. The framework aims to streamline the testing process and ensure the quality and reliability of the Trello web application.

## Prerequisites
- Node.js installed on your system
- npm package manager installed on your system

## Setup
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Configuration
Before running the tests, ensure that you have configured the following settings:
- Update `wdio.conf.js` file with appropriate WebDriver configuration settings.

## Running Tests
To run the automated tests, execute the following command:
```
npm run test
```

## Structure
- `tests/`: Contains test scripts written in Mocha using WebdriverIO for interacting with the Trello website.
- `pages/`: Contains Page Object Model (POM) files to abstract interactions with Trello web elements.
- `config.js`: Configuration file for storing environment-specific variables and settings.
- `wdio.conf.js`: Configuration file for WebdriverIO settings and capabilities.
- `package.json`: Node.js package configuration file containing dependencies and scripts.
- `features/`: (Future implementation) Gherkin feature files for Cucumber BDD testing.

## Writing Tests
Tests are written using Mocha test framework and WebdriverIO for browser automation. You can create new test scripts in the `tests/` directory following the existing test structure. Utilize Page Object Model (POM) pattern by defining page objects in the `pages/` directory to maintain test readability and reusability.
