import React from 'react'
import Grid from '@mui/material/Grid';
import MainNav from '../layout/nav/MainNav'
import { ReactComponent as GreenCar } from '../assets/img/car-green.svg'
import useMediaQuery from '@mui/material/useMediaQuery';



const FullPageLayout = ({ children }) => {

    // ** large screen detect
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

    return (
        <>
            <MainNav />
            <div className='full-layout'>
                <Grid direction={largeScreen ? 'row' : 'column-reverse'} container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid className='full-layout__description' xs={12} sm={12} md={6} item>
                        <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                            <Grid xs={6} item className='full-layout__description-leftside' />
                            <Grid xs={6} item className='full-layout__description-rightside' />
                            <div className='full-layout__description-carsvg'>
                                <GreenCar />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid className='full-layout__content pt-100 mt-20' xs={12} sm={12} justifyContent={'start'} flexDirection={'column'} display={'flex'} md={6} item>
                        {children}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default FullPageLayout
