import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const SignUp = ({ status }) => {

    const [passType, setPasType] = useState(true)

    // Form Value
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    // Register error
    const [reqError, serRegError] = useState(false)
    const [reqErrorMsg, serRegErrorMsg] = useState(null)

    // React hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(reqErrorMsg)

    // Submit Login 
    const submitLoginData = (data) => {
        setEmailError(false)
        setPasswordError(false)
        const { fNameInput, lNameInput, emailInput, passwordInput } = data
        const temtUsername = `${fNameInput}${lNameInput}`
        const genUsername = temtUsername + Math.random().toString(4).substr(2, 4)
        console.log(genUsername)
        if (/\S+@\S+\.\S+/.test(emailInput) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordInput)) {
            console.log(data + 1)
            setEmailError(false)
            setPasswordError(false)
            axios.post('/auth/register', {
                username: genUsername,
                email: emailInput,
                password: passwordInput
            })
                .then(res => {
                    console.log(res.status)
                })
                .catch(err => {
                    serRegError(true)
                    console.log(err?.status)
                })
        } else {
            if (!/\S+@\S+\.\S+/.test(emailInput)) {
                setEmailError(true)
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordInput)) {
                setPasswordError(true)
            } else if (!/\S+@\S+\.\S+/.test(emailInput) && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordInput)) {
                setEmailError(true)
                setPasswordError(true)
            } else {
                setEmailError(false)
                setPasswordError(false)
            }
        }
    }

    // clear input box error

    return (
        <form className='sign-up-form p-4 card' onSubmit={handleSubmit(submitLoginData)}>
            <div className="text-center mb-4">
                <h4>Register An Account</h4>
            </div>
            {
                reqError &&
                <div class="regesterError alert alert-danger" role="alert">
                    {reqErrorMsg}
                </div>
            }
            <div class="mb-3 d-flex">
                <div className="f-name me-2">
                    <label for="signUpFName" class="form-label">First Name <span className="text-danger">*</span></label>
                    <input type="text" class="form-control form-control-sm" id="signUpFName" placeholder="" {...register("fNameInput", { required: true })} />
                    {errors.fNameInput && <span className='text-danger'>First Name is requred.</span>}
                </div>
                <div className="f-name ms-2">
                    <label for="signUpLName" class="form-label">Last Name <span className="text-danger">*</span></label>
                    <input type="text" class="form-control form-control-sm" id="signUpLName" placeholder=""  {...register("lNameInput", { required: true })} />
                    {errors.lNameInput && <span className='text-danger'>Last Name is requred.</span>}
                </div>
            </div>
            <div class="mb-3">
                <label for="signInEmail" class="form-label">Email <span className="text-danger">*</span></label>
                <input type="email" class="form-control" id="signInEmail" placeholder="" {...register("emailInput", { required: true })} />
                {
                    emailError ?
                        <div className="input-box-error px-2 text-danger rounded mt-2 border border-danger">
                            <small>Please type a valid email</small>
                        </div>
                        :
                        <>
                            {errors.emailInput && <span className='text-danger'>Password is requred.</span>}
                        </>
                }
            </div>
            <div class="mb-3">
                <label for="signInPassword" class="form-label">Password <span className="text-danger">*</span></label>
                <div className="d-flex">
                    <input type={passType ? "password" : 'text'} class="form-control type-pass-input" id="signInPassword" placeholder=""  {...register("passwordInput", { required: true })} />
                    <button className="btn border type-pass-toggle" type='button' onClick={() => {
                        if (passType) {
                            setPasType(false)
                        } else {
                            setPasType(true)
                        }
                    }}>
                        {
                            passType ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash mb-1" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mb-1" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                        }
                    </button>
                </div>
                {
                    passwordError ?
                        <div className="input-box-error px-2 text-danger rounded mt-2 border border-danger">
                            <small>Please type a valid password</small>
                            <ul>
                                <li>At least 8 characters—the more characters, the better</li>
                                <li>A mixture of both uppercase and lowercase letters</li>
                                <li>A mixture of letters and numbers</li>
                            </ul>
                        </div>
                        :
                        <>
                            {errors.passwordInput && <span className='text-danger'>Password is requred.</span>}
                        </>
                }
            </div>
            <div className="mt-3">
                <button type='submit' className="btn-danger btn button-submit w-100">Sign Up</button>
            </div>
            <div className="mt-2">
                <h6>I have an account <span className="px-3 text-underline text-danger" onClick={() => status(true)} style={{ cursor: "pointer" }}>Login Now</span></h6>
            </div>
        </form>
    );
};

export default SignUp;