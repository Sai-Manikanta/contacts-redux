import { useState } from 'react';
import { TiContacts } from 'react-icons/ti'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from './../store/modal/actionCreators'
import { setSearchQuery, removeSelectedContact } from './../store/contacts/actionCreators'

function Header() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const selectedContact = useSelector(store => store.contacts.selectedContact);

    const handleSearchQueryChange = e => {
        setQuery(e.target.value);
        dispatch(setSearchQuery(e.target.value));
        // condition
        if(selectedContact.hasOwnProperty('_id') && (!selectedContact.fullName.toLowerCase().includes(e.target.value))){
            dispatch(removeSelectedContact());
        }
    }

    return (
        <header>
            <h1 className="flex items-center text-3xl">
                <TiContacts className="mr-2" />
                Contacts Application
            </h1>
            <div className="flex mt-4">
                <input 
                    type="text" 
                    placeholder="Search contacts" 
                    className="bg-gray-300 flex-grow text-gray-900 rounded-full px-4 py-2"
                    value={query}
                    onChange={handleSearchQueryChange}
                />
                <button 
                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white ml-4 px-3 text-sm rounded flex items-center"
                    onClick={() => dispatch(openModal({}))}
                >
                    <AiOutlinePlus className="mr-1" />
                    Add Contact
                </button>
            </div>
        </header>
    )
}

export default Header
