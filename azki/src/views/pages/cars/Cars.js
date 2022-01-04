import React, { useEffect } from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormGroup } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';

// ** schema
import { selectCarSchema } from './schema/Schema'

//** svg
import { ReactComponent as ArrowLeft } from '../../../assets/img/arrow.svg'

//** history
import { useNavigate } from 'react-router-dom';

//** actions
import { getCarType, setSelectedCarType, setSelectedCarBrand } from '../../../redux/cars/actions'

//**  custom components
import { CustomeTextField } from '../../../components/inputs/CustomTextField'
import { CustomButton } from '../../../components/buttons/CustomButton'

//** redux
import { useSelector, useDispatch } from 'react-redux'




const Cars = () => {
    let navigate = useNavigate();

    //** redux hooks
    const dispatch = useDispatch()
    const carsList = useSelector((state) => state.cars.carsList);
    const selectedCarType = useSelector((state) => state.cars.selectedCarType);
    const getCarsLoading = useSelector((state) => state.cars.getCarsLoading);

    // ** Life Cycle
    useEffect(() => {
        dispatch(getCarType());
    }, [dispatch])


    return (
        <div>
            <h1 className='text-right'>بیمه شخص ثالث</h1>
            <p className='text-right fs-14 text-grey mb-35 d-block'>.نوع و مدل  خودرو خود را انتخاب کنید</p>
            <Formik
                initialValues={{
                    carType: "",
                    carBrand: "",
                }}
                validationSchema={selectCarSchema}
                onSubmit={values => {
                    navigate('/last-insurance');
                }}
            >
                {({ errors, touched, isSubmitting, isValid, setFieldValue }) => (
                    <Form >

                        <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 2 }}>
                            {/* Car Brand */}
                            <Grid xs={12} md={6} item>
                                <FormGroup >
                                    <Autocomplete
                                        dir={'rtl'}
                                        disableClearable
                                        options={carsList.filter((item) => item.id === selectedCarType?.id).map((item) => item.brands)[0]}
                                        getOptionLabel={(item) => `${item?.title}`}
                                        renderOption={(props, option) => (
                                            <Box component="li"  {...props}>
                                                <Grid container alignItems={'center'} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                    {/* ** TODO: we can set default image if there is no image */}
                                                    <Grid xs={6} item display={'flex'} justifyContent={'start'}>
                                                        <img
                                                            loading="lazy"
                                                            width="35"
                                                            src={`${option?.icon}`}
                                                            srcSet={`${option?.icon}`}
                                                            alt={option?.title}
                                                        />
                                                    </Grid>
                                                    <Grid xs={6} item display={'flex'} justifyContent={'end'}>
                                                        <span className='font-iran fs-14 text-right text-grey'>{option?.title}</span>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                        loading={getCarsLoading}
                                        disabled={selectedCarType.id ? false : true}
                                        loadingText={'در حال پردازش...'}
                                        onChange={(e, value) => {
                                            setFieldValue("carBrand", value.title);
                                            dispatch(setSelectedCarBrand(value.title, value.id))
                                        }}
                                        includeInputInList
                                        defaultValue={selectedCarType.id ? selectedCarType.id : null}
                                        renderInput={(params) => (
                                            <CustomeTextField
                                                name="carBrand"
                                                id="carBrand"
                                                className={`${errors.carBrand && touched.carBrand && "is-invalid"}`}
                                                {...params}
                                                placeholder="مدل خودرو"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                    <ErrorMessage
                                        name="carType"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>

                            {/* Car Type */}
                            <Grid xs={12} md={6} item >
                                <FormGroup className="form-label-group position-relative has-icon-left col-12 col-sm-6">
                                    <Autocomplete
                                        dir={'rtl'}
                                        disableClearable
                                        options={carsList}
                                        getOptionLabel={(item) => `${item?.title}`}
                                        renderOption={(props, option) => (
                                            <Box component="li"  {...props}>
                                                <Grid container alignItems={'center'} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                    <Grid xs={12} item display={'flex'} justifyContent={'end'}>
                                                        <span className='font-iran fs-14 text-right text-grey'>{option?.title}</span>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                        loading={getCarsLoading}
                                        disabled={getCarsLoading}
                                        loadingText={'در حال پردازش...'}
                                        onChange={(e, value) => {
                                            setFieldValue("carType", value.title);
                                            dispatch(setSelectedCarType(value.title, value.id));

                                            dispatch(setSelectedCarBrand(null, null));
                                            setFieldValue("carBrand", '');
                                        }}
                                        includeInputInList
                                        renderInput={(params) => (
                                            <CustomeTextField
                                                name="carType"
                                                id="carType"
                                                className={`${errors.carType && touched.carType && "is-invalid"}`}
                                                {...params}
                                                placeholder="نوع خودرو"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                    <ErrorMessage
                                        name="carType"
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
                                    onClick={() => navigate('/')}
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

export default Cars
