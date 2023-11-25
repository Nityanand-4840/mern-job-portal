import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                // Do something with the user if needed
            })
            .catch((error) => {
                const errorMessage = error.message;
                // Accessing error.customData.email if error.customData exists
                const email = error.customData ? error.customData.email : null;

                const credential = GoogleAuthProvider.credentialFromError(error);
                // Handle error or show appropriate message
            });
    };

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <button onClick={handleLogin} className='px-8 py-2 text-white bg-blue hover:bg-black'>Login</button>
        </div>
    );
};

export default Login;
