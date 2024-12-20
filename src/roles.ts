import type { PageMetadata, Role, RolePage, Response } from "./defs";
import Errors from "./errors";

export default class Roles {
  private readonly contentType: string;
  private readonly roleError: Errors;

  public constructor() {
    this.contentType = "application/json";
    this.roleError = new Errors();
  }

  public async ListAvailableActions(url: URL, endpoint: string, token: string) {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        new URL(`${endpoint}/roles/available-actions`, url).toString(),
        options
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.roleError.HandleError(errorRes.message, response.status);
      }
      const actions = await response.json();
      return actions;
    } catch (error) {
      throw error;
    }
  }

  public async CreateRole(
    url: URL,
    endpoint: string,
    entityId: string,
    roleName: string,
    token: string,
    optionalActions?: string[],
    optionalMembers?: string[]
  ) {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        role_name: roleName,
        optional_actions: optionalActions,
        optional_members: optionalMembers,
      }),
    };
    try {
      const response = await fetch(
        new URL(`${endpoint}/${entityId}/roles`, url).toString(),
        options
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.roleError.HandleError(errorRes.message, response.status);
      }
      const role: Role = await response.json();
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async ListRoles(
    url: URL,
    endpoint: string,
    entityId: string,
    queryParams: PageMetadata,
    token: string
  ) {
    const stringParams: Record<string, string> = Object.fromEntries(
      Object.entries(queryParams).map(([key, value]) => [key, String(value)])
    );
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(
        new URL(
          `${endpoint}/${entityId}/roles?${new URLSearchParams(
            stringParams
          ).toString()}`,
          url
        ).toString(),
        options
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.roleError.HandleError(errorRes.message, response.status);
      }
      const roles: RolePage = await response.json();
      return roles;
    } catch (error) {
      throw error;
    }
  }

  public async ViewRole(
    url: URL,
    endpoint: string,
    entityId: string,
    roleName: string,
    token: string
  ) {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        new URL(`${endpoint}/${entityId}/roles/${roleName}`, url).toString(),
        options
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.roleError.HandleError(errorRes.message, response.status);
      }
      const role: Role = await response.json();
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateRole(
    url: URL,
    endpoint: string,
    entityId: string,
    roleName: string,
    role: Role,
    token: string
  ) {
    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(role),
    };

    try {
      const response = await fetch(
        new URL(`${endpoint}/${entityId}/roles/${roleName}`, url).toString(),
        options
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.roleError.HandleError(errorRes.message, response.status);
      }
      const role: Role = await response.json();
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async DeleteRole(
    url: URL,
    endpoint: string,
    entityId: string,
    roleName: string,
    token: string
  ) {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        new URL(`${endpoint}/${entityId}/roles/${roleName}`, url).toString(),
        options
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.roleError.HandleError(errorRes.message, response.status);
      }
      const deleteResponse: Response = {
        status: response.status,
        message: "Role deleted successfully",
      };
      return deleteResponse;
    } catch (error) {
      throw error;
    }
  }
}
