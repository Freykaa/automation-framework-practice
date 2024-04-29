Feature: Edit Profile

Scenario: Get error when changing to existing username
    Given user is logged in
    When user navigates to the account profile
    And user attempts to change the account username to "testingtester"
    Then user should see an error indicating that the username is already taken
