
// type StatusResponseType = 'SUCCESS' | 'FAILURE'
type methodAPI = 'GET' | 'POST' | 'PUT' | 'DELETE';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

interface apiRoute {
    url: string,
    method: methodAPI
}

// COURSE
export const API_COURSE_GET: apiRoute = { url: SERVER_URL + '/course', method: 'GET' }
export const API_COURSE_GET_BY_CATEGORY: apiRoute = { url: SERVER_URL + '/course/category', method: 'GET' }

// CATEGORY
export const API_CATEGORY_GET_ALL: apiRoute = { url: SERVER_URL + '/category', method: 'GET'}
export const API_CATEGORY_GET: apiRoute = { url: SERVER_URL + '/category', method: 'GET'}