import type { Contact, Note } from '../types';
import axios from 'axios'
// const axios = Axios.defaults

export default class API {
    constructor(controller: string) {
        axios.defaults.baseURL = `http://localhost:5000/${controller}/`
    }
    async getAll<T>(endpoint: string) {
        return  (await axios.get<T>(endpoint)).data
    }

    async getById<T>(endpoint: string) {
        return (await axios.get<T>(endpoint)).data
    }

    async search<T>(endpoint: string, payload: string) {
        return (await axios.get<T>(endpoint, {data: {searchText: payload}})).data
    }

    async create<T>(endpoint: string, payload: T) {
        return await axios.post<T>(endpoint, payload)
    }

    async delete(endpoint: string) {
        return await axios.delete(endpoint)
    }

    async batchDelete(endpoint: string, payload: string[]) {
        return await axios.delete(endpoint, {data: {contacts: payload}})
    }
    
}