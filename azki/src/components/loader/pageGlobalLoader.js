import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    height: 100vh;
    width: 100wh; 
    background-color:'red';
`


const PageGlobalLoader = () => {


    return (

        <Wrapper>
            <CircularProgress color='success' disableShrink />
        </Wrapper>

    )
}

export default PageGlobalLoader
