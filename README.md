# WebdriverIO Installation & Prerequisite:

## NodeJS

Node.js should be >= 18 (or any Latest LTS release –  )

To check the NodeJS version, run command `node -v`

Typescript & TS Node

Typescript version should be >= 4.0.5

Open 'CMD' and navigate to our project location. ( how to locate our project in CMD is, example “ `cd` `C:\Users\JeevaSubramanian\Documents\GitHub\TOZ_QA_Automation` “ )

Install the below packages in your machine,

`npm install -g typescript`

`npm install -g ts-node`

-g meant for global installation of typescript in your machine.

-D for local project installation, as dev dependencies only and work within current user login machine.

## Code Editor

Preferred to use Visual Studio Code editor and the below list of plug-in apps to make more friendly and speed up the scripting process.

Here is the link to download Visual Studio Code - Code Editing.

`Code Runner` - This supports by running code in Integrated Terminal and click Run Code button in editor title menu. Or click Run Code  button in context menu of file explorer.

`Cucumber (Gherkin) Full Support` - This helps in Cucumber Gherkin Language Support + Formatting + Autocomplete.

`DotENV` - This adds formatting and syntax highlighting support for env files (.env)

`JavaScript and TypeScript Nightly` - This helps to autocomplete or suggest the typescript code completion and highlighting incorrect statement and syntax. 

`npm Intellisense` - This helps to autocomplete npm modules in import statements.

`Path Intellisense` - This helps to suggest the file path.

`Prettier` - Code formatter - This helps to format the code alignment and uniform structure. 

`Surround With` - Surround selection helps to create a defined block for 'if' or 'try/catch' block.

`vscode-icons` - It makes unique icons for each type of folder and files.

## Quick Start

**Step1:** Clone the github project using the link here https://github.com/talentozhub/TOZ_QA_Automation.git

**Step2:** Open the VS Code and click “Open Folder” option navigate the cloned project location.

**Step3:** Open the Terminal and give the comment as `npm install` and it will start to install all dependency packages.

#### Start RUN/Execute

**Step1:** Open the project location in CMD **terminal** or VS Code Terminal

**Step2:** Type the comment as " `npm run wdio` " and press the enter key to start running all the feature file’s test case to execute. 

**Step3:** Customized feature file execution is possible through ‘package.jon’ file’s script tag. 



### Now you are ready to write your own features.

#### Format of the feature files is here

**Feature:** {Description of the feature}

**@sanity** {It is a tag to select for the execution and reporting.}

**Scenario Outline:** `<TestID>`: Description of the scenario  {TestID is an ID for each test case to identify and it’s a mandatory value to provide.}

**Given**

**When**

**Then**

Modules are created under feature folder without any space in the name with camelCase.



## Prerequisites of stepDefinition ts file:

`import { Given, When, Then } from '@wdio/cucumber-framework';`
The above import is required for enabling the cucumber glue code step definition linking.

`import logger from '../../../../helper/logger.js';`
The above import is required for adding any log level information for the particular step and access the log info like this format, logger.info(`>>> End of the first step and passing first step`) This log is **visible only in terminal**, not in report. 

`import reporter from '../../../../helper/reporter.js';`
The above import is required for **adding log information into allure report** and this will be visible under the feature step information. It will be child-info of the feature steps. This helps to understand and point out the area of issue or line of code failing.  This can be accessed like this format, `reporter.addStep("this.TESTID", "info", "Opening the browser")` AddStep function takes 5 inputs and 2 arguments are optional. **First** is “`TESTID`“, **Second** is “Loglevel” information type like “info”, debug”, “warn” and “error”. **Third** is “messagge” information type, **Fourth** is “True” or “False” to add this step information into allure report or not. Default it is true. **Fifth** is an “IssueID” field to provide for known issue ID if this bug raised and has ID.

## Creating reusable Xpath: 
Reusable xpath meant that the xpath format and condition remains same and only value of field name change, instead of creating duplicates for those scenarios. One xpath can be used dynamically changing the field value as variable. For example,  
1). 
```typescript
public get EndDay() {
    return $("ul/li/a[title='End Day Only']");
  }
```
2). 
```typescript
public get StartDay() {
    return $("ul/li/a [title='Start Day Only']");
  }
```
3). 
```typescript
public get AllDay() {
    return $("ul/li/a[title='All Days']");
  }
```
those three are same xpath on the condition side and only the title value changing. Hence, using the variable function to create one xpath to reduce the duplication and coding length. It looks like as 

```typescript
        public async DayType(TypeOfDay: string) {
            return $(`ul/li/a[title='${TypeOfDay}']`)
        }
```
***or***
```typescript
        public async DayType(TypeOfDay: string) {
            return $('ul/li/a[title=\'' + TypeOfDay + '\']');
        }
```
The value can be passed from cucumber data or in stepDefinition script. Here \' meant single quote and + meant concatenate (connecting words) the words.  

Key List can be found in https://webdriver.io/docs/api/element  which meant that the action keyword to perform a required action with element in the browser.


## Reports:

There are two types of reports generated automatically on each run of execution. One is the xml type report generated using wdio/allure-reporter package and and the file stored in “./allure-results “ location. This report can be generated using `allure serve` script.

The other type is json report generated using wdio-html-nice-reporter package and the files stored in ./reports/html-reports/ location. This report can be generated using this script.

### How to Open the GitHub Action Artifact Aullure Report
To be able to correctly open test reports from local files in Mozilla Firefox, you need to change a certain global preference. This will affect all websites opened in Mozilla Firefox until you change the preference back.

If you got the test report in a ZIP archive, unpack all its content into a directory on your device.

In Mozilla Firefox, open a new tab and go to the address: `about:config`. 
If a Proceed with Caution warning shows up, click **Accept the Risk and Continue**. 
In the Search preference name box, enter: `security.fileuri.strict_origin_policy`. 
The preference with that name should appear on the page.

If the preference is set to true, **double-click** on the value to toggle it.
Make sure that the preference is now set to **false**.
In a file explorer, navigate to your test report's directory and open its **index.html** file in Mozilla Firefox.

Once you are done with viewing the test report, switch back to the `about:config` tab and **double-click** on the value again.
Make sure that the preference is now set to **true**.

## Tips and Tricks:

To interact with browser through comment line to debug and inspect your tests, use  `npx wdio repl chrome` from the project directory.
