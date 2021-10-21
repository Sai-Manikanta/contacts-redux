import { TiContacts } from 'react-icons/ti'
import { AiOutlinePlus } from 'react-icons/ai'

function Header() {
    return (
        <header>
            <h1 className="flex items-center text-3xl">
                <TiContacts className="mr-2" />
                Contacts Application
            </h1>
            <div className="flex mt-4">
                <form className="flex-grow">
                    <input 
                        type="text" 
                        placeholder="Search contacts" 
                        className="bg-gray-300 text-gray-900 rounded-full px-4 py-2 w-full"
                    />
                </form>
                <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white ml-4 px-3 text-sm rounded flex items-center">
                    <AiOutlinePlus className="mr-1" />
                    Add Contact
                </button>
            </div>
        </header>
    )
}

export default Header
