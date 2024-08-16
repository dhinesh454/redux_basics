import { createStore } from "redux";

const initialStage = {counter:0,showToodler:true}
const counterReducer = (state = initialStage,action) => {
    
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1,
            showToodler:state.showToodler
        }
    }

    if(action.type === 'decrement'){
        return {
            counter : state.counter - 1,
            showToodler:state.showToodler
        
        }
    }

    if(action.type ===  'incresesby5'){
        return{
            counter:state.counter+action.amount,
            showToodler:state.showToodler
        
        }
    }
    
    if(action.type === 'toodler'){
        return{
            showToodler:!state.showToodler,
            counter:state.counter
        }
    }
    return state;
    
}

const store = createStore(counterReducer);


export default store;
