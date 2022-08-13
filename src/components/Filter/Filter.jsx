import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleInput = evt => {
    dispatch(filter(evt.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filterName}
        onChange={handleInput}
      />
    </Label>
  );
};
