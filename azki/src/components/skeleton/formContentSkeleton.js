import React from 'react'

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function FormContentSkeleton() {
    return (
        <div className='pt-100' >
            <Grid container marginBottom={5} flexDirection={'row-reverse'} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={{ xs: 3, sm: 3, md: 0 }}>
                <Grid xs={6} md={6} item >
                    <Box
                        sx={{
                            bgcolor: 'transparent',
                            p: 0,
                            width: '100%',
                            height: 0,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Skeleton
                            sx={{ bgcolor: 'grey.250' }}
                            variant="rectangular"
                            width={'100%'}
                            height={20}
                            style={{ borderRadius: '4px' }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container marginBottom={5} flexDirection={'row-reverse'} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={{ xs: 3, sm: 3, md: 0 }}>
                <Grid xs={8} md={8} item >
                    <Box
                        sx={{
                            bgcolor: 'transparent',
                            p: 0,
                            width: '100%',
                            height: 0,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Skeleton
                            sx={{ bgcolor: 'grey.250' }}
                            variant="rectangular"
                            width={'100%'}
                            height={15}
                            style={{ borderRadius: '4px' }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container marginBottom={8} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={{ xs: 0, sm: 0, md: 0 }}>
                {[1, 2].map((item) => {
                    return (
                        <Grid xs={6} md={6} item key={item}>
                            <Box
                                sx={{
                                    bgcolor: 'transparent',
                                    p: 0,
                                    width: '100%',
                                    height: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Skeleton
                                    sx={{ bgcolor: 'grey.250' }}
                                    variant="rectangular"
                                    width={'100%'}
                                    height={40}
                                    style={{ borderRadius: '4px' }}
                                />
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container marginBottom={5} columnSpacing={{ xs: 0, sm: 0, md: 2 }} rowSpacing={{ xs: 3, sm: 3, md: 0 }}>
                {[1, 2].map((item) => {
                    return (
                        <Grid xs={6} md={6} item key={item} display={'flex'}>
                            <Box
                                sx={{
                                    bgcolor: 'transparent',
                                    p: 0,
                                    width: '100%',
                                    height: 0,
                                    display: 'flex',
                                    justifyContent: item === 1 ? 'start' : 'end'
                                }}
                            >
                                <Skeleton
                                    sx={{ bgcolor: 'grey.250' }}
                                    variant="rectangular"
                                    width={'60%'}
                                    height={40}
                                    style={{ borderRadius: '20px' }}
                                />
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}
