const AUTH = "AUTH";


export type InitialStateType = {
    isAoth: any,
}
const initialState: InitialStateType = {
    isAoth: true,
}

const authReducer = (state = initialState, action: any) => {
    let copy;

    switch (action.type) {
        case AUTH: {
            copy = { isAoth: action.inAuth };
            return copy;
        }
        default:
            return state;
    }
};
type loginActionType = {
    type: typeof AUTH,
    inAuth: boolean,
};

export const authActin = (inAuth: boolean): loginActionType => ({
    type: AUTH,
    inAuth,
});

export default authReducer;