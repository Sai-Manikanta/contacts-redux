import { useSelector } from 'react-redux';
import Contacts from "./components/Contacts";
import Contact from './components/Contact';
import Header from "./components/Header";

function App() {
    const selectedContact = useSelector(store => store.contacts.selectedContact)
    return (
        <div className="max-w-5xl mx-auto p-10">
            <Header />
            <div className="flex items-start space-x-8 mt-8">
                <Contacts />
                {selectedContact.hasOwnProperty('_id') && (
                    <Contact selectedContact={selectedContact} />
                )}
            </div>
        </div>
    )
}

export default App
