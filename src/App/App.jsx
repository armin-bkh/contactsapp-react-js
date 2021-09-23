import { Switch, Route } from 'react-router-dom';
import ContactList from '../Components/ContactList/ContactList';
import { useState, useEffect } from 'react';

const App = () => {
  const [allContacts, setAllContacts] = useState(null);
  const [contacts, setContacts] = useState(null);

  useEffect(()=>{
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    setAllContacts(savedContacts);
    setContacts(savedContacts);
  }, [])

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(allContacts));
  }, [allContacts])

  return (
    <div className="App">
      {
        <Switch>
          <Route path="/" render={ props => <ContactList contacts={contacts} {...props} />} />
        </Switch>
      }
    </div>
  );
}

export default App;
