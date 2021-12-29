
import PropTypes from'prop-types';
import style from './phonebook.module.css';

export const Filter = ({value, onChange}) => {
return (
    <>
    <label className={style.contactFind}>Find contacts by name</label>

<input
  type="text"
value={value}
onChange={onChange}

/>
</>
)

}

Filter.prototype={
    value: PropTypes.string.isRequired,
 onChange: PropTypes.func.isRequired,

}

