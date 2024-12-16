Feature: Delete User

  Scenario: User deletes a user with ID 9 successfully
    Given a user sends a DELETE request to "/api/users/9"
    And the response body should be empty