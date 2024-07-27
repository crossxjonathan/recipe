import React from 'react';
import Logo from '../../public/assets/logo/logo.svg';
import Image from 'next/image';
import BgImg from '../../public/assets/auth/background.svg';
import './Layout.css';

const LeftLayout = ({children}) => {
    return (
        <div id='leftAuthentication'>
            <div className='wrapAuth'>
                <div className='leftAuth'>
                    <Image src={BgImg} alt='BgImg' />
                    <div className='logo p-56'>
                        <Image src={Logo} alt='Logo' />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LeftLayout