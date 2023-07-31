import { Button } from 'components/Form/Form.styled';
import { styled } from 'styled-components';

export const ContactList = ({ filterArray, handleDelete }) => (
  <Ul>
    {filterArray.map(({ name, number, id }, idx) => (
      <Li
        key={id}
        id={id}
        style={{
          backgroundColor: idx % 2 === 0 ? '#f0e5e5' : '#c6afaf',
        }}
      >
        {name}: {number}
        <Button onClick={handleDelete}> Delete</Button>
      </Li>
    ))}
  </Ul>
);

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  background: bisque;
  font-size: 18px;
  font-weight: 500;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;
