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
               existingItem.quantity+=1
               
            }
            else{
                action.payload.quantity=1;
                state.push(action.payload)
                
            }
        },
        removeFromcart(state,action){

        },
        reduceItem(state,action){
            console.log(action.payload);
            const exist=state.find((item)=>item.id===action.payload.id)
            if(exist.quantity===1){
                 return state=state.filter((item)=>{
                    return item.id!==action.payload.id
                })
            }
            else {
                exist.quantity-=1
                
            }
            

        },
        increaseItem(state,action){
            const exist = state.find((item)=>item.id===action.payload.id)
            exist.quantity+=1
        }
    }
})

export const {addTocart,removeFromcart,increaseItem,reduceItem}=cartSlice.actions
export default cartSlice.reducer