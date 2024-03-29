const UserService = {
    CreateUser: async (userData) => {
        const res = await fetch("/api/v1/user/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await res.json();
        console.log("Response", data);
        return data;
    },
    UserLogin: async (userData) => {
        const res = await fetch("/api/v1/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await res.json();
        console.log("Response", data);
        return data;
    },
    UserVerify: async () => {
        try {
            const req = await fetch("/api/v1/user/verify", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await req.json();
            const { userAuthenticated } = data;
            return userAuthenticated;
        } catch (error) {
            console.error("Error during verification:", error);
            throw error;
        }
    },
    GetUser: async () => {
        try {
            const req = await fetch("/api/v1/user/get-user", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await req.json();
            return data;
        } catch (error){
            console.log("Error getting user:", error);
            throw error;
        }
    }
};

export default UserService;