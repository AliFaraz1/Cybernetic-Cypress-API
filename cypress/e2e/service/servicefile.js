let apiResponse = null;

/**
 * Fetch users from the API
 * @param {string} endpoint - API endpoint to send the request to
 */
export const fetchUsers = (endpoint) => {
  cy.request({
    url: endpoint, // Use "url" instead of "endpoint"
    failOnStatusCode: false,
  }).then((response) => {
    apiResponse = response;
  });
};

/**
 * Validate the response status code
 * @param {number} expectedStatusCode - Expected HTTP status code
 */
export const validateResponseStatus = (expectedStatusCode) => {
  expect(apiResponse).to.not.be.null;
  expect(apiResponse.status).to.eq(expectedStatusCode);
};

/**
 * Validate user details in the response
 */
export const validateUserDetails = () => {
  expect(apiResponse).to.not.be.null;

  cy.fixture("users").then((expectedUsers) => {
    const users = apiResponse.body.data;
    expect(users).to.be.an("array");
    expect(users.length).to.be.at.least(1);

    users.forEach((user, index) => {
      const expectedUser = expectedUsers[index];
      expect(user).to.have.all.keys(
        "id",
        "email",
        "first_name",
        "last_name",
        "avatar"
      );

      expect(user.id).to.eq(expectedUser.id);
      expect(user.email).to.eq(expectedUser.email);
      expect(user.first_name).to.eq(expectedUser.first_name);
      expect(user.last_name).to.eq(expectedUser.last_name);
      expect(user.avatar).to.eq(expectedUser.avatar);
    });
  });
};

/**
 * Validate user details in the response for a single user
 */

export const validateUserDetailsForSingleUser = () => {
  cy.fixture("users").then((users) => {
    expect(apiResponse).to.not.be.null;

    const responseData = apiResponse.body.data;

    expect(responseData).to.exist;

    expect(responseData).to.have.all.keys(
      "id",
      "email",
      "first_name",
      "last_name",
      "avatar"
    );
    expect(responseData.id).to.eq(users[6].data.id);
    expect(responseData.email).to.eq(users[6].data.email);
    expect(responseData.first_name).to.eq(users[6].data.first_name);
    expect(responseData.last_name).to.eq(users[6].data.last_name);
    expect(responseData.avatar).to.eq(users[6].data.avatar);

    const responseSupport = apiResponse.body.support;
    expect(responseSupport).to.have.all.keys("url", "text");
    expect(responseSupport.url).to.eq(users[6].support.url);
    expect(responseSupport.text).to.eq(users[6].support.text);
  });
};
/**
 * Validate user not found
 */

export const validateEmptyResponseData = () => {
  expect(apiResponse).to.not.be.null;
  if (apiResponse.status === 404) {
    expect(apiResponse.body).to.deep.equal({});
  } else {
    const user = apiResponse.body.data;
    expect(user).to.have.all.keys(
      "id",
      "email",
      "first_name",
      "last_name",
      "avatar"
    );
  }
};
/**
 * Validate single user resource
 */

export const validateUnknownData = () => {
  expect(apiResponse).to.not.be.null;
  const expectedData = {
    id: 2,
    name: "fuchsia rose",
    year: 2001,
    color: "#C74375",
    pantone_value: "17-2031",
  };
  const responseData = apiResponse.body.data;
  expect(responseData).to.deep.equal(expectedData);
};
/**
 * Validate POST Api for login successful
 */

export const loginUser = (endpoint) => {
  const requestBody = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  cy.request({
    method: "POST",
    url: endpoint,
    body: requestBody,
    failOnStatusCode: false,
  }).then((response) => {
    apiResponse = response;
  });
};

export const validateToken = () => {
  expect(apiResponse).to.not.be.null;
  const token = apiResponse.body.token;
  expect(token).to.not.be.empty;
  expect(token).to.be.a("string");
};
/**
 * Validate POST Api for creaating user
 */

export const createUser = (endpoint) => {
  const requestBody = {
    name: "morpheus",
    job: "leader",
  };

  cy.request({
    method: "POST",
    url: endpoint,
    body: requestBody,
    failOnStatusCode: false,
  }).then((response) => {
    apiResponse = response;
  });
};

export const validateCreatedUserData = () => {
  expect(apiResponse).to.not.be.null;

  cy.fixture("users.json").then((users) => {
    const newUser = {
      name: "morpheus",
      job: "leader",
      id: apiResponse.body.id,
      createdAt: apiResponse.body.createdAt,
    };

    users.push(newUser);

    expect(apiResponse.body.name).to.eq("morpheus");
    expect(apiResponse.body.job).to.eq("leader");
    expect(apiResponse.body.id).to.not.be.empty;
    expect(apiResponse.body.createdAt).to.not.be.empty;
  });
};

/**
 * Update user with PUT API
 */

export const updateUser = (endpoint) => {
  const requestBody = {
    name: "morpheus",
    job: "zion resident",
  };

  cy.request({
    method: "PUT",
    url: endpoint,
    body: requestBody,
    failOnStatusCode: false,
  }).then((response) => {
    apiResponse = response;
  });
};

export const validateUpdatedUserData = () => {
  expect(apiResponse).to.not.be.null;
  expect(apiResponse.body.name).to.eq("morpheus");
  expect(apiResponse.body.job).to.eq("zion resident");
  expect(apiResponse.body.updatedAt).to.not.be.empty;
};

export const updateUsersJsonWithUpdatedUser = () => {
  cy.fixture("users.json").then((users) => {
    const updatedUser = {
      id: 2,
      name: "morpheus",
      job: "zion resident",
      updatedAt: apiResponse.body.updatedAt,
    };

    const userIndex = users.findIndex((user) => user.id === 2);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
    }

    expect(users[userIndex].name).to.eq("morpheus");
    expect(users[userIndex].job).to.eq("zion resident");
    expect(users[userIndex].updatedAt).to.not.be.empty;
  });
};
/**
 * DELETE user with delete api
 */
export const deleteUser = (endpoint) => {
  return cy.request({
    method: "DELETE",
    url: endpoint,
    failOnStatusCode: false,
  });
};
