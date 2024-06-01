export const GetProfile = async () => {
    try {
        const res = await fetch(`https://pijar-mama-recipe.vercel.app/v1/users/profile`, {
            credentials: "include"
        });
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error);
        return Promise.reject("Something Error");
    }
}