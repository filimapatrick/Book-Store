import { ActionTypes } from "./ActionType";

export const SetBooks =(books)=>{
    return{
        type:ActionTypes.SET_BOOKS,
        payload:books,
    }
}

export const selectedBooks=(book)=>{
    return{
        type:ActionTypes.SELECTED_BOOK,
        payload:book,
    }
}