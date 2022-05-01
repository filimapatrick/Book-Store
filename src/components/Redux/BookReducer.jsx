import { ActionTypes } from "./ActionType";

const initialState={
    books:[
        {
            id:1,
            title:'Mr patrick',
            category: 'man',
        }
    ]
}

export const bookReducer = (state=initialState,{type,payload})=>{
    switch(type){
     case ActionTypes.SET_PRODUCTS:
         return state;
         default:
             return state
    }
}