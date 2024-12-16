Feature: Update User

  Scenario: User updates details successfully
    Given a user sends a PUT request to "/api/users/2" with the updated user details
    Then the response status code should be 200
    And the response should match the updated user data
    And the fixture should be updated with the new user details
