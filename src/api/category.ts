import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { API_CATEGORY_GET, API_CATEGORY_GET_ALL } from "../constants/api"

export default class CategoryAPI {

    public getCategory = (categoryId: string) => {
        const config: AxiosRequestConfig = {
            method: API_CATEGORY_GET.method,
            url: API_CATEGORY_GET.url,
            params: { categoryId }
        }

        return axios(config)
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    return response.data.data
                }
            })
    }

    public getAllCategory = () => {
        const config: AxiosRequestConfig = {
            method: API_CATEGORY_GET_ALL.method,
            url: API_CATEGORY_GET_ALL.url
        }

        return axios(config)
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    return response.data.data
                }
            })
    }

}