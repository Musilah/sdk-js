import fetchMock, { enableFetchMocks } from "jest-fetch-mock";

import SDK from "../src/sdk";
import type {
  User,
  UsersPage,
  Login,
  Group,
  GroupsPage,
  Client,
  ClientsPage,
  Channel,
  Token,
} from "../src/sdk";

enableFetchMocks();

const usersUrl = "http://localhost";
const sdk = new SDK({ usersUrl });

describe("Users", () => {
  const user: User = {
    id: "886b4266-77d1-4258-abae-2931fb4f16de",
    first_name: "tahliah",
    last_name: "barnett",
    email: "fkatwigs@email.com",
    tags: ["holy", "terrain"],
    credentials: {
      username: "fkatwigs",
      secret: "12345678",
    },
    role: "admin",
    status: "enabled",
    profile_picture: "https://holyterrain.com",
  };

  const UsersPage: UsersPage = {
    users: [user],
    total: 1,
    offset: 0,
    limit: 10,
  };

  const login: Login = {
    username: "12345678",
    password: "fkatwigs",
  };

  const tokenObject: Token = {
    access_token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9",
    refresh_token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9",
  };

  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9";
  const refreshToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9";

  const queryParams = {
    offset: 0,
    limit: 10,
  };

  const userId = "886b4266-77d1-4258-abae-2931fb4f16de";
  const domainId = "886b4266-77d1-4258-abae-2931fb4f16de";

  const group: Group = {
    id: "886b4266-77d1-4258-abae-2931fb4f16de",
    domain_id: "886b4266-77d1-4258-abae-2931fb4f16de",
    parent_id: "886b4266-77d1-4258-abae-2931fb4f16de",
    name: "fkatwigs",
    description: "holy terrain",
    level: 1,
    path: "holy terrain",
    status: "enabled",
  };

  const GroupsPage: GroupsPage = {
    groups: [group],
    total: 1,
    offset: 0,
    limit: 10,
  };

  const client: Client = {
    id: "886b4266-77d1-4258-abae-2931fb4f16de",
    name: "fkatwigs",
    domain_id: "886b4266-77d1-4258-abae-2931fb4f16de",
  };

  const clientsPage: ClientsPage = {
    clients: [client],
    total: 1,
    offset: 0,
    limit: 10,
  };

  const channel: Channel = {
    id: "886b4266-77d1-4258-abae-2931fb4f16de",
    name: "fkatwigs",
    domain_id: "886b4266-77d1-4258-abae-2931fb4f16de",
  };

  const channelsPage = {
    channels: [channel],
    total: 1,
    offset: 0,
  };

  const email = "admin@gmail.com";

  const password = "12345678";
  const confPass = "12345678";
  const oldSecret = "12345678";
  const newSecret = "87654321";
  const hostUrl: string = "http://localhost";

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("Create should create a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.Create(user);
    expect(response).toEqual(user);
  });

  test("Create token should create a token for a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(tokenObject));

    const response = await sdk.users.CreateToken(login);
    expect(response).toEqual(tokenObject);
  });

  test("Refresh token should refresh a user's token", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(tokenObject));

    const response = await sdk.users.RefreshToken(refreshToken);
    expect(response).toEqual(tokenObject);
  });

  test("Users should get a list of users", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(UsersPage));

    const response = await sdk.users.Users(queryParams, token);
    expect(response).toEqual(UsersPage);
  });

  test("Update should update a user metadata", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.Update(user, token);
    expect(response).toEqual(user);
  });

  test("Update user email should update a user email address", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.UpdateEmail(user, token);
    expect(response).toEqual(user);
  });

  test("Update username should update a username", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.UpdateUsername(user, token);
    expect(response).toEqual(user);
  });

  test("Update user profile picture should update a user profile picture URL", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.UpdateProfilePicture(user, token);
    expect(response).toEqual(user);
  });

  test("Update user password should update a user password", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.UpdateUserPassword(
      oldSecret,
      newSecret,
      token,
    );
    expect(response).toEqual(user);
  });

  test("Update user tags should update a user tags", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.UpdateUserTags(user, token);
    expect(response).toEqual(user);
  });

  test("Update user role should update a user role", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.UpdateUserRole(user, token);
    expect(response).toEqual(user);
  });

  test("User should retrieve a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.User(userId, token);
    expect(response).toEqual(user);
  });

  test("User profile should return a user profile", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.UserProfile(token);
    expect(response).toEqual(user);
  });

  test("Disable user should disable a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.Disable(user.id as string, token);
    expect(response).toEqual(user);
  });

  test("Enable user should enable a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(user));

    const response = await sdk.users.Enable(user.id as string, token);
    expect(response).toEqual(user);
  });

  test("List user groups should return a list of groups associated with a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(GroupsPage));

    const response = await sdk.users.ListUserGroups(
      domainId,
      userId,
      queryParams,
      token,
    );
    expect(response).toEqual(GroupsPage);
  });

  test("List user clients should return a list of clients associated with a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(clientsPage));

    const response = await sdk.users.ListUserClients(
      domainId,
      userId,
      queryParams,
      token,
    );
    expect(response).toEqual(clientsPage);
  });

  test("List user channels should return a list of channels associated with a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(channelsPage));

    const response = await sdk.users.ListUserChannels(
      domainId,
      userId,
      queryParams,
      token,
    );
    expect(response).toEqual(channelsPage);
  });

  test("Reset user password request should send a password reset request", async () => {
    const resetPasswordRequestResponse = {
      status: 200,
      message: "Email with reset link sent successfully",
    };
    fetchMock.mockResponseOnce(JSON.stringify(resetPasswordRequestResponse));

    const response = await sdk.users.ResetPasswordRequest(email, hostUrl);
    expect(response).toEqual(resetPasswordRequestResponse);
  });

  test("Reset user password should reset a user password", async () => {
    const resetPasswordResponse = {
      status: 200,
      message: "Password reset successfully",
    };
    fetchMock.mockResponseOnce(JSON.stringify(resetPasswordResponse));

    const response = await sdk.users.ResetPassword(password, confPass, token);
    expect(response).toEqual(resetPasswordResponse);
  });

  test("Delete user should delete a user", async () => {
    const deleteResponse = {
      status: 200,
      message: "User deleted successfully",
    };
    fetchMock.mockResponseOnce(JSON.stringify(deleteResponse));

    const response = await sdk.users.DeleteUser(userId, token);
    expect(response).toEqual(deleteResponse);
  });

  test("Search user should search for a user", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(UsersPage));

    const response = await sdk.users.SearchUsers(queryParams, token);
    expect(response).toEqual(UsersPage);
  });
});
