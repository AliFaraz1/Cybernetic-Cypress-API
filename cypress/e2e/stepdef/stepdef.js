import {
  Given,
  And,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import * as apiService from "../service/servicefile.js";

/**
 * @description GET API for listing all users
 */

Given("a user send a GET request to {string}", (endpoint) => {
  apiService.fetchUsers(endpoint);
});

Then("the response status code should be {int}", (statusCode) => {
  apiService.validateResponseStatus(statusCode);
});

Then("the response should contain user details", () => {
  apiService.validateUserDetails();
});
/**
 * @description GET API for listing data for a sungle user
 */

Then("the response should match the expected user data", () => {
  apiService.validateUserDetailsForSingleUser();
});
/**
 * @description GET API for user not found
 */

Then("the response data should be empty", () => {
  apiService.validateEmptyResponseData();
});
/**
 * @description GET API for user single resource
 */

Then("the response data should match the expected unknown data", () => {
  apiService.validateUnknownData();
});
/**
 * @description POST API for Login successful
 */

Given("a user sends a POST request to {string} with the login credentials", (endpoint) => {
  apiService.loginUser(endpoint);
});

Then("the response should contain a valid token", () => {
  apiService.validateToken();
});
/**
 * @description POST API for creating user
 */

Given("a user sends a POST request to {string} with the user details", (endpoint) => {
  apiService.createUser(endpoint);
});

Then("the response should contain the created user's data", () => {
  apiService.validateCreatedUserData();
});
/**
 * @description PUT API for updating user
 */
Given("a user sends a PUT request to {string} with the updated user details", (endpoint) => {
  apiService.updateUser(endpoint);
});

Then("the response should match the updated user data", () => {
  apiService.validateUpdatedUserData();
});

Then("the fixture should be updated with the new user details", () => {
  apiService.updateUsersJsonWithUpdatedUser();
});
/**
 * @description PDELETE API for deleting user 
 */
Given("a user sends a DELETE request to {string}", (endpoint) => {
  apiService.deleteUser(endpoint).then((response) => {
    apiResponse = response;
  });
});

Then("the response body should be empty", () => {
  expect(apiResponse.body).to.be.empty; 
});
