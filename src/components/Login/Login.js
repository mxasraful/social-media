import React, { useState } from 'react';
import "./Login.css";
import socialMediaLogo from './../../logo/asraful-social-app-logo-1.png';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Login = () => {

    const [loginForm, setLoginForm] = useState(true)

    return (
        <div className='loginPage'>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-sm-7 d-flex">
                        <div className="col-5 pe-3">
                            <sapn to='/' className='pb-5'>
                                <img src={socialMediaLogo} alt="Social media by AarafulWeb" className="img-fluid pe-5 mb-5" />
                            </sapn>
                            <h6 className='ps-4 mt-2'>© All Rights Reserved By <a href="https://asrafulweb.com">AsrafulWeb</a>.</h6>
                            <small className='ps-4'>Design And Developed By <a href="https://mxasraful.com">Mx Asraful</a>.</small>
                        </div>
                        <div className="login-option ps-4 col-7">
                            {
                                loginForm ?
                                    <SignIn status={setLoginForm} />
                                    :
                                    <SignUp status={setLoginForm} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;