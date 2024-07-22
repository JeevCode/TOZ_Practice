Feature: Open the browser and login using mail id

    @LogIn
    Scenario Outline: <TESTID> : Browser opening and logging to the page
        Given the user has opened the browser and naivgate to the page
        When i enter the mailID in the feild
        Then i can see the signup page 
        Examples:
            | TESTID |
            | T001   |