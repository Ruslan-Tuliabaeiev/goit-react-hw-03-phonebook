
import React, { Component } from 'react';

import { nanoid } from 'nanoid'

import { Contacts } from './components/Contacts';

import { Form } from './components/Form';
import { Filter } from './components/Filter';
import style from './components/phonebook.module.css';
//import setContacts from  './setContacts.json';

class App extends Component {
  state = {
    contacts: [],
  
    filter: '',
  
    };
//////////

componentDidMount() {
// const setContact = this.setState('setContacts')
const contacts = localStorage.getItem('contacts');
console.log(contacts);
const parsedContacts = JSON.parse(contacts);
 console.log(JSON.parse(contacts));

if (parsedContacts) {
  
this.setState({contacts: parsedContacts})
console.log(this.setState({contacts: parsedContacts, }))
}


}

componentDidUpdate(prevProps, prevState) {

  // console.log('App componentDidUpdate');

  const nextContacts = this.state.contacts;
  const prevContacts = prevState.contacts;
 

  if (nextContacts !== prevContacts) {
    console.log('Обновилось');
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  //  if (nextContacts.length > prevContacts.length && prevContacts.length !== 0) {
  //    this.toggleModal();
  // }
  console.log(prevContacts, nextContacts);
}

/////////

    handleFilter = e => {


this.setState({filter: e.currentTarget.value})
    }

findContacts = () => { 
const {contacts, filter} = this.state
const normalizedFilter = filter.toLowerCase()
return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) )

  
}

deleteContacts = (id) => {
  this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
}


handleSubmit = ({name, number}) => {
  const {contacts} = this.state
  const findName = contacts.find(contact => contact.name === name)
  if (findName){
    alert('This name is already in the phone book')
  } else { const contact = {id: nanoid(), name, number}
 this.setState(({contacts}) => ({contacts:  [contact, ...contacts]}) )}

}

 render() {
 const visibleContacts = this.findContacts()

   return (
     
<>

<Form 
onAddContacts={this.handleSubmit}
/>
 <h2 className={style.contact}>Contacts</h2>

<Filter 
value={this.state.filter}
onChange={this.handleFilter}
/>


 <Contacts 
contacts={visibleContacts}
onDeleteContacts = {this.deleteContacts}

/>   


</>
)
 
 }

}

 export default App;

