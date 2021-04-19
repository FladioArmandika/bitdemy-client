import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { API_COURSE_GET } from "../constants/api"

export default class CourseAPI {

    public getCourse = (courseId: string) =>  {
        const config: AxiosRequestConfig = {
            method: API_COURSE_GET.method,
            url: API_COURSE_GET.url,
            params: { courseId }
        }

        return axios(config)
            .then( (response: AxiosResponse) => {
                if (response.status === 200) {
                    return response.data.data
                }
            })
    }
  
}