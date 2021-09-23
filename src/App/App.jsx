import { Switch, Route } from 'react-router-dom';
import ContactList from '../Components/ContactList/ContactList';
import { useState, useEffect } from 'react';
import AddContact from '../Components/AddContact/AddContact';

const App = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [contacts, setContacts] = useState(null);

  useEffect(()=>{
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if(!savedContacts) return;
    setAllContacts(savedContacts);
    setContacts(savedContacts);
  }, [])

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(allContacts));
    setContacts(allContacts);
  }, [allContacts])

  const addContactHandler = (contact) =>{
    setAllContacts([
      ...allContacts,
      {...contact, id: new Date().getTime()}
    ])

  }

  return (
    <div className="App">
      {
        <Switch>
          <Route path="/add-contact" render={ props => <AddContact onAdd={addContactHandler} {...props} />} />
          <Route path="/" exact render={ props => <ContactList contacts={contacts} {...props} />} />
        </Switch>
      }
    </div>
  );
}

export default App;
