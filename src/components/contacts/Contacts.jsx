import { CurrentLine, Cyan, Orang, Pink, Purple, Red } from "../../helpers/colors";
import Contact from "./Contact";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";


const Contacts = () => {

    const {filteredContacts, loading, deleteContact} = useContext(ContactContext);

    return (
        <>
            <section className="container p-0">
                
                    <div className="d-flex" >
                            <p className="h3 float-end">
                                <Link to={"/contacts/add"} className="btn mx-2" style={{ backgroundColor: Pink }}>
                                    ساخت مخاطب جدید
                                    <i className="fa fa-plus-circle mx-2"></i>

                                </Link>
                            </p>
                    </div>
               
            </section>

            {
                loading ? <Spinner /> : (
                    <section className="container">
                        <div className="row components ">
                            {
                                filteredContacts.length > 0 ? filteredContacts.map(c => (
                                    <Contact
                                        key={c.id}
                                        contact={c}
                                        confirmDelete={() => deleteContact(c.id, c.fullname)} />
                                )) :
                                    (
                                        <div className="text-center py-3" style={{ backgroundColor: CurrentLine }}>
                                            <p className="h5" style={{ color: Orang }}>
                                                مخاطب یافت نشد...

                                            </p>
                                            <img src={require("../../assets/no-found.gif")} alt="" className="w-25" />

                                        </div>
                                    )
                            }

                        </div>
                    </section>
                )
            }

        </>

    )
}
export default Contacts;