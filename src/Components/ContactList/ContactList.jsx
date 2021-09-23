import { Link } from "react-router-dom";
import ContactItem from "./ContactItem/ContactItem";
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from "react";

const ContactList = ({ contacts, onSearch }) => {
    const [search, setSearch] = useState('');

    const searchHandler = (e) => {
        setSearch(e.target.value)
        onSearch(e.target.value);
    }

    return ( 
        <>
        <header className={`border-gray-300 flex blocks items-center justify-between px-3 py-1`}>
            <h1 className={`text-yellow-400 font-header`}>Contacts</h1>
            <div className={`relative mt-2`}>
                <input className={`inp border-yellow-400 w-full px-3 py-1 rounded-md bg-transparent outline-none`} placeholder="search..." type="text" value={search} onChange={searchHandler} />
                <FiSearch className={`absolute text-yellow-400`}/>
            </div>
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