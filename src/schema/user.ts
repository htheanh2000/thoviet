import * as Yup from 'yup';

const signUpScheme = {
    name: Yup.string().required('Name must be provided'),
    phonenumber: Yup.string()
        .required("Phone number must be provided."),
    password: Yup.string()
        .required("Password must be provided.")
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}":;'<>?,./]).{8,}$/,
            "Password must have at least 8 characters including 1 uppercase letter, 1 special character and alphanumeric characters"
        ),
    retypePassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Confirming your password is required'),

}

export {signUpScheme}