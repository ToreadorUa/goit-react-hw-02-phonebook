import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormContainer, Input } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSub = e => {
    // создание нового контакта с проверкой на существование такого
    e.preventDefault();
    if (
      this.props.contacts.some(el =>
        el.name.toLowerCase().includes(this.state.name.toLowerCase())
      )
    )
      this.props.contacts.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            name: this.state.name,
            number: this.state.number,
            id: nanoid(),
          },
        ],
        name: '',
        number: '',
      }));
    else {
      alert(`${this.state.name} is already exist`);
      this.setState({
        name: '',
        number: '',
      });
      return prevState;
    }
  };

  render() {
    return (
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
    );
  }
}
