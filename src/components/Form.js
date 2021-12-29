import { Component } from "react/cjs/react.production.min";
import style from './phonebook.module.css';
import PropTypes from'prop-types';


export class Form extends Component {
     static propTypes = {
        onAddContacts: PropTypes.func.isRequired
     };
      state = {
         name: '',
         number: '',
        };


        handleChange  = e => {
            const {name, value} = e.currentTarget;
            this.setState({[name]: value});
                }

                
handleSubmit = (e) => {
    e.preventDefault()
    const {name, number} = this.state
    this.props.onAddContacts({name, number})
      this.reset();
     
   }
   reset = () => {
    this.setState({name: '', number: '' })
  }
  render() {
 
    return (
      
 <>
 <h1 className={style.contact}>Phonebook</h1>
   <form className={style.formStyle}  onSubmit={this.handleSubmit}>
  <div className={style.blockList}>
  <span className={style.span}>Neme:</span> 
    <label >
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
 
  value={this.state.name}
 
  onChange={this.handleChange }
 
 
 />
 
  </label>
   
  </div>
  <div className={style.blockList}>
  <span className={style.span}>Number:</span> 
 
  <label>
  <input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    value={this.state.number}
  onChange={this.handleChange}
 
  
 
  />
  </label> 
  </div>
   <div> <button  className={style.buttonSudmit}
   type='submit' >Add contact</button>
    </div>
  </form>


 
 </>
 )
  
  }
 
            
}



