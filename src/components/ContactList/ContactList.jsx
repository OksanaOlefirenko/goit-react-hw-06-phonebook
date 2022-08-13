import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts, remove } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(remove(id));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={handleDelete}
          id={id}
        />
      ))}
    </List>
  );
};
