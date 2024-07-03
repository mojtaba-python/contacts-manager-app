import * as Yup from 'yup';


export const contactSchema = Yup.object().shape({

    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),

    photo: Yup.string().url().required("تصویر مخاطب ازامی می باشد"),

    mobile: Yup.number().required("شماره مخاطب الزامی می باشد"),

    email: Yup.string().email("آدرس ایمیل معتبر نمی باشد").required("آدرس ایمیل الزامی می باشد"),

    job: Yup.string(),

    group: Yup.string().required("انتخاب گروه الزامی می باشد"),
})