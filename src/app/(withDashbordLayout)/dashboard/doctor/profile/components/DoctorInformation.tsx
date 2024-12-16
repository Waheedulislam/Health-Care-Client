import { theme } from '@/lib/theme/theme';
import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const StyledInformationBox = styled(Box)(() => ({
    background: '#f4f7ffe',
    borderRadius: theme.spacing(1),
    width: '45px',
    '& p': {
        fontWeight: 600,
    },
    padding: '8px 16px'
}))

const DoctorInformation = ({ data }: any) => {
    return (
        <>
            <Typography variant='h4' color='primary.main'>
                Basic Information
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }}
                gap={2}
                flex={'wrap'}>
                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Role</Typography>
                    <Typography color='secondary' variant='caption'>{data?.role}</Typography>
                </StyledInformationBox>

                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Name</Typography>
                    <Typography color='secondary' variant='caption'>{data?.name}</Typography>
                </StyledInformationBox>

                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Email</Typography>
                    <Typography color='secondary' variant='caption'>{data?.email}</Typography>
                </StyledInformationBox>

                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Gender</Typography>
                    <Typography color='secondary' variant='caption'>{data?.gender}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Designation</Typography>
                    <Typography color='secondary' variant='caption'>{data?.designation}</Typography>
                </StyledInformationBox>
            </Stack>

            {/* professional Information  */}
            <Typography variant='h4' color='primary.main'>
                Professional Information
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }}
                gap={2}
                flex={'wrap'}>
                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Appointment Fee</Typography>
                    <Typography color='secondary' variant='caption'>{data?.appointment}</Typography>
                </StyledInformationBox>

                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Qualification</Typography>
                    <Typography color='secondary' variant='caption'>{data?.qualification}</Typography>
                </StyledInformationBox>

                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Current Working Place</Typography>
                    <Typography color='secondary' variant='caption'>{data?.workingPlace}</Typography>
                </StyledInformationBox>

                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Current Status</Typography>
                    <Typography color='secondary' variant='caption'>{data?.currentStatus}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'>Average Rating</Typography>
                    <Typography color='secondary' variant='caption'>{data?.averageRating}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography color='secondary' variant='caption'> Experience</Typography>
                </StyledInformationBox>
            </Stack>
        </>
    );
};

export default DoctorInformation;