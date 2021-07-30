export type AuthParams = {
    username: string;
    password: string;
}

export type RegistrationParams = {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string
}

export type AuthResponse = {
    accessToken: string,
    refreshToken: string,
    idToken: string,
    expiresIn: number
}