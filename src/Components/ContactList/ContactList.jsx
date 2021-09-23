import { Link } from "react-router-dom";
import ContactItem from "./ContactItem/ContactItem";
import { AiOutlinePlus } from 'react-icons/ai';

const ContactList = ({ contacts }) => {
    return ( 
        <>
        <header className={`border-gray-300 px-3 py-1`}>
            <h1 className={`text-yellow-400 font-header`}>Contacts</h1>
        </header>
        <main>
            <section className={`px-3`}>
                <ul>
                    { contacts ? 
                        contacts.map((ct) => <ContactItem key={ct.id} contact={ct} />) : 
                        <h1>Loading...</h1>
                    }
                </ul>
            </section>

            <Link className={`fixed bg-yellow-400 text-gray-800 inline p-1 rounded-full flex items-center justify-center font-name`} to="/add-contact"><AiOutlinePlus /></Link>
        </main>
        </>
     );
}
 
export default ContactList;