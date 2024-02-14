const UserService = {
    CreateUser: async (userData) => {
        try {
            console.log("Hit Service");
            const res = await fetch("http://localhost:3000/api/v1/user/create", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await res.json();
            console.log("Response", data);
            return data;
        } catch (error){

        }
    }
};

export default UserService;