Feature: Filter Actions

Scenario: Filter by keyword
    Given user is logged in and navigates to the test board
    When user filters the board by keyword "penguin"
    Then filtered matches should be displayed on the board
