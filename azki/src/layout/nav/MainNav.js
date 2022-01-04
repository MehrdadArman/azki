import React from 'react'
import Grid from '@mui/material/Grid';
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { ReactComponent as UserIcon } from '../../assets/img/user.svg'

//** redux
import { useSelector } from 'react-redux'

const MainNav = () => {
    // ** local storage
    // let userData = localStorage.getItem('userData')!== null && JSON.parse(localStorage.getItem('userData'));

    // ** user Data
    const userData = useSelector((state) => state.auth.userData);


    return (
        <div className='navigation'>
            <Grid container rowSpacing={0} justifyContent={'center'} alignItems={'center'} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid className='navigation__item' alignItems={'center'} xs={4} justifyContent={'start'} display={'flex'} item>
                    {Object.keys(userData).length === 0 ?
                        'ثبت نام' :
                        <>
                            <span className='fs-14'>{userData?.firstname} {userData?.lastname}</span>
                            <UserIcon width={25} height={25} className={'ml-10'} />
                        </>
                    }
                </Grid>
                <Grid className='navigation__item' xs={4} justifyContent={'center'} display={'flex'} item>
                    <h3>سامانه مقایسه و خرید آنلاین بیمه</h3>
                </Grid>
                <Grid className='navigation__logo' xs={4} justifyContent={'end'} display={'flex'} item>
                    <Logo />
                </Grid>
            </Grid>
        </div>
    )
}

export default MainNav
