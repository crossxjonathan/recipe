export const GetProfile = async () => {
    try {
        const res = await fetch(`/v1/users/profile`, {
            credentials: "include"
        });
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error);
        return Promise.reject("Something Error");
    }
}

export const GetMyRecipeService = async () => {
    try {
        const response = await fetch(`/v1/recipes/self`, {
           
        })
        if (!response.ok) {
            throw new Error('Something Wrong!!')
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message || 'Something Wrong!!')
    }
}

export const UpdateMyRecipeService = async (id, form) => {
    try {
        const response = await fetch(`/v1/recipes/${id}`, {
           method: "PUT",
           headers: {
                'Content-Type': 'application/json'
           },
           body: JSON.stringify(form)
        })
        if (!response.ok) {
            throw new Error('Something went wrong!!')
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message || 'Something went wrong!!')
    }
}

export const DeleteMyRecipeService = async (id) => {
    try {
        const response = await fetch(`/v1/recipes/${id}`, {
           method: "DELETE",
        })
        if (!response.ok) {
            throw new Error('Something Wrong!!')
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message || 'Something Wrong!!')
    }
}

export const UploadMyRecipeService = async (formData) => {
    try {
        const response = await fetch(`/v1/upload`, {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return Promise.reject(error.message || 'Something went wrong!');
    }
};
