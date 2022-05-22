import axios from 'axios'
// const axios = Axios.defaults

export default class API {
    constructor(controller) {
        axios.defaults.baseURL = `http://localhost:5000/${controller}/`
    }
    async getAll(endpoint) {
        return await axios.get(endpoint)
    }

    async getById(endpoint) {
        return await axios.get(endpoint)
    }

    async search(endpoint, payload) {
        return await axios.get(endpoint, {data: {searchText: payload}})
    }

    async create(endpoint, payload) {
        return await axios.post(endpoint, payload)
    }

    async delete(endpoint) {
        return await axios.delete(endpoint)
    }

    async batchDelete(endpoint, payload) {
        return await axios.delete(endpoint, {data: {contacts: payload}})
    }
    
}