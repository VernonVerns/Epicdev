export type Contact = {
    id?: string
    name: string
    surname: string
    username: string
    email: string
    password: string
    cellNumber: string
    homeNumber?: string
    notes?: Note[]
    dateCreated?: string
    dateUpdated?: string
}

export type Note = {
    id?: string
    contact_id?: string
    noteTitle: string
    noteDescription: string
    dateCreated?: string
    dateUpdated?: string
}
