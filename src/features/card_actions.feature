Feature: Card Actions

Scenario: Create a card
    Given user is logged in and navigates to the test board
    When user creates a new card with name "penguin"
    Then the card with name "penguin" should be displayed on the board
