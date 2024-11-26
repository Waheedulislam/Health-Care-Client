import assets from '@/assets';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ChooseUsImg from '@/assets/choose-us.png'
import Image from 'next/image';

const WhyUs = () => {
    return (
        <Container>
            <Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        color='primary'
                        variant='h6'
                        component='h1'
                        fontWeight={700}
                    >Why Us
                    </Typography>
                    <Typography
                        variant='h4'
                        component='h1'
                        fontWeight={700}
                    >
                        Why Choose Us
                    </Typography>
                </Box>
                <Grid container spacing={2} my={5}>
                    {/* card Grid  */}
                    <Grid item md={6}>
                        {/* box-1  */}
                        <Box sx={{
                            display: 'flex',
                            gap: '15px',
                            backgroundColor: "rgba(245,245,245,1)",
                            padding: '20px',
                            alignItems: 'center',
                            borderRadius: '10px 10px 80px  10px '
                        }}>
                            <Box sx={{
                                backgroundColor: '#fff',
                                padding: '10px',
                                borderRadius: '10px'
                            }}>
                                <Image src={servicesData[0].imageSrc} width={50} alt='award' />
                            </Box>
                            <Box>
                                <Typography
                                    variant='h6'
                                    component='h6'
                                    fontWeight={600}
                                >
                                    {servicesData[0].title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='primary.body1'
                                    fontWeight={300}
                                >
                                    {servicesData[0].description}
                                </Typography>
                            </Box>
                        </Box>
                        {/* box-2  */}
                        <Box sx={{
                            display: 'flex',
                            gap: '15px',
                            backgroundColor: "rgba(245,245,245,1)",
                            padding: '20px',
                            alignItems: 'center',
                            margin: '20px 0px',
                            borderRadius: '10px 80px 10px   10px '
                        }}>
                            <Box sx={{
                                backgroundColor: '#fff',
                                padding: '10px',
                                borderRadius: '10px'
                            }}>
                                <Image src={servicesData[1].imageSrc} width={50} alt='award' />
                            </Box>
                            <Box>
                                <Typography
                                    variant='h6'
                                    component='h6'
                                    fontWeight={600}
                                >
                                    {servicesData[1].title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='primary.body1'
                                    fontWeight={300}
                                >
                                    {servicesData[1].description}
                                </Typography>
                            </Box>
                        </Box>
                        {/* box-3  */}
                        <Box sx={{
                            display: 'flex',
                            gap: '15px',
                            backgroundColor: "rgba(245,245,245,1)",
                            padding: '20px',
                            alignItems: 'center',
                            borderRadius: '10px 10px 80px  10px '
                        }}>
                            <Box sx={{
                                backgroundColor: '#fff',
                                padding: '10px',
                                borderRadius: '10px'
                            }}>
                                <Image src={servicesData[2].imageSrc} width={50} alt='award' />
                            </Box>
                            <Box>
                                <Typography
                                    variant='h6'
                                    component='h6'
                                    fontWeight={600}
                                >
                                    {servicesData[2].title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='primary.body1'
                                    fontWeight={300}
                                >
                                    {servicesData[2].description}
                                </Typography>
                            </Box>
                        </Box>
                        {/* box-4  */}
                        <Box sx={{
                            display: 'flex',
                            gap: '15px',
                            backgroundColor: "rgba(245,245,245,1)",
                            padding: '20px',
                            alignItems: 'center',
                            margin: '20px 0px',
                            borderRadius: '10px 80px,10px   10px '
                        }}>
                            <Box sx={{
                                backgroundColor: '#fff',
                                padding: '10px',
                                borderRadius: '10px'
                            }}>
                                <Image src={servicesData[3].imageSrc} width={50} alt='award' />
                            </Box>
                            <Box>
                                <Typography
                                    variant='h6'
                                    component='h6'
                                    fontWeight={600}
                                >
                                    {servicesData[3].title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='primary.body1'
                                    fontWeight={300}
                                >
                                    {servicesData[3].description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Image Grid  */}
                    <Grid item md={6} sx={{

                        display: 'flex'
                    }}>
                        <Box sx={{
                            margin: '0 auto',
                            justifyContent: 'center'
                        }}>
                            <Image src={ChooseUsImg} width={400} alt='choose Us' />
                        </Box>                    </Grid>
                </Grid>

            </Box>
        </Container>
    );
};

export default WhyUs;

const servicesData = [
    {
        imageSrc: assets.svgs.award,
        title: 'Award Winning Service',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageSrc: assets.svgs.care,
        title: 'Best Quality Pregnancy Care',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageSrc: assets.svgs.equipment,
        title: 'Complete Medical Equipments',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageSrc: assets.svgs.call,
        title: 'Dedicated Emergency Care',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
]