import { NavLink, useLocation } from 'react-router-dom';
import { Purple, Background } from '../helpers/colors';
import SearchContact from './contacts/SearchContact';



const Navbar = () => {
    const location = useLocation();

    return (
        <nav className='navbar navbar-dark navbar-expand-sm shadow-lg'
            style={{ backgroundColor: Background }}>
            <div className="container">
                <div className="navbar_container">
                    <div className="">
                        <div className="navbar-brand" style={{ color: "#fff" }}>
                            <NavLink to={"/contacts"} style={{ textDecoration: "none", color: '#fff' }}>
                                <i className="fa fa-id-badge" style={{ color: Purple }}></i>
                                {" "}
                                وب اپلیکیشن مدیریت{" "}
                                <span style={{ color: Purple }}>مخاطبین</span>
                            </NavLink>

                        </div>

                    </div>
                    {
                        location.pathname === "/contacts" ? (
                            <div style={{width:'100%'}}>
                                <SearchContact />
                            </div>
                        ) : null}

                </div>
            </div>
        </nav>



        // <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"
        // style={{backgroundColor: Background}}>
        //     <div className="container">
        //         <div className="row w-100">
        //             <div className="col">
        //                 <div className="navbar-brand">
        //                     <i className="fas fa-id-badge" style={{color:Purple}}></i>
        //                     وب اپلیکیشن مدیریت{" "}
        //                     <span style={{color:"purple"}}>مخاطبین</span>
        //                 </div>
        //             </div>
        //             <div className="col">
        //                 <div className="input-group mx-2 w-75" dir="ltr">

        //                     <span className="input-group-text" id="basic-addon1"
        //                     style={{backgroundColor: Purple}}>


        //                    </span>
        //                     <input dir="rtl" type="text"
        //                      style={{backgroundColor: Comment, borderColor:Purple}}
        //                      className="form-control" placeholder="جستجوی مخاطب"
        //                      aria-label="Search"
        //                      aria-describedby="basic-addon1"/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}
export default Navbar;