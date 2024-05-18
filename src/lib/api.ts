import { User } from "@/models/auth.model";
import { API_TOKEN, API_URL } from "@/utilities/urls";

export async function fetchDataFromApi(
  endpoint: string,
  token?: string
): Promise<any> {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + (token || API_TOKEN),
      },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);

    return res.json();
  } catch (error) {
    console.log("Error of fetchDataFromApi", error);
  }
}

export async function postDataFromApi(
  endpoint: string,
  payload: any,
  token?: string
) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + (token || API_TOKEN),
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function login(endpoint: string, payload: any) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function getUserFromApi(jwt: string): Promise<User | undefined> {
  try {
    if (jwt) {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      const res = await fetch(`${API_URL}/api/users/me?populate=*`, options);
      const userData = await res.json();

      return userData;
    } else {
      return;
    }
  } catch (error) {
    console.log("Error of getUserFromApi", error);
    return undefined;
  }
}

export async function putDataFromApi(
  endpoint: string,
  payload: any,
  token?: string
) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + (token || API_TOKEN),
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  } catch (error) {
    return error;
  }
}
