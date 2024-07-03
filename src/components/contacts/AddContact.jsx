import { Link } from "react-router-dom";
import { Spinner } from "../";
import { Purple, Green, Comment } from "../../helpers/colors";

import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { useFormik } from "formik";
import { contactSchema } from "../../validations/contactValidation";


const AddContact = () => {
    const { loading, groups, createContact } = useContext(ContactContext);

    const formik = useFormik({
        initialValues: {
            fullname:'',
            photo:'',
            mobile:'',
            email:'',
            job:'',
            group:'',
        },
        validationSchema: contactSchema,
        onSubmit: (values) =>{
            console.log(values);
            createContact(values);
        }
    })
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <img
                            src={require("../../assets/man-taking-note.png")}
                            height="400px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                left: "100px",
                                opacity: "50%",
                            }} />
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 fw-bold text-center"
                                        style={{ color: Green }}>
                                        ساخت مخاطب جدید
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Green }} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                 
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="mb-2">
                                            <input
                                                id="fullname"
                                                name="fullname"
                                                type="text"
                                                value={formik.values.fullname}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="form-control"
                                                placeholder="نام و نام خانوادگی"
                                          
                                            />
                                            <span>
                                                {formik.errors.fullname ? 
                                                 (<div  className="text-danger">
                                                    {formik.errors.fullname}
                                                </div>): null}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="photo"
                                                type="text"
                                                {...formik.getFieldProps("photo")}
                                                className="form-control"
                                                // required={true}
                                                placeholder="آدرس تصویر"
                                            />
                                            <span>
                                                {formik.touched.photo && formik.errors.photo ? (
                                                <div className="text-danger">{formik.errors.photo}</div>
                                                ): null}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="mobile"
                                                name="mobile"
                                                type="number"
                                                value={formik.values.mobile}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="form-control"
                                                // required={true}
                                                placeholder="شماره موبایل"
                                            />
                                            <span>
                                                {formik.touched.mobile && formik.errors.mobile ? (
                                                <div className="text-danger">{formik.errors.mobile}</div>
                                                ): null}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="form-control"
                                                // required={true}
                                                placeholder="آدرس ایمیل"
                                            />
                                            <span>
                                                {formik.touched.job && formik.errors.email ? (
                                                <div className="text-danger">{formik.errors.email}</div>
                                                ): null}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="job"
                                                type="text"
                                                {...formik.getFieldProps("job")}
                                                placeholder="شغل"
                                            />
                                            <span>
                                                {formik.touched.job && formik.errors.job ? (
                                                <div className="text-danger">{formik.errors.job}</div>
                                                ): null}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                id="group"
                                                name="group"
                                                value={formik.values.group}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                // required={true}
                                                className="form-control">

                                                <option value="">انتخاب گروه</option>
                                                {groups.length > 0 && groups.map((group) => (
                                                     <option key={group.id} value={group.id}>
                                                        {group.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <span>
                                                {formik.touched.group && formik.errors.group ? (
                                                <div className="text-danger">{formik.errors.group}</div>
                                                ): null}
                                            </span>
                                        </div>
                                        <div className="mx-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{ backgroundColor: Purple }}
                                                value="ساخت مخاطب" />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2"
                                                style={{ backgroundColor: Comment }} >
                                                انصراف
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AddContact;
