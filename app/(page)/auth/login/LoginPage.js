import React, { useState } from 'react';
import '../../Layout.css';
import TextField from '../../../components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import ThemeSwitch from '@/app/components/base/darkmode/darkmodetoggle';
import { LoginService } from '@/services/client/auth';

const LoginPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Router = useRouter();
    const [error, setError] = useState('');

    const handleRegister = () => {
        toast.loading("Please Wait....")
        Router.push('/auth/register')
    }

    const handleChangeCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const handleFormData = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('All fields are required')
            toast.error('You must fill in all forms!!!');
            return;
        }

        if (!isChecked) {
            toast.info("You must Check The Box!!");
            return;
        }

        try {
            const payload = { email, password };
            await LoginService(payload);
            Router.push('/dashboard/profile/my-recipe');
            toast.success('Welcome!!')
        } catch (error) {
            console.log(error);
            if (error.response) {
                const errorMsg = error.response.data.message;
                toast.error(`Login Failure!!! - ${errorMsg}`);
            } else {
                toast.error("Login Failure!!! - Network Error or Server is down!!");
            }
        }
    }

    return (
        <div id='rightAuthentication' className="p-4 sm:p-8 md:p-12">
            <div className='darkMode flex justify-end'>
                <ThemeSwitch />
            </div>
            <div className='logincontainer flex flex-1 flex-col text-center py-36'>
                <h1 className='text-2xl font-semibold text-light-yellow'>Welcome</h1>
                <p className='text-gray-400'>Log in into your existing account</p>
                <form onSubmit={handleFormData}>
                    <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            label="E-mail"
                            placeholder="Enter Your Email"
                            className="shadow-md p-5 px-2 border w-full sm:w-3/4 focus:outline-none focus:ring focus:border-blue-500 ..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            label="Password"
                            placeholder="Enter Your Password"
                            className="shadow-md p-5 px-2 border w-full sm:w-3/4 focus:outline-none focus:ring focus:border-blue-500 ..."
                            onChange={(e) => setPassword(e.target.value)}
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
                        />
                    </div>
                    <ToastContainer position='bottom-right' />
                </form>
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
