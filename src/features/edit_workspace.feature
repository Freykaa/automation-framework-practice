Feature: Edit Workspace

Scenario: Change workspace name
    Given user is logged in
    When user navigates to the workspace settings
    And user changes the workspace name to "testingtesting space"
    Then the workspace name should be updated to "testingtesting space"
