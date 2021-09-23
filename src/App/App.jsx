import { Switch, Route, withRouter } from "react-router-dom";
import ContactList from "../Components/ContactList/ContactList";
import { useState, useEffect } from "react";
import AddContact from "../Components/AddContact/AddContact";
import Contact from "../Components/Contact/Contact";
import EditContact from "../Components/EditContact/EditContact";

const App = ({ history }) => {
  const [allContacts, setAllContacts] = useState([]);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (!savedContacts) {
      history.push("/add-contact");
      return;
    }
    setAllContacts(savedContacts);
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(allContacts));
    setContacts(allContacts);
    if(allContacts){
      if(!allContacts.length){
        history.push("add-contact")
      }
    }
  }, [allContacts]);

  const addContactHandler = (contact) => {
      setAllContacts([
        ...allContacts,
        { ...contact, id: new Date().getTime() },
      ]);
  };

  const deleteContactHandler = (id) => {
    const filteredContacts = allContacts.filter((ct) => ct.id !== id);
    setAllContacts(filteredContacts);
    if (!filteredContacts.length) {
      history.push("/add-contact");
      return;
    }
    history.push("/");
  };

  const editContactHandler = (id, contact) => {
    const index = allContacts.findIndex((ct) => ct.id === id);
    let cloneContacts = [...allContacts];
    let selectedContact = { ...cloneContacts[index] };
    selectedContact = contact;
    cloneContacts[index] = selectedContact;
    setAllContacts(cloneContacts);
  };

  const searchContactHandler = (value) => {
    const filteredContacts = allContacts.filter((ct) =>
      String.prototype
        .concat(ct.name, " ", ct.email)
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      {
        <Switch>
          <Route
            path="/contact-:id"
            render={(props) => (
              <Contact onDelete={deleteContactHandler} {...props} />
            )}
          />
          <Route
            path="/edit-:id"
            render={(props) => (
              <EditContact onEdit={editContactHandler} {...props} />
            )}
          />
          <Route
            path="/add-contact"
            render={(props) => (
              <AddContact onAdd={addContactHandler} {...props} />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                contacts={contacts}
                onSearch={searchContactHandler}
                {...props}
              />
            )}
          />
        </Switch>
      }
    </div>
  );
};

export default withRouter(App);
