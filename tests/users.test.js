const axios = require("axios");
const mfsdk = require("mainflux-sdk");

jest.mock("axios");

describe("Users", () => {
  const users_url = "http://localhost";
  const user = {
    id: "886b4266-77d1-4258-abae-2931fb4f16de",
    name: "fkatwigs",
    tags: ["holy", "terrain"],
    owner: "natra@email.com",
    credentials: {
      identity: "fkatwigs@email.com",
      secret: "12345678",
    },
    created_at: "2023-09-07T13:17:27.880558Z",
    updated_at: "2023-09-12T13:38:23.86436Z",
    updated_by: "a725e26d-dc1f-4452-80dc-41fc654aa38b",
    status: "enabled",
  };
  const user_id = "886b4266-77d1-4258-abae-2931fb4f16de";
  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9';
  const old_secret = '12345678';
  const new_secret = '87654321';
  const tokens = {
    'access_token': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IJhZG1pbkBleGFtcGxlLmNvbSIsA', 
    'refresh_token': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTc3OD',
    'access_type': 'Bearer'};
  const users = [
    {
      "name":'sekhmet',
      "id": '886b4266-77d1-4258-abae-2931fb4f16de', 
      "credentials": {
        "identity": 'sekhmet@email.com'
      }
    },
    {
      "name":'bastet',
      "id": '886b4266-77d1-4258-abae-2931fb4f16de', 
      "credentials": {
        "identity": 'bastet@email.com'
      }
    },
  ];
  const member_id = '886b4266-77d1-4258-abae-2931fb4f16de';
  const memberships = [
    {"name":"vhagar"},
    {"name":"balerion"},
  ];
  const group_id = '886b4266-77d1-4258-abae-2931fb4f16de';
  const action= 'm_read';
  const entity_type = 'client';
  const query_params = {
    "offset": 0,
    "limit": 10,
  };


  test("Create should create a user and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Create(user, token).then((result) => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toEqual(user);
    });
  });

  test("Create should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 409,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Create(user, token).catch((result) => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result.error.status).toBe(1);
      expect(result.error.message).toBe('Entity already exists.');
    });
  });

  test('Login should create a token for a user and return success', () => {
    axios.request.mockResolvedValueOnce({ data: tokens });

    const expectedUrl = `${users_url}/users/tokens/issue`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Login(user).then((result) => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      });
      expect(result).toEqual(tokens);
    });
  });

  test("Login should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 404,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/tokens/issue`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Login(user).then((result) => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      });
      expect(result).toBe('A non-existent entity request.');
    });
  });

  test("Get should get a user and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/${user_id}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Get(user_id, token).then((result) => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'get',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      expect(result).toEqual(user);
    });
  });

  test("Get should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${user_id}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Get(user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'get',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test('GetAll should get a list of users and return success', () => {
    axios.request.mockResolvedValueOnce({ data: users });

    const expectedUrl = `${users_url}/users?${new URLSearchParams(query_params).toString()}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.GetAll(query_params, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'get',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      expect(result).toEqual(users);
    });
  });

  test('GetAll should handle a conflict error', () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users?${new URLSearchParams(query_params).toString()}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.GetAll(query_params, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'get',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("Update should update a user and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/${user_id}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Update(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toEqual(user);
    });
  });

  test("Update should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${user_id}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Update(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("UpdateUserIdentity should update a user identity and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/${user_id}/identity`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.UpdateUserIdentity(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toEqual(user);
    });
  });

  test("UpdateUserIdentity should should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${user_id}/identity`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.UpdateUserIdentity(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("UpdateUserTags should update a users tags and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/${user_id}/tags`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.UpdateUserTags(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toEqual(user);
    });
  });

  test("UpdateUserTags should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${user_id}/tags`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.UpdateUserTags(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("UpdateUserOwner should update a user owner and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/${user_id}/owner`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.UpdateUserOwner(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toEqual(user);
    });
  });

  test("UpdateUserOwner should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${user_id}/owner`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.UpdateUserOwner(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("UpdateUserPassword should update a user password and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/secret`;

    const sdk = new mfsdk({ usersUrl: users_url });
    const secret = {
      old_secret: old_secret,
      new_secret: new_secret,
    };
    return sdk.users.UpdateUserPassword(old_secret, new_secret, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: secret,
      });
      expect(result).toEqual(user);
    });
  });

  test("UpdateUserPassword should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/secret`;
    const secret = {
      old_secret: old_secret,
      new_secret: new_secret,
    };
    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.UpdateUserPassword(old_secret, new_secret, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'patch',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: secret,
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("Disable should disable user and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/${user_id}/disable`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Disable(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toEqual(user);
    });
  });

  test("Disable should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${user_id}/disable`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Disable(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("Enable should enable user and return success", () => {
    axios.request.mockResolvedValueOnce({ data: user });

    const expectedUrl = `${users_url}/users/${user_id}/enable`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Enable(user,user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toEqual(user);
    });
  });

  test("Enable should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${user_id}/enable`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Enable(user, user_id, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });

  test("Authorise User should authorise a user and return success", () => {
    axios.request.mockResolvedValueOnce({ data: true });

    const expectedUrl = `${users_url}/authorize`;

    const sdk = new mfsdk({ usersUrl: users_url });
    const access_request = {
      "subject": user_id,
      "object": group_id,
      "action": action,
      "entity_type": entity_type
    }
    return sdk.users.AuthoriseUser(user_id, group_id, action, entity_type, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: access_request,
      });
      expect(result).toEqual(true);
    });
  });

  test("Authorise User should handle a conflict error", () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/authorize`;
    const access_request = {
      subject: user_id,
      object: group_id,
      action: action,
      entity_type: entity_type,
    };
    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.AuthoriseUser(user_id, group_id, action, entity_type, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'post',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: access_request,
      });
      expect(result).toBe(false);
    });
  });

  test('Memberships should get a list of groups associated with users and return success', () => {
    axios.request.mockResolvedValueOnce({ data: memberships });

    const expectedUrl = `${users_url}/users/${member_id}/memberships?${new URLSearchParams(query_params).toString()}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Memberships(member_id, query_params, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'get',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      expect(result).toEqual(memberships);
    });
  });

  test('Memberships should handle a conflict error', () => {
    const errorResponse = {
      response: {
        status: 401,
      },
    };
    axios.request.mockRejectedValueOnce(errorResponse);

    const expectedUrl = `${users_url}/users/${member_id}/memberships?${new URLSearchParams(query_params).toString()}`;

    const sdk = new mfsdk({ usersUrl: users_url });
    return sdk.users.Memberships(member_id, query_params, token).then(result => {
      expect(axios.request).toHaveBeenCalledWith({
        url: expectedUrl,
        method: 'get',
        maxBodyLength: 2000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      expect(result).toBe("Missing or invalid access token provided.");
    });
  });
});
