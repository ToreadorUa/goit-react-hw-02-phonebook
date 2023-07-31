import { Input } from 'components/Form/Form.styled';

export const Filter = ({ handleChange, filter }) => (
  <>
    <label htmlFor="filter">Find contacts by name:</label>
    <Input type="text" name="filter" onChange={handleChange} value={filter} />
  </>
);
