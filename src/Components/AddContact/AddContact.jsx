import { useState } from "react";
import ContactInput from "../Common/ContactInput/ContactInput";

const AddContact = ({ history, onAdd }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");

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
          onAdd(contact);
          history.push("/");
        } else setError("Contact email ins necessary");
      } else setError("Contact name is necessary");
    } else setError("All contact information is necessary");
  };

  return (
    <>
      <header>
        <h1 className={`font-header text-yellow-400 px-3 py-1`}>Add contact</h1>
      </header>
      <main>
        <form className={`px-3 flex flex-col h-screen`} onSubmit={submitHandler}>
          <ContactInput
            type="text"
            name="name"
            value={contact.name}
            onChange={changeHandler}
            placeholder="Name..."
          />
          <ContactInput
            type="email"
            name="email"
            value={contact.email}
            onChange={changeHandler}
            placeholder="Email..."
          />
          {error && <h1 className={`font-email text-red-900 mt-3 mb-2`}>{error}</h1>}
          <button
            type="submit"
            className={`mt-auto py-1 font-name rounded-md w-full outline-none border-none bg-yellow-400 text-gray-800`}
          >
            Add
          </button>
        </form>
      </main>
    </>
  );
};

export default AddContact;
