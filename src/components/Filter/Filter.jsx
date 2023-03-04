import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'Redux/selectors';
import { setFilter } from 'Redux/filterSlice';
import { FilterLabel } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    const newFilter = event.target.value.toLowerCase();
    dispatch(setFilter(newFilter));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </FilterLabel>
  );
};

export default Filter;
