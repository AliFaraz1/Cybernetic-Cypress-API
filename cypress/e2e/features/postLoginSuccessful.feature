Feature: User Login

  Scenario: User logs in successfully with valid credentials
    Given a user sends a POST request to "/api/login" with the login credentials
    Then the response status code should be 200
    And the response should contain a valid token
