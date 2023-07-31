export const ContactList = ({ filterArray, handleDelete }) => (
  <ul>
    {filterArray.map(({ name, number, id }) => (
      <li key={id} id={id}>
        {name}: {number}
        <button onClick={handleDelete}> Delete</button>
      </li>
    ))}
  </ul>
);
