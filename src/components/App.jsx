import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
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
        <h1>Phonebook</h1>
        <Form contacts={this.contacts} />
        <h2>Contacts </h2>
        <Filter handleChange={this.handleChange} filter={this.filter} />
        <ContactList
          filterArray={filterArray}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}
