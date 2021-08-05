import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import './Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pswConfirmation, setPswConfirmation] = useState('');
    const [errors, setErrors] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== pswConfirmation) {
            setErrors('Passwords do not match!')
            setPswConfirmation('');
            return;
        }

        dispatch(login({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            pswConfirmation: pswConfirmation,
            loggedIn: true,
        }));
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}> 
              <h1>Login Here</h1>
              <input
                type='first__name'
                placeholder='First Name'
                value={name} onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type='last__name'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type='email'
                placeholder='Email'
                value={email} onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              />
              <div className="text__danger">{errors}</div>
              <input
                type='password'
                placeholder='Confirm Password'
                value={pswConfirmation}
                onChange={(e) => setPswConfirmation(e.target.value)}
                required
              />
              <button type='submit' className='submit__btn'>Submit</button>
            </form>
        </div>
    )
}

export default Login
