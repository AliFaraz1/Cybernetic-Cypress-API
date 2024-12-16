# Cypress Framework

Cypress Framework is a set of guidelines or rules used for creating and designing test cases. The framework is comprised of a combination of industry practices and modern tools that are designed to help professionals test more efficiently.

The framework includes guidelines to coding standards, BDD approach that drive the entire framework, design patterns, test-data handling methods, page object classes, processes for storing test results, and custom utility functions on how to access external resources.

## Tech Stack

- Cypress for API
- Javascript
- NPM as Build Tool
- Cucumber BDD as development approach
- Cucumber Preprocessor as Test Runner
- VS Code
- Git

## Framework Layers Mapping

- The Utilities & Resources Layer (L1): environments, cypress.json and plugins
- The Pages / Microservices Layer (L2): pages and step definitions
- The Test Suite Layer (L3): feature files

## Building the Project

Create Build

Make sure you have node installed.

```bash
  npm install
```

Run the Test by using the GUI

```bash
    npm run open
```

Run the Test by using command line

```bash
    npm run cy:run
```

### Break down into end to end tests

The project contains four folders inside the integration that contains all the feature file:

- The e2e/feature folder contains feature files
- The e2e/stepdef folder contains stepdef files
- The e2e/service folder contains service files
### Coding Standards Quick Checklist

    1. Use Intention Revealing & Searchable Names
    2. Always start your Class Name with a Capital letter
    3. Always start your Method Name with a verb/verb phrase and camelCase
    4. Objects/Instances names should always be in lowercase
    5. Use Hungarian notation for variable names
    6. Pick One Word per Concept
    7. Don’t Pun

### Naming Example:
use camel case userAuto.js

## Folder Structure

- **cypress** Root Folder
- **cypress/e2e** feature, service and step-definition files
- **cypress/fixture** user.json files
- **cypress/plugins** plugins
- **cypress-config.json** configurations file 

