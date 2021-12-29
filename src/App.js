
import React, { Component } from 'react';

import { nanoid } from 'nanoid'

import { Contacts } from './components/Contacts';

import { Form } from './components/Form';
import { Filter } from './components/Filter';
import style from './components/phonebook.module.css';
import initialContacts from './localStorage.json'

class App extends Component {
  state = {
    contacts:  initialContacts ,
  
    filter: '',
  
    };


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

