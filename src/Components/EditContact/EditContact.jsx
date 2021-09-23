import { useEffect, useState } from "react";
import ContactInput from "../Common/ContactInput/ContactInput";
import EditContactSkeleton from "../Skeletons/EditContactSkeleton/EditContactSkeleton";

const EditContact = ({ location, match, history, onEdit }) => {
  const [contact, setContact] = useState(null);
  const [error, setError] = useState("");
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

  const changeHandler = (e) => {
    setError("");
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (contact.name || contact.email) {
      if (contact.name) {
        if (contact.email) {
          onEdit(contact.id, contact);
          history.push("/");
        } else setError("Contact email is necessary");
      } else setError("Conatct name is necessary");
    } else setError("All contact information is necessary");
  };
  return (
    <>
      <header className={`px-3 py-1 text-yellow-400 font-header`}>
        Edit contact
      </header>
      <main>
        {contact ? (
          <form
            className={`h-screen flex flex-col px-3`}
            onSubmit={submitHandler}
          >
            <ContactInput
              type="text"
              name="name"
              value={contact.name}
              placeholder="Name..."
              onChange={changeHandler}
            />
            <ContactInput
              type="email"
              name="email"
              value={contact.email}
              placeholder="Email..."
              onChange={changeHandler}
            />
            {error && (
              <h1 className={`font-email text-red-900 mt-3`}>{error}</h1>
            )}
            <button
              type="submit"
              className={`w-full py-1 mt-auto bg-yellow-400 text-gray-800 rounded-md border-none outline-none`}
            >
              Submit
            </button>
          </form>
        ) : (
          <EditContactSkeleton />
        )}
      </main>
    </>
  );
};

export default EditContact;
