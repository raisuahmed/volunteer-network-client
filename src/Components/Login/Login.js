import React, {useContext} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';

const Login = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let {from} = location.state || {from: {pathname: "/"}};
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const {displayName, email} = result.user;
                const SignedInUser = {name: displayName, email: email};
                setLoggedInUser(SignedInUser);
                history.replace(from);
            })
            
    }


    return (
        <div className="login-container">
            <div className="logo mt-5">
                <Link to="/">
                    <img src="https://i.ibb.co/9nJfMcV/Group-1329.png" alt="" />
                </Link>
            </div>
            <div className="createAccountWithFbGoogle">
              
                <div className ="loginBtn" onClick = {handleGoogleSignIn}>
                    <img src = "https://i.ibb.co/xC3RNVs/google.png" alt = "" />
                    <p className = "text-middle" > <strong>Sign in with Google</strong></p>
                </div >
            </div >
        </div>
    );
};

export default Login;