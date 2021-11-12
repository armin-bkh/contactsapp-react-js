import { Link } from "react-router-dom";
import ContactItem from "./ContactItem/ContactItem";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineContacts } from "react-icons/ai";
import { useEffect, useState } from "react";
import ConatctItemSkeleton from "../Skeletons/ContactItemSkeleton/ContactItemSkeleton";

const ContactList = ({ contacts, onSearch }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!contacts.length) setError(true);
    else setError(false);
  }, [contacts]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  let returnValue = Array(30)
    .fill()
    .map((it, index) => <ConatctItemSkeleton key={index} />);

  if (contacts.length && !error) {
    returnValue = contacts.map((ct) => (
      <ContactItem key={ct.id} contact={ct} />
    ));
  }

  if (!contacts.length) {
    returnValue = (
      <section className={`py-1 flex flex-col items-center`}>
        <AiOutlineContacts className={`text-yellow-400 font-header`} />
        <h1 className={`text-yellow-400 font-header font-bold`}>
          No contact's
        </h1>
      </section>
    );
  }

  return (
    <>
      <header
        className={`border-gray-300 flex blocks items-center justify-between px-3 py-1`}
      >
        <h1 className={`text-yellow-400 font-header`}>Contact's</h1>
        <div className={`relative mt-2`}>
          <input
            className={`inp border-yellow-400 font-medium w-full px-3 py-1 rounded-md bg-transparent outline-none`}
            placeholder="search..."
            type="text"
            value={search}
            onChange={searchHandler}
          />
          <FiSearch className={`absolute text-yellow-400`} />
        </div>
      </header>
      <main>
        <section className={`px-3`}>
          <ul>{returnValue}</ul>
        </section>

        <Link
          className={`fixed bg-yellow-400 text-gray-800 inline p-1 rounded-full flex items-center justify-center font-name`}
          to="/add-contact"
        >
          <AiOutlinePlus />
        </Link>
      </main>
    </>
  );
};

export default ContactList;
