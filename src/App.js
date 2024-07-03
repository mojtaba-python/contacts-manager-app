import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import { AddContact, EditContact, Contacts,
         Navbar, ViewContact } from './components';

import { createContact, getAllContacts, 
        getAllGroups, deleteContact} from './services/contactService';
import { CurrentLine, Foreground, Purple, Yellow } from './helpers/colors';
import { confirmAlert } from 'react-confirm-alert';
import { ContactContext } from './context/contactContext';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [groups, setGroups] = useState([]);
    const [contact, setContact] = useState({});
    const navigate = useNavigate();

    const [contactQuery, setContactQuery] = useState({ text: "" });
    const [filteredContacts, setFilteredContacts] = useState([]);
 
    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: contactsData } = await getAllContacts();
                const { data: groupsData } = await getAllGroups();

                setContacts(contactsData);
                setFilteredContacts(contactsData);
                setGroups(groupsData);

                setLoading(false);

            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    const createContactForm = async (values) => {
        // event.preventDefault();
        try {
            setLoading((prevLoading) => !prevLoading);
            const { status, data } = await createContact(values);
 
            if (status === 201) {
                toast.success("مخاطب با موفقیت شاخته شد");
                const allContacts = [...contacts, data];

                setContacts(allContacts);
                setFilteredContacts(allContacts);
                   
                setLoading((prevLoading) => !prevLoading);
                navigate("/contacts");
            }
        } catch (err) {
            console.log(err.message);
            setLoading((prevLoading) => !prevLoading);
        }
    }

    const onContactChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    } 

    const confirmDelete = (contactId, contactFullname) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div dir='rtl' style={{
                        backgroundColor: CurrentLine,
                        border: `1px solid ${Purple}`,
                        borderRadius: "1em",
                    }}
                        className='p-4'>
                        <h1 style={{ color: Yellow }}>پاک کردن مخاطب </h1>
                        <p style={{ color: Foreground }}>مطمئنی میخوای مخاطب {contactFullname} رو پاک کنی؟</p>

                        <button
                            className='btn mx-2'
                            style={{ backgroundColor: Purple }}
                            onClick={() => {
                                removeContact(contactId);
                                onClose();
                            }}>مطمئن هستم</button>

                        <button onClick={onClose}
                            className='btn'
                            style={{ backgroundColor: Yellow }}>
                            انصراف
                        </button>
                    </div>
                )
            }
        })
    }

    const removeContact = async (contactId) => {
        try { 
            const updatedContact = contacts.filter((c) => c.id !== contactId);
            setContacts(updatedContact);
            setFilteredContacts(updatedContact);

            const response = await deleteContact(contactId);

            toast.success("مخاطب با موفقیت حذف شد");
            if (response) {
                const { data: contactsData } = await getAllContacts();
                setContacts(contactsData);
            }
        } catch (error) {
            console.log(error.message)

        }
    };

    // Search Contact
    const  contactSearch = async(event) => {
        setContactQuery({ ...contactQuery, text: event.target.value });

        const allContacts = contacts.filter((c) => {
           return c.fullname.includes(event.target.value)
        } 
        );
        setFilteredContacts(allContacts);    
};

    return (
        <ContactContext.Provider value={{
            loading: loading,
            setContact: setLoading,
            contact: contact,
            contactQuery,
            setContacts,
            contacts,
            filteredContacts,
            groups,         
            onContactChange,
            deleteContact: confirmDelete,
            createContact: createContactForm,
            contactSearch,
        }}>
            <div className="App">
                <ToastContainer rtl={true} 
                position='top-right' 
                theme='dark' />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Navigate to="/contacts" />} />
                    <Route path='/contacts'
                        element={<Contacts />} />

                    <Route path='/contacts/add' element={<AddContact />} />

                    <Route path='/contacts/:contactId' element={<ViewContact />} />
                    <Route path='/contacts/edit/:contactId' element={<EditContact />} />
                </Routes>
            </div>
        </ContactContext.Provider>
    );
}

export default App;
