Feature: List Actions

Scenario: Create a list
    Given user is logged in and navigates to the test board
    When user creates a new list with name "animal"
    Then the list with name "animal" should be displayed on the board
