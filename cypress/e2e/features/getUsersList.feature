Feature: Get List Of All Users

  Scenario: Fetch users from the second page
    Given a user send a GET request to "/api/users?page=2"
    Then the response status code should be 200
    And the response should contain user details
