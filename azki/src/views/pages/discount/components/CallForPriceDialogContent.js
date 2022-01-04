import React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


//** redux
import { useSelector } from 'react-redux'

const CallForPriceDialogContent = () => {
    //** discount selector
    const selectedThirdDiscount = useSelector((state) => state.discount.selectedThirdDiscount);
    const selectedDriverDiscount = useSelector((state) => state.discount.selectedDriverDiscount);

    //** cars selector
    const selectedCarType = useSelector((state) => state.cars.selectedCarType);
    const selectedCarBrand = useSelector((state) => state.cars.selectedCarBrand);

    //** insurance selector
    const selectedLastInsurance = useSelector((state) => state.insurance.selectedLastInsurance);


    // ** user Data
    const userData = useSelector((state) => state.auth.userData);


    

    return (
        <div>
            <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} direction={'row-reverse'}>
                <Grid xs={12} md={12} item>
                    <Divider className='w-100' />
                </Grid>
            </Grid>
            <h3 className='text-right font-iran'>{userData?.firstname} {userData?.lastname}</h3>
            <h4 className='text-right font-iran'>{userData?.mobile}</h4>
            <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} direction={'row-reverse'}>
                <Grid xs={12} md={12} item>
                    <Divider className='w-100' />
                </Grid>
            </Grid>
            <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} direction={'row-reverse'}>
                <Grid xs={6} md={6} item>
                    <span className='text-right d-block font-iran'>:نوع خودرو</span>
                </Grid>
                <Grid xs={6} md={6} item>
                    <span className='text-left font-iran'>{selectedCarType?.title}</span>
                </Grid>
            </Grid>
            <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} direction={'row-reverse'}>
                <Grid xs={6} md={6} item>
                    <span className='text-right d-block font-iran'>:مدل خودرو</span>
                </Grid>
                <Grid xs={6} md={6} item>
                    <span className='text-left font-iran'>{selectedCarBrand?.title}</span>
                </Grid>
            </Grid>
            <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} direction={'row-reverse'}>
                <Grid xs={6} md={6} item>
                    <span className='text-right d-block font-iran'>:شرکت بیمه گر قبلی</span>
                </Grid>
                <Grid xs={6} md={6} item>
                    <span className='text-left font-iran'>{selectedLastInsurance?.title}</span>
                </Grid>
            </Grid>
            <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} direction={'row-reverse'}>
                <Grid xs={6} md={6} item>
                    <span className='text-right d-block font-iran'>:درصد تخفیف ثالث</span>
                </Grid>
                <Grid xs={6} md={6} item>
                    <span className='text-left font-iran'>{selectedThirdDiscount?.title}</span>
                </Grid>
            </Grid>
            <Grid container marginBottom={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} direction={'row-reverse'}>
                <Grid xs={6} md={6} item>
                    <span className='text-right d-block font-iran'>:درصد تخفیف حوادث راننده</span>
                </Grid>
                <Grid xs={6} md={6} item>
                    <span className='text-left font-iran'>{selectedDriverDiscount?.title}</span>
                </Grid>
            </Grid>


        </div>
    )
}

export default CallForPriceDialogContent
