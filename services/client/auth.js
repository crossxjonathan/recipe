export const LoginService = async (form) => {
    try {
        console.log('LoginService')
        const res = await fetch(`/v1/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(form),
            credentials: 'include'
        })
        const result = await res.json()
        return result;
    } catch (error) {
        console.log(error);
        return Promise.reject("Something Error");
    }
}

export const RegisterService = async (form) => {
    try {
        console.log('RegisterService')
        const res = await fetch(`/v1/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(form)
        })
        const result = await res.json()
        return result;
    } catch (error) {
        console.log(error);
        return Promise.reject("Something Error");
    }
}