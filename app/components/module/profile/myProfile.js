import React, { useState, useRef } from 'react';
import Image from 'next/image';
import EditImg from '../../../../public/assets/profile/edit-3.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetProfile, UploadMyRecipeService } from '@/services/client/profile';
import ProfileDefault from '../../../../public/assets/profile/profile1.png';

const MyProfile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const fileInputRef = useRef(null);

    const handleGetProfile = async () => {
        try {
            const user = await GetProfile();
            setProfile(user.data);
            setLoading(false);
        } catch (err) {
            console.error('Failed to fetch profile:', err);
            setLoading(false);
        }
    };

    const handleUploadProfile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const res = await UploadMyRecipeService(formData);
                console.log('Upload response:', res);
                setProfile(prevProfile => ({ ...prevProfile, image: res.data.file_url }));
                toast.success("Profile image uploaded successfully!");
            } catch (error) {
                console.error('Failed to upload profile image:', error);
                toast.error("Failed to upload profile image!");
            }
        }
    };
    handleGetProfile();

    return (
        <div>
            <div className="grid justify-center py-5">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <>
                        <Image
                            width={148}
                            height={148}
                            className='rounded-full w-28 h-28 object-cover relative left-8'
                            src={profile?.image || ProfileDefault}
                            alt='Profile Image'
                        />
                        <div className='relative bottom-2 px-20 cursor-pointer left-8'>
                            <Image
                                onClick={handleUploadProfile}
                                src={EditImg}
                                alt="Edit Icon"
                                width={24}
                                height={24}
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className='text-center'>
                            <p className='font-semibold'>{profile?.name || 'Name:'}</p>
                            <p className='font-semibold'>{profile?.email || 'Email:'}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyProfile;