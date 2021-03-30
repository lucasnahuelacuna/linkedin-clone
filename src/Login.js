import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

const Login = () => {
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const register = () => {
        if(!name) {
            return alert('Please enter a full name!')
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    }))
                })
            })
            .catch(error => alert(error.message))
    }

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                }))
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" 
                alt=""
            />
            <form>
                <input 
                    value={name} 
                    placeholder="Full name (required if registering)"
                    onChange={e => setName(e.target.value)} 
                    type="text" 
                />
                <input
                    value={profilePic} 
                    placeholder="Profile picture URL (optional)" 
                    onChange={e => setProfilePic(e.target.value)}
                    type="text" 
                />
                <input 
                    value={email} 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)}
                    type="email" 
                />
                <input 
                    value={password} 
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)} 
                    type="password" 
                />
                <button type="submit" onClick={loginToApp} >Sign In</button>
            </form>
            <p>Not a member?
                <span className="login__register" onClick={register} > Register Now</span>
            </p>
        </div>
    )
}

export default Login
