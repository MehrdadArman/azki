import React, { useEffect, useState } from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormGroup } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';

// ** Gloabl components
import CustomDialog from '../../../components/dialogs/CustomDialog'

// ** Local componetns
import CallForPriceDialogContent from '../discount/components/CallForPriceDialogContent'

// ** schema
import { discountSchema } from './schema/Schema'

//** svg
import { ReactComponent as ArrowLeft } from '../../../assets/img/arrow.svg'


//**  actions
import { getThirdDiscount, getDriverDiscount, setSelectedDriverDiscount, setSelectedThirdDiscount } from '../../../redux/discount/actions'

//**  custom components
import { CustomeTextField } from '../../../components/inputs/CustomTextField'
import { CustomButton } from '../../../components/buttons/CustomButton'

//** redux
import { useSelector, useDispatch } from 'react-redux'


const Discount = () => {

    //** redux hooks
    const dispatch = useDispatch()
    const [openCallForPriceModal, setOpenCallForPriceModal] = useState(false);

    const thirdDiscountList = useSelector((state) => state.discount.thirdDiscountList);
    const getThirdDiscountLoading = useSelector((state) => state.discount.getThirdDiscountLoading);

    const driverDiscountList = useSelector((state) => state.discount.driverDiscountList);
    const getDriverDiscountLoading = useSelector((state) => state.discount.getDriverDiscountLoading);




    // ** Life Cycle
    useEffect(() => {
        dispatch(getThirdDiscount());
        dispatch(getDriverDiscount());
    }, [dispatch])



    return (
        <div>
            <CustomDialog
                open={openCallForPriceModal}
                setOpen={setOpenCallForPriceModal}
                dialogTitle={'استعلام قیمت'}
                content={() => {
                    return (
                        <CallForPriceDialogContent />
                    )
                }}
            />

            <h1 className='text-right'>بیمه شخص ثالث</h1>
            <p className='text-right fs-14 text-grey mb-35 d-block'>درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.</p>
            <Formik
                initialValues={{
                    thirdDiscount: "",
                    driverDiscount: "",
                }}
                validationSchema={discountSchema}
                onSubmit={values => {
                    setOpenCallForPriceModal(true)
                }}
            >
                {({ errors, touched, isSubmitting, isValid, setFieldValue }) => (
                    <Form >

                        <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 2 }}>
                            <Grid xs={12} md={12} item>
                                <FormGroup >
                                    <Autocomplete
                                        dir={'rtl'}
                                        disableClearable
                                        options={thirdDiscountList}
                                        getOptionLabel={(item) => `${item?.title}`}
                                        renderOption={(props, option) => (
                                            <Box component="li"  {...props}>
                                                <Grid container alignItems={'center'} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                    <Grid xs={12} item display={'flex'} justifyContent={'end'}>
                                                        <span className='font-iran fs-14 text-right text-grey'>{option.title}</span>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                        loading={getThirdDiscountLoading}
                                        disabled={getThirdDiscountLoading}
                                        loadingText={'در حال پردازش...'}
                                        onChange={(e, value) => {
                                            setFieldValue("thirdDiscount", value.title);
                                            dispatch(setSelectedThirdDiscount(value.title, value.id))
                                        }}
                                        includeInputInList
                                        renderInput={(params) => (
                                            <CustomeTextField
                                                name="thirdDiscount"
                                                id="thirdDiscount"
                                                className={`${errors.thirdDiscount && touched.thirdDiscount && "is-invalid"}`}
                                                {...params}
                                                placeholder="درصد تخفیف ثالث"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                    <ErrorMessage
                                        name="thirdDiscount"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>


                        <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 2 }}>
                            {/* last insurance */}
                            <Grid xs={12} md={12} item>
                                <FormGroup >
                                    <Autocomplete
                                        dir={'rtl'}
                                        disableClearable
                                        options={driverDiscountList}
                                        getOptionLabel={(item) => `${item?.title}`}
                                        renderOption={(props, option) => (
                                            <Box component="li"  {...props}>
                                                <Grid container alignItems={'center'} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                    <Grid xs={12} item display={'flex'} justifyContent={'end'}>
                                                        <span className='font-iran fs-14 text-right text-grey'>{option.title}</span>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                        loading={getDriverDiscountLoading}
                                        disabled={getDriverDiscountLoading}
                                        loadingText={'در حال پردازش...'}
                                        onChange={(e, value) => {
                                            setFieldValue("driverDiscount", value.title);
                                            dispatch(setSelectedDriverDiscount(value.title, value.id))
                                        }}
                                        includeInputInList
                                        renderInput={(params) => (
                                            <CustomeTextField
                                                name="driverDiscount"
                                                id="driverDiscount"
                                                className={`${errors.driverDiscount && touched.driverDiscount && "is-invalid"}`}
                                                {...params}
                                                placeholder="درصد تخفیف حوادث راننده"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                    <ErrorMessage
                                        name="driverDiscount"
                                        component="div"
                                        className="text-right text-danger error-field fs-14"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>

                        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }} >
                            <Grid xs={6} md={6} item justifyContent={'start'} alignItems={'center'} display={'flex'}>
                                <CustomButton
                                    color="primary"
                                    type="submit"
                                    variant='primary'
                                    disabled={isSubmitting || !isValid}
                                    endIcon={<ArrowLeft />}
                                >
                                    استعلام قیمت
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Discount;
