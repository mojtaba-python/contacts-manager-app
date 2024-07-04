import { Link } from "react-router-dom";
import { CurrentLine, Cyan, Orang, Purple, Red } from "../../helpers/colors";

const Contact = ({ contact, confirmDelete }) => {
    return (
            <div style={{ backgroundColor: CurrentLine}} className="card m-2">
                <div className="card-body">
                    <div className="row align-items-center component justify-content-around">
                        <div style={{padding:'0px'}}>
                            <img style={{border: `1px solid ${Purple}` }}
                                src={contact.photo} alt=""
                                className="img-fluid img" />
                            
                        </div>
                        <div >
                            <ul  className="list-group p-0">
                                <li className="list-group-item list-group-item-dark">
                                    نام و نام خانوادگی: {" "}
                                    <span className="fw-bold">
                                        {contact.fullname}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    شماره موبایل: {" "}
                                    <span className="fw-bold">
                                        {contact.mobile}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    آدرس ایمیل: {" "}
                                    <span className="fw-bold">
                                        {contact.email}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className=" d-flex flex-column align-items-center">
                            <Link to={`/contacts/${contact.id}`}
                                className="btn my-1"
                                style={{ backgroundColor: Orang }}>

                                <i className="fa fa-eye"></i>
                            </Link>
                            <Link to={`/contacts/edit/${contact.id}`}
                                className="btn my-1"
                                style={{ backgroundColor: Cyan }}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                </svg>
                            </Link>
                            <button onClick={confirmDelete}
                                className="btn my-1"
                                style={{ backgroundColor: Red }}>

                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default Contact;