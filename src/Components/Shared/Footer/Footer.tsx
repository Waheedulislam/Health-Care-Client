import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box bgcolor='rgb(17,26,34)' py={5}>
            <Container >

                <Stack direction='row' gap={4} justifyContent='center'>
                    <Typography component={Link} color='#fff'
                        href='/consultation'>Consultation</Typography>
                    <Typography color='#fff'>Health Plans</Typography>
                    <Typography color='#fff'>Medicine</Typography>
                    <Typography color='#fff'>Diagnostics</Typography>
                    <Typography color='#fff'>NGOs</Typography>
                </Stack>

                <Stack direction="row" gap={2} justifyContent="center" alignItems='center' py={3}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook style={{ width: '30px', height: '30px', color: '#4267B2' }} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ width: '30px', height: '30px', color: '#E1306C' }} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ width: '30px', height: '30px', color: '#0077B5' }} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ width: '30px', height: '30px', color: '#0077B5' }} />
                    </a>
                </Stack>

                <div className='border-[1px] border-dashed' >
                </div>
                <Stack direction='row' gap={2} justifyContent='space-between' alignItems='center' py={3}>
                    <Typography component='p' color='white'>
                        &copy;2024 ph HealthCare. All Rights Reserved.
                    </Typography>
                    <Typography variant='h4' component={Link}
                        href='/' fontWeight={600} color='white'>
                        P<Box component='span' color='primary.main'>H</Box> Health Care
                    </Typography>
                    <Typography component='p' color='white'>
                        Privacy Policy!{' '} Terms and Conditions
                    </Typography>
                </Stack>

            </Container>
        </Box>
    );
};

export default Footer;