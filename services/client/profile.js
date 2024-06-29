export const GetProfile = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/users/profile`, {
            credentials: "include"
        });
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error);
        return Promise.reject("Something Error");
    }
}

export const GetLikeRecipe = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/like`, {
            credentials: 'include'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch liked recipes');
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
        return Promise.reject('Something went wrong');
    }
};

export const AddLikeRecipe = async (recipe_id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/like`, {
            method: "POST",
            body: JSON.stringify({ recipe_id }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message || 'Failed to like the recipe');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const cancelLikeRecipe = async (recipe_id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/like/${recipe_id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData); 
        throw new Error(errorData.message || 'Something went wrong!');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Fetch error:', error); 
      return Promise.reject(error.message || 'Something went wrong!');
    }
  };
  

export const GetSaveRecipe = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/save`, {
            credentials: 'include'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch saved recipes');
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
        return Promise.reject('Something went wrong');
    }
};


export const AddSaveRecipe = async (recipe_id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/save`, {
            method: "POST",
            body: JSON.stringify({ recipe_id }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message || 'Failed to like the recipe');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const cancelSaveRecipe = async (recipe_id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/save/${recipe_id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error('Something Wrong!!');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message || 'Something Wrong!!');
    }
}


export const GetMyRecipeService = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/self`, {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/${id}`, {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/${id}`, {
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/upload`, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Error: ${response.status} - ${response.statusText}\nDetails: ${errorDetails}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Upload error:', error);
      throw new Error(error.message || 'Something went wrong with upload!');
    }
  };
  



