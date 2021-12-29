
import PropTypes from "prop-types"

import { ElementContacts } from "./ElementContacts"

import style from './phonebook.module.css';


export const Contacts = ({contacts, onDeleteContacts}) => {
    return (
        <ul>
       {contacts.map(({ name, id, number }) => (<li className={style.list} key={id}><ElementContacts name={name} number={number} id={id} func={onDeleteContacts}/></li>) )}
        </ul>
    )
}


Contacts.prototype={
    contacts: PropTypes.arrayOf(
PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
)

    ),


}


