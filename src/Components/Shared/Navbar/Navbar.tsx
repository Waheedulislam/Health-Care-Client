'use client'

import { Box, Container, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    const AuthButton = dynamic(() => import('@/Components/Ui/AuthButton/AuthButton'), { ssr: false })


    return (
        <Container>
            <Stack py={2}
                direction='row'
                justifyContent='space-between'
                alignItems='center'

            >
                <Typography variant='h4' component={Link}
                    href='/' fontWeight={600}>
                    P<Box component='span' color='primary.main'>H</Box> Health Care
                </Typography>

                <Stack direction='row' gap={4} justifyContent='space-between'>
                    <Typography component={Link}
                        href='/consultation'>Consultation</Typography>
                    <Typography >Health Plans</Typography>
                    <Typography>Medicine</Typography>
                    <Typography>Diagnostics</Typography>
                    <Typography>NGOs</Typography>
                </Stack>

                {/* Login and logout button  */}
                <AuthButton />

            </Stack>
        </Container>
    );
};

export default Navbar;