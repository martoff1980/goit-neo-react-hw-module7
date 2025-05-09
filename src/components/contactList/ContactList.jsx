import { useSelector, useDispatch } from 'react-redux';
import Contact from '../contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import './ContactList.css';

const ContactList = () => {
  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className="contact-list">
      <ul>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
