import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { API_AUTH_LOGIN, API_AUTH_VERIFY } from "../constants/api"

export default class AuthAPI {

    public login = () => {
        const config: AxiosRequestConfig = {
            method: API_AUTH_LOGIN.method,
            url: API_AUTH_LOGIN.url,
        }

        return axios(config)
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    return response.data.data
                }
            })
    }

    public verifyUser = () => {
        const config: AxiosRequestConfig = {
            method: API_AUTH_VERIFY.method,
            url: API_AUTH_VERIFY.url,
            withCredentials: true,
        }

        return axios(config)
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    return response.data.data
                }
            })
    }

}