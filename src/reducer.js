

const reducer = (state , action) => {
    if(action.type==="DATA_FETCH"){
        return {...state , products:action.payload , loading:false}
    }
    if(action.type==='ADD_TO_CART'){
        return {...state , cart:[...state.cart , {...action.payload}]}
    }
    if(action.type==='REMOVE_FROM_CART'){
        let changedCart =state.cart.filter((product)=>product.id!==action.payload)
        return{...state , cart:changedCart}
    }
    if(action.type==='CLEAR_CART'){
        return {...state , cart:[]}
    }
    if(action.type==='INCREASE'){
        let changedCart = state.cart.map((item)=>{
            if(item.id === action.payload){
                return { ...item , amount:item.amount + 1 }
            }
            return item
        })
        return {...state, cart:changedCart}
    }
    if(action.type==='DECREASE'){
        let changedCart = state.cart.map((item)=> {
            if(item.id === action.payload) {
                return {...item , amount:item.amount - 1 }
            }
            return item
        }).filter((item)=>item.amount !== 0)
        return{
            ...state , cart:changedCart
        }
    }

    if(action.type==='GET_TOTALS'){
        const getTotal = state.cart.reduce((total , state)=>{
            const {price , amount } = state
            total.quantity = total.quantity + amount
            total.allTotal += (amount * price)
            return total
        } , {
            quantity:0 ,
            allTotal:0 
        })
        const {quantity , allTotal} = getTotal
        return {...state , quantity: quantity , allTotal:allTotal }
    }
    if(action.type==='FETCH_FILTERED_PRODUCTS'){

        let changedProducts = () => {
            if(action.payload === 'all'){
                return action.allData
            }
                return action.allData.filter((item)=>item.category === action.payload) ; 
          
               
        }
        return {...state , products:changedProducts()}
    }
   
    return state;
}

export default reducer;