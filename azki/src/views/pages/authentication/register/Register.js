import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { FormGroup } from '@mui/material'
import { Formik, Field, Form, ErrorMessage } from "formik";

//**  history
import { useNavigate } from 'react-router-dom';


//**  custom components
import { CustomeTextField } from '../../../../components/inputs/CustomTextField'
import { CustomButton } from '../../../../components/buttons/CustomButton'

//**  form schema 
import { registerSchema } from './schema/schema'


// **actions
import * as actions from '../../../../redux/authentication/actions'

//** redux
import { useDispatch } from 'react-redux'


const Register = () => {
    let navigate = useNavigate();

    //** redux hooks
    const dispatch = useDispatch()


    useEffect(()=>{
        localStorage.removeItem('userData');
        dispatch(actions.setUserData({}))
    },[])


    return (
        <div>
            <h1 className='text-right'>ثبت نام</h1>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    password: "",
                    mobile: "",
                }}
                validationSchema={registerSchema}
                onSubmit={values => {

                    console.log(values);
                    localStorage.removeItem('userData');
                    localStorage.setItem('userData', JSON.stringify({
                        firstname: values.firstname,
                        lastname: values.lastname,
                        mobile: values.mobile,
                    }));
                    dispatch(actions.setUserData(values))
                    navigate('cars')
                }}
            >
                {({ errors, touched, isSubmitting, isValid }) => (
                    <Form >

                        <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 2 }}>


                            {/* LastName */}
                            <Grid xs={12} md={6} item >
                                <FormGroup className="form-label-group position-relative has-icon-left col-12 col-sm-6">
                                    <Field
                                        name="lastname"
                                        id="lastname"
                                        className={`${errors.lastname &&
                                            touched.lastname &&
                                            "is-invalid"
                                            } text-center`}
                                        placeholder="نام خانوادگی"
                                        as={CustomeTextField}
                                    />
                                    <ErrorMessage
                                        name="lastname"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>

                            {/* FirsName */}
                            <Grid xs={12} md={6} item >
                                <FormGroup >
                                    <Field
                                        name="firstname"
                                        id="firstname"
                                        className={`${errors.firstname && touched.firstname && "is-invalid"}`}
                                        placeholder="نام"
                                        as={CustomeTextField}

                                    />
                                    <ErrorMessage
                                        name="firstname"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>

                        <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                            {/* mobileNumber */}
                            <Grid xs={12} item >
                                <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Field
                                        name="mobile"
                                        id="mobile"
                                        className={`${errors.mobile && touched.mobile && "is-invalid"}`}
                                        placeholder="شماره موبایل"
                                        as={CustomeTextField}
                                        type={'text'}
                                        inputProps={{
                                            autoComplete: 'new-password',
                                            form: {
                                                autoComplete: 'off',
                                            },
                                        }}
                                    />
                                    <ErrorMessage
                                        name="mobile"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>

                        {/* Password */}
                        <Grid container marginBottom={3} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                            <Grid xs={12} item >
                                <FormGroup className="form-label-group position-relative has-icon-left col-12 col-sm-6">
                                    <Field
                                        name="password"
                                        id="password"
                                        type="password"
                                        className={`${errors.password &&
                                            touched.password &&
                                            "is-invalid"
                                            } text-center`}
                                        placeholder="رمز عبور"
                                        as={CustomeTextField}
                                        inputProps={{
                                            autoComplete: 'new-password',
                                            form: {
                                                autoComplete: 'off',
                                            },
                                        }}
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>


                        {/* Submit Button */}
                        <CustomButton
                            color="primary"
                            type="submit"
                            variant='primary'
                            disabled={isSubmitting || !isValid}
                        >
                            ثبت نام
                        </CustomButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register
