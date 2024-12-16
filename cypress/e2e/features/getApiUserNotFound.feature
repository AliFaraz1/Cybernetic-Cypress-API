Feature: Get User Data by ID

  Scenario: Fetch user with ID 23 which does not exist
    Given a user send a GET request to "/api/users/23"
    Then the response status code should be 404
    And the response data should be empty
