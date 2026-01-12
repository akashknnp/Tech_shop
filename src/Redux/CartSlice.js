import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addTocart(state,action){    
            const existingItem=state.find((item)=>{
                return item.id===action.payload.id
            })

            if(existingItem){
               console.log(existingItem);
               
            }
            else{
                action.payload.quantity=1;
                state.push(action.payload)
                
            }
        },
        removeFromcart(state,action){

        },
        reduceItem(state,action){

        },
        increaseItem(state,action){

        }
    }
})

export const {addTocart,removeFromcart,increaseItem,reduceItem}=cartSlice.actions
export default cartSlice.reducer