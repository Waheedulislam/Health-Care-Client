import assets from '@/assets';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPge = () => {
    return (
        <Container>
            <Stack sx={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    maxWidth: 600,
                    width: '100%',
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 4,
                    textAlign: 'center'
                }}>
                    {/* image and text  */}
                    <Stack sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Image src={assets.svgs.logo} alt='logo' width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography variant='h6' fontWeight={600}>
                                Login PH HealthCAre
                            </Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <form>
                            <Grid container spacing={2} my={1}>

                                <Grid item md={6}>
                                    <TextField
                                        label="Email"
                                        type='email'
                                        variant='outlined'
                                        size='small'
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Password"
                                        type='password'
                                        variant='outlined'
                                        size='small'
                                        fullWidth={true}
                                    />
                                </Grid>
                            </Grid>
                            <Typography my={1} textAlign='end' component='p' fontWeight={300}>
                                Forget Password
                            </Typography>
                            <Button type='submit' sx={{ margin: '10px 0px' }} fullWidth>Login</Button>
                            <Typography component='p' fontWeight={300}>
                                Don&apos;t have an account ? <Link href='/Register' >Create an account</Link>
                            </Typography>

                        </form>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default LoginPge;