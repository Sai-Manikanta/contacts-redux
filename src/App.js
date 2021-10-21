import Contacts from "./components/Contacts";
import Contact from './components/Contact';
import Header from "./components/Header";

function App() {
    return (
        <div className="max-w-5xl mx-auto p-10">
            <Header />
            <div className="flex items-start space-x-8 mt-8">
                <Contacts />
                <Contact />
            </div>
        </div>
    )
}

export default App
