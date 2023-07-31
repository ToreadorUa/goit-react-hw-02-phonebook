import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormContainer, Input } from './Form.styled';

export class Form extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSub = e => {
    e.preventDefault();
    this.setState(prevState => {
      if (!prevState.contacts.some(el => el.name.includes(this.state.name)))
        return {
          contacts: [
            ...prevState.contacts,
            { name: this.state.name, number: this.state.number, id: nanoid() },
          ],
          name: '',
          number: '',
        };
      else {
        alert(`${this.state.name} is already in contact`);
        this.setState({
          name: '',
          number: '',
        });
        return prevState;
      }
    });
  };
  handleDelete = ({ target }) => {
    console.dir(target.parentElement.id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        el => !el.id.includes(target.parentElement.id)
      ),
    }));
  };

  render() {
    const filterArray = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <form onSubmit={this.handleSub}>
          <FormContainer>
            <label>
              Name
              <Input
                type="text"
                name="name"
                //   pattern="^[a-z A-Z а-я А-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <label>
              Number
              <Input
                type="tel"
                name="number"
                //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={this.state.number}
              />
            </label>
            <Button type="submit">Add contact</Button>
          </FormContainer>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="filter">Find contacts by name:</label>
        <Input type="text" name="filter" onChange={this.handleChange} />
        <ul>
          {filterArray.map(({ name, number, id }) => (
            <li key={id} id={id}>
              {name}: {number}
              <button onClick={this.handleDelete}> Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
