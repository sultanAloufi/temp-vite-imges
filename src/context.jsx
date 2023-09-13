import { createContext,useContext,useState,useEffect } from "react";
const AppContext = createContext()

const getInitialDarkMode =() =>{
    const prefersDarkMode = window.matchMedia('(prefers-color-schema:dark').matches
    const storedDarkMode = localStorage.getItem('darkThem') === 'true'
    return storedDarkMode || prefersDarkMode
}
export const AppProvider = ({children}) =>{
    const [itemsImg,setItemImg] = useState('cat')
    const [isDarkTheme,setDarkTheme] = useState(getInitialDarkMode())
    const toggleDarkTheme = () =>{
        const newDarkTheme =!isDarkTheme
        setDarkTheme(newDarkTheme)
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme',newDarkTheme)
        localStorage.setItem('darkThem',newDarkTheme)
    }
    useEffect(()=>{
        document.body.classList.toggle('dark-theme',isDarkTheme)

    },[])
    return <AppContext.Provider value={{
        isDarkTheme,
        toggleDarkTheme,
        itemsImg,
        setItemImg
        }}>
        {children}
    </AppContext.Provider>
}




export const useGlobalContext = () => useContext(AppContext)