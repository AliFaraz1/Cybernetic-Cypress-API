Feature: Get Unknown Data by ID

  Scenario: Fetch unknown data with ID 2
    Given a user send a GET request to "/api/unknown/2"
    Then the response status code should be 200
    And the response data should match the expected unknown data
