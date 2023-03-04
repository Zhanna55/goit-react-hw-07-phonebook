import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'Redux/operations';
import { ContactItem, DeleteButton } from './ContactItem.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItem>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <DeleteButton type="button" onClick={onDeleteContact}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
