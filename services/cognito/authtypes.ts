export type AuthParams = {
    username: string;
    password: string;
}

export type RegistrationParams = {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string,
    avatarUri: string | undefined,
    avatarBase64: string | undefined
    contentType?: string
}

export type AuthResponse = {
    accessToken: string,
    refreshToken: string,
    idToken: string,
    expiresIn: number
}

export type UserState = {
    username: string,
    token: string,
    profilePicture: string
}