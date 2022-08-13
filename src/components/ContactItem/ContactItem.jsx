import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
