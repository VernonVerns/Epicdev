import type { Contact, Note } from '../types/';
import API from '../api'
const contactApi = new API('contacts')
// const noteApi = new API('notes')

export const  addContact = async ({commit}: any, payload: Contact)  => {
    const contactAddTask = await contactApi.create('/create', payload)
    if (contactAddTask.status == 200) {
        await getContacts({commit});
    }

    return contactAddTask
     
}

export const getContacts =  async ({commit}: any) => {
    try {
        const contacts = await contactApi.getAll<Contact[]>('')
        commit('SET_CONTACTS', contacts)
    } catch (error) {
        throw error
    }
}
export const  getContact = async ({commit}: any, id: string) => {
    const contact = await contactApi.getById<Contact>(`/${id}`)
    commit('SET_CONTACT', contact)
}

export const searchContacts = async ({commit}: any, searchText: string) =>  {

}