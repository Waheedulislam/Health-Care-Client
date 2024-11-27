'use client'
import assets from '@/assets';
import { userLogin } from '@/Services/actions/userLogin';
import { storeUserInfo } from '@/Services/auth.services';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';


export type FormValues = {
    email: string;
    password: string;
}
const LoginPge = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()
    const router = useRouter()

    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        // console.log(values)
        try {
            const res = await userLogin(values);
            console.log(res)
            if (res?.data?.accessToken) {
                toast.success(res?.message)
                storeUserInfo({ accessToken: res?.data?.accessToken }),
                    router.push('/')
            }
        } catch (err: any) {
            console.error(err.message)
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
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} my={1}>

                                <Grid item md={6}>
                                    <TextField
                                        label="Email"
                                        type='email'
                                        variant='outlined'
                                        size='small'
                                        fullWidth={true}
                                        {...register("email")}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Password"
                                        type='password'
                                        variant='outlined'
                                        size='small'
                                        fullWidth={true}
                                        {...register("password")}
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