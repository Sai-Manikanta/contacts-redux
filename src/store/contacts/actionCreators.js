import { CONTACT_ADD, CONTACT_EDIT, CONTACT_DELETED, CONTACT_SELECTED } from './actionTypes';

export const addContact = (fullName, email, phone, company, address) => ({
    type: CONTACT_ADD,
    payload: {
        fullName, email, phone, company, address
    }
});

export const editContact = (fullName, email, phone, company, address) => ({
    type: CONTACT_EDIT,
    payload: {
        fullName, email, phone, company, address
    }
});

export const deleteContact = id => ({
    type: CONTACT_DELETED,
    payload: {
        id
    }
});

export const selectContact = contact => {
    return {
        type: CONTACT_SELECTED,
        payload: contact
    }
}