const DIALOGUSERS = "GET_LIST_DIALOGUSERS";
const MESSEGESGROUP = "GET_MESSEGESGROUP";//not
const MESSEGES = "GET_MESSEGES";

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


export const getDialogListActin = (payload: any): getDialogListActionType => ({ type: DIALOGUSERS, payload });
export const addMessegesGroupActin = (payload: any): addMessegesGroupActionType => ({ type: MESSEGESGROUP, payload });//not
export const getMessegesActin = (payload: any): getMessegesActionType => ({ type: MESSEGES, payload });