export const AddRecipeService = async (data) => {
    try {
        const res = await fetch('/v1/recipes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        })
        if (!res.ok) {
            throw new Error('Add Recipe Failure!!')
        }
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message || 'Something Wrong!!')
    }
}

export const GetRecipeService = async (page = 1, limit = 8, search = "") => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes?page=${page}&limit=${limit}&search=${search}`, {
        cache: 'no-cache'
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
  };
  
export const GetDetailRecipe = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE}/v1/recipes/${id}`);
    console.log(res, "<<<<<<<<<<<<<<<<<<<<<<<<<id")
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}