Feature: Open the browser and Login

    @Login
    Scenario Outline: <TESTID> : Open the browser and enter the log in details
        Given the user is opned the browser and navigated to url
        Examples:
            | TESTID |
            | TC_01  |