import React from 'react'
import Login from './Components/Login'
import MainPage from './Components/MainPage'
import './App.css'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'



const App = () => {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div>
            {user ? <MainPage/> : <Login/>}
        </div>
    )
}

export default App
