import axios from "axios";

const SERVER_URL = "https://mojtaba-python.github.io/contacts-manager-app/server/db.json";

// @desc Get All Contacts
// @route GET https://localhost:9000/contacts
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts `;
    return axios.get(url);
}

//@desc Get Contact With Contact ID
//@route GET https://localhost:9000/contacts/:contactId
export const getContact = (contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url);
}

// @desc Get All Groups
export const getAllGroups = ()=>{
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

export const getGroup = (groupId)=>{
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(url);
}

//@desc Create New Contact
//@route POST http://localhost:9000/contacts/:contactId
export const createContact = (contact)=>{
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact);
}

//@desc Update Contact
//@route PUT http://localhost:9000/contacts/:contactId
export const updateContact = (contact, contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}

//@desc Delete Contacts 
//@route Delete http://localhost:9000/contacts/:contactId
export const deleteContact = (contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}
