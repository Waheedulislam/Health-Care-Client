'use client'
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPayload';
import { registerPatient } from '@/Services/actions/registerPatient';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/Services/actions/userLogin';
import { storeUserInfo } from '@/Services/auth.services';
import PHForm from '../../Components/Forms/PHForm';
import PHInput from '@/Components/Forms/PHInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const patientValidationSchema = z.object({
    name: z.string().min(1, 'please enter your name '),
    email: z.string().email('Please enter your email address'),
    contactNumber: z.string().regex(/^\d{11}$/, 'Please provide a valid phone number'),
    address: z.string().min(1, 'Please enter your address!'),
})
export const validationSchema = z.object({
    password: z.string().min(6, 'Must be at least 6 characters'),
    patient: patientValidationSchema,
});

export const defaultValues = {
    password: '',
    patient: {
        name: '',
        email: '',
        contactNumber: '',
        address: '',
    }
}


const RegisterPage = () => {
    const router = useRouter()

    const handleRegister = async (values: FieldValues) => {
        const data = modifyPayload(values)
        // console.log(data)
        try {
            const res = await registerPatient(data)
            console.log(res)
            if (res?.data?.id) {
                toast.success(res?.message)
                const result = await userLogin(
                    {
                        password: values.password,
                        email: values.patient.email
                    }
                );
                // console.log(res)
                if (result?.data?.accessToken) {
                    storeUserInfo({ accessToken: result?.data?.accessToken }),
                        router.push('/');
                }
                // router.push('/Login')
            }
        } catch (err: any) {
            console.error(err.message)
        }
    }


    return (
        <Container >
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
                                Patient Register
                            </Typography>
                        </Box>
                    </Stack>

                    {/* input filed  */}
                    <Box>
                        <PHForm
                            onSubmit={handleRegister}
                            resolver={zodResolver(validationSchema)}
                            defaultValues={defaultValues}
                        >
                            <Grid container spacing={2} my={1}>
                                <Grid item md={12} sm={12}>
                                    <PHInput
                                        label="Name"
                                        name='patient.name'
                                        size='small'
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6} sm={6}>
                                    <PHInput
                                        label="Email"
                                        type='email'
                                        fullWidth={true}
                                        name='patient.email'
                                    />
                                </Grid>
                                <Grid item md={6} sm={6}>
                                    <PHInput
                                        label="Password"
                                        type='password'
                                        fullWidth={true}
                                        name="password"
                                    />
                                </Grid>
                                <Grid item md={6} sm={6}>
                                    <PHInput
                                        label="Contact Number"
                                        type='tel'
                                        fullWidth={true}
                                        name="patient.contactNumber"

                                    />
                                </Grid>
                                <Grid item md={6} sm={6}>
                                    <PHInput
                                        label="Address"
                                        type='text'
                                        fullWidth={true}
                                        name="patient.address"

                                    />
                                </Grid>
                            </Grid>
                            <Button type='submit' sx={{ margin: '10px 0px' }} fullWidth>Register</Button>
                            <Typography component='p' fontWeight={300}>
                                Do you already have an account ? <Link href='/Login' >Login</Link>
                            </Typography>
                        </PHForm>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default RegisterPage;