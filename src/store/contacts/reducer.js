import { v4 as uuidv4 } from 'uuid';
import { CONTACT_ADD, CONTACT_EDIT, CONTACT_DELETED, CONTACT_SELECTED } from './actionTypes';

const intialState = {
    list: [
        {
            _id: 1,
            fullName: 'Sai Mani Bandaru',
            email: 'mani333007@gmail.com',
            phone: '9505629940',
            company: 'Will Soft',
            address: 'Hyderabad'
        },
        {
            _id: 2,
            fullName: 'Sai',
            email: 'mani333007@gmail.com',
            phone: '9505629940',
            company: 'Will Soft',
            address: 'Hyderabad'
        },
        {
            _id: 3,
            fullName: 'Devi Kiran Bandaru',
            email: 'devikiran@gmail.com',
            phone: '7288097613',
            company: 'Will Soft',
            address: 'Hyderabad'
        }
    ],
    count: 20,
    loading: false,
    error: null,
    selectedContact: {}
};

function contactsReducer(state = intialState, action){
    switch(action.type){
        case CONTACT_ADD:
            return {
                list: [
                    ...state.list,
                    {
                        _id: uuidv4(),
                        ...action.payload
                    }
                ]
            }
        case CONTACT_EDIT:
            return {
                list: []
            }
        case CONTACT_DELETED:
            return {
                ...state,
                list: state.list.filter(contact => contact._id !== action.payload.id)
            }
        case CONTACT_SELECTED:
            return {
                ...state,
                selectedContact: action.payload
            }
        default:
            return state
    }
}

export default contactsReducer