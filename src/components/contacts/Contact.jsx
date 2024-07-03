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

                                <i className="fa fa-pen"></i>
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