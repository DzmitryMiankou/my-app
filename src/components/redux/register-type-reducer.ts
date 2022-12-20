export type InitialStateType = {
    id: number | null,
    nickName: string,
    email: string,
    password: string,
    isAoth: boolean,
}

export type PropertyPostType = {
    method: string;
    headers: {
        Accept: string;
        "Content-Type": string;
    };
    body: string;
    credentials: any;
}
