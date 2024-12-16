Feature: Create New User

  Scenario: User creates a new user successfully
    Given a user sends a POST request to "/api/users" with the user details
    Then the response status code should be 201
    And the response should contain the created user's data
