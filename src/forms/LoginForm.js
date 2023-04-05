import {useContext, useState} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import {AppContext} from '../context/AppContext';
import Error from '../components/Error';
import useLogin from '../hooks/useLogin';
import Typography from '@mui/material/Typography';




const FormSchema=Yup.object(
    {
        email: Yup.string().email("Please check your email. Must be valid format.").required(),
        password: Yup.string().required()
    }
)

const initialValues = {
    email:'',
    password:''
}



export default function LoginForm(){

    const {user, setUser} = useContext(AppContext)
    const [loginCreds, setLoginCreds] = useState({})
    const [error, setError] = useState('')

    useLogin(loginCreds, setLoginCreds, setError, setUser)

    

    const handleSubmit=(values)=>{
        console.log(values)
        setLoginCreds(values)
        
    }



    const formik = useFormik({
        initialValues: initialValues,
        validationSchema : FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id = 'email'
                name = 'email'
                fullWidth
                sx = {{mb:2,mt:2, width:"100%", backgroundColor: "#fffffa"}}
                color = "info"
                placeholder = "Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error = {formik.touched.email && Boolean(formik.errors.email)}
                helperText = {formik.touched.email && formik.errors.email}
            />
            <br/>

            <TextField
                id = 'password'
                name = 'password'
                type = "password"
                fullWidth
                sx = {{mb:2, mt:2, width:"100%", backgroundColor: "#fffffa"}}
                color = "info"
                placeholder = "Password"
                value = {formik.values.password}
                onChange = {formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText = {formik.touched.password && formik.errors.password}
            />
         
            <Typography sx={{display:"flex", justifyContent: 'center', mb:1}}>
            <Button type="submit " color = "info">Login</Button>
            </Typography>
            <Error>{error}</Error>
        </form>
    )
}