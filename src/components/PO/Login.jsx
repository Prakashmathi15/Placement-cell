import React, { useState } from 'react'

function login() {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const usernameHandler = (e) => {
        setUserName(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }
  return (
    <>
    <form onSubmit={formSubmitHandler}>
        <div>
            <label 
            htmlFor="username"
            id='username'
            aria-placeholder='type your username...'
            >
                UserName
            </label>
            <input 
            type="text"
            value={username}
            onChange={usernameHandler}
             />
        </div>
        <div>
            <label 
            htmlFor="password"
            id='password'
            aria-placeholder='type your password...'
            >
                Password
            </label>
            <input 
            type="text"
            value={password}
            onChange={passwordHandler}
             />
        </div>
        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default login;