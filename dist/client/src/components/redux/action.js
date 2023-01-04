"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessegesActin = exports.addMessegesGroupActin = exports.getDialogListActin = void 0;
const DIALOGUSERS = "GET_LIST_DIALOGUSERS";
const MESSEGESGROUP = "GET_MESSEGESGROUP"; //not
const MESSEGES = "GET_MESSEGES";
const getDialogListActin = (payload) => ({ type: DIALOGUSERS, payload });
exports.getDialogListActin = getDialogListActin;
const addMessegesGroupActin = (payload) => ({ type: MESSEGESGROUP, payload }); //not
exports.addMessegesGroupActin = addMessegesGroupActin;
const getMessegesActin = (payload) => ({ type: MESSEGES, payload });
exports.getMessegesActin = getMessegesActin;
