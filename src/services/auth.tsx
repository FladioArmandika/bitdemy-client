import AuthAPI from "../api/auth"
import { STORAGE_USER_ID } from "../constants/storage";

export default class AuthService {

    private authAPI: AuthAPI = new AuthAPI();

    public verifyUser = () => {
        return this.authAPI.verifyUser()
            .then((data) => {
                if (data) return data._doc
                else 
                    return {}
            })
    }

    // public setUser = (userId: string) => {
    //     localStorage.setItem(STORAGE_USER_ID, userId)
    // }

}