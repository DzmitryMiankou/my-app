const DIALOGUSERS = "GET_LIST_DIALOGUSERS";
const MESSEGESGROUP = "GET_MESSEGESGROUP";//not
const MESSEGES = "GET_MESSEGES";
const USERS = "GET_USERS";
const KEY = "GET_KEY";



type getDialogListActionType = {
    type: typeof DIALOGUSERS,
    payload: any,
};
type getMessegesActionType = {
    type: typeof MESSEGES,
    payload: any,
};
type addMessegesGroupActionType = {//not
    type: typeof MESSEGESGROUP,
    payload: any,
};
type getUsersActionType = {
    type: typeof USERS,
    payload: any,
};
type getKEYActionType = {
    type: typeof KEY,
    payload: any,
};

export const getDialogListActin = (payload: any): getDialogListActionType => ({ type: DIALOGUSERS, payload });
export const addMessegesGroupActin = (payload: any): addMessegesGroupActionType => ({ type: MESSEGESGROUP, payload });//not
export const getMessegesActin = (payload: any): getMessegesActionType => ({ type: MESSEGES, payload });
export const getUsersActin = (payload: any): getUsersActionType => ({ type: USERS, payload });
export const getKEYActin = (payload: any): getKEYActionType => ({ type: KEY, payload });