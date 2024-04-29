Feature: Sign In

Scenario: Sign in using email
    Given user is on the Trello promo page
    When user navigates to the login page
    And user signs in with email and password
    Then user should be redirected to the Trello boards page
