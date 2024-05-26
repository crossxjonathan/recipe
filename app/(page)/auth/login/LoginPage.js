import React, { useState } from 'react';
import '../../Layout.css';
import TextField from '../../../components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import ThemeSwitch from '@/app/components/base/darkmode/darkmodetoggle';
import Api from '@/app/configs/Api';

const LoginPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const Router = useRouter();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleRegister = () => {
        toast.loading("Please Wait....")
        Router.push('/auth/register')
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm(prevFormData => ({
            ...prevFormData,
            [id]: value
        }))
        console.log(id, value)
    };

    const handleChangeCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email === '' || form.password === '') {
            toast.info('You must fill in all forms!!!');
            return;
        }

        if (!isChecked) {
            toast.info("You must Check The Box!!");
            return;
        }

        Api.post(`/auth/login`, {
            email: form.email,
            password: form.password,
        })
            .then((res) => {
                console.log(res);
                toast.success(`Welcome!!! ${form.email}`);
                const { token, refreshToken } = res.data.data;
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
                Router.push('/dashboard/home');
            })
            .catch((err) => {
                console.log(err);
                if (err.response) {
                    const error = err.response.data;
                    toast.error(`Login Failure!!! - ${error.message}`);
                } else {
                    toast.error("Login Failure!!! - Network Error or Server is down.");
                }
            });
    };

    return (
        <div id='rightAuthentication' className="p-4 sm:p-8 md:p-12">
            <div className='darkMode flex justify-end'>
                <ThemeSwitch />
            </div>
            <div className='logincontainer flex flex-1 flex-col text-center py-36'>
                <h1 className='text-2xl font-semibold text-light-yellow'>Welcome</h1>
                <p className='text-gray-400'>Log in into your existing account</p>
                <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
                    <TextField
                        id="email"
                        type="email"
                        spellCheck={false}
                        value={form.email}
                        required
                        label="E-mail"
                        placeholder="Enter Your Email"
                        className="shadow-md"
                        onChange={handleChange}
                    />
                </div>
                <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
                    <TextField
                        id="password"
                        type="password"
                        value={form.password}
                        spellCheck={false}
                        required
                        label="Password"
                        placeholder="Enter Your Password"
                        className="shadow-md"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-start justify-center py-5">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleChangeCheckbox}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-light-yellow dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-light-yellow hover:underline dark:text-yellow-500">terms and conditions</a>.</label>
                </div>
                <div className='flex justify-center'>
                    <Button
                        type="submit"
                        name="Login"
                        className="w-96 h-14 bg-light-yellow text-white py-3"
                        onClick={handleSubmit}
                    />
                    <ToastContainer
                        position='bottom-right'
                    />
                </div>
                <div className='py-5'>
                    <p className="text-gray-500 text-center">Forgot Password ?</p>
                </div>
                <div>
                    <p className='text-gray-500'>Don’t have an account? <span onClick={handleRegister} className='text-light-yellow font-semibold hover:text-yellow-500 cursor-pointer'>Sign Up</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
