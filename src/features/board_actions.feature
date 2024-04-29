Feature: Board Actions

Scenario: Create a board
    Given user is logged in
    When user navigates to the home board tab
    And user creates a new board with title "creation"
    Then user should be redirected to the created board
    