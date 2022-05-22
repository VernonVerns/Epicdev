import { State } from '.';
import type { Contact } from '../types';

export const SET_CONTACTS = (state:State, contacts: Contact[]) => {
    state.contacts = contacts
}

export const SET_CONTACT = (state: State, contact: Contact) => {
    state.contact = contact
}