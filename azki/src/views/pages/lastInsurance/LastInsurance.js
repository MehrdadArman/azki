import React, { useEffect } from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormGroup } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';

// ** schema
import { selectLastInsuranceSchema } from './schema/Schema'

//** svg
import { ReactComponent as ArrowLeft } from '../../../assets/img/arrow.svg'

//** history
import { useNavigate } from 'react-router-dom';

// actions
import { getInsuranceCompanies, setSelectedLastInsurance } from '../../../redux/insurance/actions'

//**  custom components
import { CustomeTextField } from '../../../components/inputs/CustomTextField'
import { CustomButton } from '../../../components/buttons/CustomButton'

//** redux
import { useSelector, useDispatch } from 'react-redux'


const LastInsurance = () => {
    let navigate = useNavigate();

    //** redux hooks
    const dispatch = useDispatch()
    const insuranceList = useSelector((state) => state.insurance.insuranceList);
    const getInsuranceLoading = useSelector((state) => state.insurance.getInsuranceLoading);
    const selectedLastInsurance = useSelector((state) => state.insurance.selectedLastInsurance);


    // ** Life Cycle
    useEffect(() => {
        dispatch(getInsuranceCompanies());
    }, [dispatch])

    console.log(selectedLastInsurance);

    return (
        <div>
            <h1 className='text-right'>بیمه شخص ثالث</h1>
            <p className='text-right fs-14 text-grey mb-35 d-block'>.شرکت بیمه گر قبلی خود را در این بخش وارد کنید</p>
            <Formik
                initialValues={{
                    lastInsurance: "",
                }}
                validationSchema={selectLastInsuranceSchema}
                onSubmit={values => {
                    navigate('/discount');
                }}
            >
                {({ errors, touched, isSubmitting, isValid, setFieldValue }) => (
                    <Form >

                        <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 2 }}>
                            {/* last insurance */}
                            <Grid xs={12} md={12} item>
                                <FormGroup >
                                    <Autocomplete
                                        dir={'rtl'}
                                        disableClearable
                                        options={insuranceList}
                                        getOptionLabel={(item) => `${item?.title}`}
                                        renderOption={(props, option) => (
                                            <Box component="li"  {...props}>
                                                <Grid container alignItems={'center'} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                    {/* ** TODO: we can set default image if there is no image */}
                                                    <Grid xs={6} item display={'flex'} justifyContent={'start'}>
                                                        <img
                                                            loading="lazy"
                                                            width="40"
                                                            src={`${option.icon}`}
                                                            srcSet={`${option.icon}`}
                                                            alt={option.title}
                                                        />
                                                    </Grid>
                                                    <Grid xs={6} item display={'flex'} justifyContent={'end'}>
                                                        <span className='font-iran fs-14 text-right text-grey'>{option.title}</span>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                        loading={getInsuranceLoading}
                                        disabled={getInsuranceLoading}
                                        loadingText={'در حال پردازش...'}
                                        onChange={(e, value) => {
                                            setFieldValue("lastInsurance", value.title);
                                            dispatch(setSelectedLastInsurance(value.title, value.id))
                                        }}
                                        includeInputInList
                                        renderInput={(params) => (
                                            <CustomeTextField
                                                name="lastInsurance"
                                                id="lastInsurance"
                                                className={`${errors.lastInsurance && touched.lastInsurance && "is-invalid"}`}
                                                {...params}
                                                placeholder="شرکت بیمه گر قبلی"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                    <ErrorMessage
                                        name="lastInsurance"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>

                        </Grid>


                        <Grid container marginBottom={0} columnSpacing={{ xs: 0, sm: 0, md: 2 }} >
                            <Grid xs={6} md={6} item justifyContent={'start'} alignItems={'center'} display={'flex'}>
                                <CustomButton
                                    color="primary"
                                    type="submit"
                                    variant='outlined'
                                    disabled={isSubmitting || !isValid}
                                    endIcon={<ArrowLeft />}
                                >

                                    مرحله بعد
                                </CustomButton>
                            </Grid>

                            <Grid xs={6} md={6} item justifyContent={'end'} alignItems={'center'} display={'flex'}>
                                <CustomButton
                                    color="primary"
                                    onClick={() => navigate('/cars')}
                                    variant='outlined'
                                >
                                    بازگشت
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LastInsurance;
