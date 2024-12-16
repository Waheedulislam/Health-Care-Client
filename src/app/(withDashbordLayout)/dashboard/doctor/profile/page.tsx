'use client'
import { useGetMyProfileQuery, useUpdateMyProfileMutation } from '@/redux/api/myProfileApi';
import { Box, Button, Container, Stack, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { theme } from '@/lib/theme/theme';
import DoctorInformation from '@/app/(withDashbordLayout)/dashboard/doctor/profile/components/DoctorInformation';
import AutoFileUploader from '@/Components/Forms/AutoFileUploader';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ProfileUpdateModal from './components/ProfileUpdateModal';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, isLoading } = useGetMyProfileQuery(undefined)
    console.log(data)
    const [updateMyProfile, { isLoading: updating }] = useUpdateMyProfileMutation()

    const fileUpload = (file: File) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('data', JSON.stringify({}))
        updateMyProfile(formData)
    }

    if (isLoading) {
        <p>Loading....</p>
    }

    return (
        <>
            <ProfileUpdateModal open={isModalOpen} id={data?.id} setOpen={setIsModalOpen} />
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{
                            height: 300,
                            width: '100%',
                            overflow: 'hidden',
                            borderRadius: 1
                        }}>
                            <Image height={300} width={400} src={data?.profilePhoto} alt='User Photo'></Image>
                        </Box>
                        {
                            updating ? <p>Uploading...</p> : (
                                <AutoFileUploader
                                    name='file'
                                    label='Choose Your Profile'
                                    icon={<CloudUploadIcon />}
                                    onFileUpload={fileUpload}
                                    variant='text'
                                />
                            )
                        }

                        <Button
                            fullWidth
                            endIcon={<ModeEditIcon />}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Edit Profile</Button>

                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <DoctorInformation data={data} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Profile;