Feature: Get A Single User Details

  Scenario: Fetch user details by ID
    Given a user send a GET request to "/api/users/2"
    Then the response status code should be 200
    And the response should match the expected user data
