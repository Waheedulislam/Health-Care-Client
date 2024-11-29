'use client'
import assets from '@/assets';
import PHForm from '@/Components/Forms/PHForm';
import PHInput from '@/Components/Forms/PHInput';
import { userLogin } from '@/Services/actions/userLogin';
import { storeUserInfo } from '@/Services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const validationSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Must be at least 6 characters')
})



const LoginPge = () => {

    const router = useRouter()
    const [error, setError] = useState('');

    const handleLogin = async (values: FieldValues) => {
        // console.log(values)
        try {
            const res = await userLogin(values);
            console.log(res)
            if (res?.data?.accessToken) {
                toast.success(res?.message)
                storeUserInfo({ accessToken: res?.data?.accessToken }),
                    router.push('/')
            } else {
                setError(res.message)
            }
        } catch (err: any) {
            console.error(err.message);
        }
    }
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
                    <>
                        {error && (
                            <Box>
                                <Typography sx={{
                                    backgroundColor: 'red',
                                    padding: '1px',
                                    borderRadius: '2px',
                                    color: 'white',
                                    marginTop: '5px'
                                }}>
                                    {error}
                                </Typography>
                            </Box>
                        )}
                    </>
                    <Box>
                        <PHForm
                            onSubmit={handleLogin}
                            resolver={zodResolver(validationSchema)}
                            defaultValues={{
                                email: '',
                                password: '',
                            }}
                        >
                            <Grid container spacing={2} my={1}>

                                <Grid item md={6} sm={6}>
                                    <PHInput
                                        label="Email"
                                        type='email'
                                        fullWidth={true}
                                        name='email'
                                    />
                                </Grid>
                                <Grid item md={6} sm={6}>
                                    <PHInput
                                        label="Password"
                                        type='password'
                                        fullWidth={true}
                                        name='password'
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

                        </PHForm>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default LoginPge;