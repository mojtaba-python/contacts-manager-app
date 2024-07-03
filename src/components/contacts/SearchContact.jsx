import { Purple } from '../../helpers/colors';
import { ContactContext } from '../../context/contactContext'; 
import { useContext } from 'react';

const SearchContact = () => {
    const {contactQuery, contactSearch} = useContext(ContactContext);

    return (
        <div dir="ltr" className="input-group mx-2 w-75">
            <span id="absic-addon1" 
            className="input-group-text"
            style={{backgroundColor:Purple}}>
               <i className='fa fa-search'></i>
            </span>
            <input 
                dir='rtl' 
                type="text"
                value={contactQuery.text}
                onChange={contactSearch} 
                style={{ backgroundColor: "gray", borderColor: Purple, color: "#fff" }}
                className='form-control'
                placeholder='جستجوی مخاطبین' />
        </div>
    )
}
export default SearchContact;