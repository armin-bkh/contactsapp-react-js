import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { IoReturnUpBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import ContactSkeleton from "../Skeletons/ContactSkeleton/ContactSkeleton";

const Contact = ({ location, match, history, onDelete }) => {
  const [contact, setContact] = useState(null);
  const contactId = Number(match.params.id);

  useEffect(() => {
    if (location.state) {
      const { contact } = location.state;
      setContact(contact);
      return;
    } else history.push("/")
    // if (contactId) {
    //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    //   const index = savedContacts.findIndex((ct) => ct.id === contactId);
    //   if (index === -1) history.push("/");
    //   const selectedContact = savedContacts[index];
    //   setContact(selectedContact);
    // }
  }, []);

  return (
    contact ? (
    <article className={`flex flex-col px-3 py-1 contact mx-auto`}>
      <Link to="/" className={`text-yellow-400 font-header relative inline`}>
        <IoReturnUpBack />
      </Link>
      <div className={`mx-auto`}>
        <FaUserCircle className={`text-gray-300 profile-logo`} />
      </div>
      <div className={`flex justify-between items-center`}>
        <div>
          <h1 className={`text-gray-300 font-name mb-2`}>{contact.name}</h1>
          <h6 className={`text-gray-500 font-email`}>{contact.email}</h6>
        </div>
        <Link
          className={`text-yellow-400 py-1 px-3 rounded-md border-yellow-400 font-name`}
          to={{ pathname: `/edit-${contact.id}`, state: { contact } }}
        >
          <BiPencil />
        </Link>
      </div>

      <button
        onClick={() => onDelete(contact.id)}
        className={`py-1 border-red-900 text-red-900 rounded-md bg-transparent font-name mt-auto`}
      >
        Remove contact
      </button>
    </article>
  ) : (
    <ContactSkeleton />
  )
  );
};

export default Contact;
