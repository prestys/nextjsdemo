const UserService = {
    CreateUser: async (userData) => {
        try {
            const res = await fetch("/api/v1/user/create", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await res.json();
            return data;
        } catch (error){

        }
    }
};

export default UserService;