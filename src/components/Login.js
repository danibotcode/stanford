import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase.js';
import { actionTypes } from '../reducer';
import { useStateValue } from "../StateProvider.js";



function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // Sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch ({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result);
        })
        .catch(error => alert(error.message));


    };

    return (

        <div className="login">
            <div className="login__logo">
                <img
                    src="https://base.imgix.net/files/base/ebm/asumag/image/2019/05/asumag_9440_stanford_university_logo_png_1200.png?auto=format&fit=max&w=1200"
                    alt=""                    
                />

            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
