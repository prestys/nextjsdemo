import { UserService } from "../../services/UserService"

const login = () => {

    const CreateUser = async () => {
        const newUser = {
            email: "testemail",
            password: "testpass"
        };

        await UserService.CreateUser(newUser);
    }

    return (
        <div>
            <button onClick={CreateUser}>create user test</button>
        </div>
    )
}

export default login;