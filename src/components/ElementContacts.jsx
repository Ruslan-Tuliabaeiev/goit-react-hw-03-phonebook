
import PropTypes from'prop-types';
import style from './phonebook.module.css';

export const ElementContacts = ({name, number, id, func}) => {

    return( 
<>
<i className={style.listName}>{name}:</i>
<b className={style.listNumber}>{number}</b>
<button className={style.buttonDelete} onClick={() => func(id)}  >Delete</button>


</>

    )
} 


ElementContacts.prototype={
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}


