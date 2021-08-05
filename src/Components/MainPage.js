import React from 'react'
import './MainPage.css'
import { logout, selectUser} from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Chart from './Chart'

function MainPage() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <div className="main__page">
            <div>
                <h1>Welcome <span className="user__name">{user.name}</span></h1>
                <p>Last Name:{user.lastName}</p>
                <p>Email:{user.email}</p>
                <Chart/>
            </div>
            <button className="logout__button" onClick={(e) => handleLogout(e) }>Logout</button>
        </div>
    )
}

export default MainPage
