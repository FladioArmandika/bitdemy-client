import Cookies from "universal-cookie/es6";
import AuthAPI from "../api/auth"

export default class AuthService {

    private cookies = new Cookies();
    private authAPI: AuthAPI = new AuthAPI();

    public verifyUser = () => {
        this.authAPI.verifyUser()
            .then((data) => {
                console.log(data);
            })
    }

}