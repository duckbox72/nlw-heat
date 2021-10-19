import axios from "axios";

/**
 * Receive code(string)
 * Retrieve the access_token from github
 * Retrieve User Information from github
 * Verify if user exists in DB:
 * --- YES = generate a token
 * --- NO = criate in DB, generate a token
 * Return token containing authenticated user info
 **/


// Type interface filters response retrieveng only the access_token
interface IAccessTokenResponse {
    access_token: string
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            },
        });

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${accessTokenResponse.access_token}`
            },
        });

        return response.data;
    }
}

export { AuthenticateUserService };