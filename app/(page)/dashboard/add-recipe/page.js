import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import React from 'react';
import AddPhoto from '@/app/components/module/gallery/addphoto';
import TextField from '@/app/components/base/textfield/textfield';
import AddVideo from '@/app/components/module/gallery/addvideo';
import Button from '@/app/components/base/button/button';

const AddRecipe = () => {
    return (
        <div>
            <div>
                <MainHeader />
            </div>
            <div className="grid justify-center py-10">
                <AddPhoto />
                <div className="pr-5 py-5">
                    <TextField
                        id="title"
                        type="text"
                        placeholder="Title"
                        spellCheck={false}
                        className="text-gray-500 px-5 bg-white-blue font-semibold"
                    />
                </div>
                <div className="pr-5">
                    <TextField
                        id="Ingredients"
                        type="text"
                        placeholder="Ingredients"
                        spellCheck={false}
                        className="text-gray-500 pb-48 px-5 bg-white-blue font-semibold h-56"
                    />
                </div>
                <div className="py-10">
                <AddVideo/>
                </div>
                <div className="flex justify-center py-5">
                <Button
                  className="bg-light-yellow w-72 text-center text-white rounded-lg"
                  type="submit"
                  name="Post"
                />
              </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AddRecipe