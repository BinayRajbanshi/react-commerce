import { createContext , useContext , useEffect, useReducer, useState} from "react";
import reducer from "./reducer";
import productsData from "./data/productsData";

const AppContext = createContext()

export const AppProvider = ({children}) => {

    // const URL = 'https://fakestoreapi.com/products';

    // States for Nav-Bar
    const [isModalOn , SetIsModalOn] = useState(false)
    const [isSidebarOn , SetIsSidebarOn] = useState(false)
    const[isOverlayOn , setIsOverlayOn] = useState(false)
   
    // functions for navBar
    const modalOpen = () => {
        SetIsModalOn(true)
    }
    const modalClose = () => {
        SetIsModalOn(false)
    }
    const sidebarOpen = () => {
        SetIsSidebarOn(true)
    }
    const sidebarClose = () => {
        SetIsSidebarOn(false)
    }
    const handleOverlayOpen =() => {
        setIsOverlayOn(true)
    }
    const handleOverlayClose =() => {
        setIsOverlayOn(false)
    }
    // =======Popular Products functionality=============//
    // fetching data 
    // useEffect(()=>{
    //     dataFetch()
    // } , [])
    // const dataFetch = async () => {
    //     try {
    //         const response = await fetch(URL)
    //     const data  = await response.json()
    //     dispatch({type:'DATA_FETCH' , payload:data})
    //     } catch (error) {
    //         console.log(error)
    //     }   
    // }

    const uniqCategory = ['all' , ...new Set(productsData.map((item) =>{
        return (item.category)
    }))]

    const defaultState = {
        products:productsData,
        category:uniqCategory ,
        cart:[],
        loading:false,
        quantity:0,
        allTotal:0
    }

    const[state , dispatch] = useReducer(reducer , defaultState)

    const addToCart = (product) => {
        dispatch({type:'ADD_TO_CART' , payload:product})
    }
    const removeFromCart = (id) => {
        dispatch({type:'REMOVE_FROM_CART', payload:id})
    }
    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }
    const increase = (id) => {
        dispatch({type:'INCREASE' , payload:id})
    }
    const decrease = (id) => {
        dispatch({type:'DECREASE' , payload:id})
    }
    const getTotals = () => {
        dispatch({type:'GET_TOTALS'})
    }
    useEffect(()=> {
        getTotals()
    },[state.cart])

    // dispatching in innitial render to fetch the filtered datas
    // useEffect(()=> {
    //     dispatch({type:'FETCH_FILTERED_PRODUCTS'})
    // } , [])

    // ===============Categories functionality==================//
    
    const filterCategories = (category) => {
       dispatch({type:'FETCH_FILTERED_PRODUCTS' , payload:category , allData:productsData})
    }
    // const setAll = () => {
    //     dispatch({type:'SET_ALL'} )
    // }
    

    return <AppContext.Provider
    value={{
        // nav Functions
        isModalOn,
        isSidebarOn,
        modalClose,
        modalOpen,
        sidebarClose,
        sidebarOpen,
        handleOverlayOpen,
        handleOverlayClose,
        isOverlayOn,

        // popular products
        state,
        addToCart,
        removeFromCart,
        clearCart,
        increase,
        decrease,

        // filter products
        filterCategories,
       
    }}> 
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}