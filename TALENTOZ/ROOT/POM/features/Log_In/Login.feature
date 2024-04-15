Feature: Open the browser and login using mail id

    @LogIn
    Scenario Outline: <TESTID> : Browser opening and logging to the page
        Given the user has opened the browser and naivgate to the page

        Examples:
            | TESTID |
            | T001   |