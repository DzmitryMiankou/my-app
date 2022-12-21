const AUTH = "AUTH";





export type InitialStateType = {
    isAoth: boolean,
}
const initialState: InitialStateType = {
    isAoth: false,
}

const authReducer = (state = initialState, action: any) => {
    let copy;

    switch (action.type) {
        case AUTH: {
            copy = { ...state, isAoth: action.inAuth };
            return copy;
        }
        default:
            return state = { ...initialState };
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