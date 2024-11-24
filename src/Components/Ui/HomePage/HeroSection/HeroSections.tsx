import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from '@/assets';

const HeroSections = () => {
    return (
        <Container sx={{
            display: 'flex',
            direction: 'row',
            my: 16,
        }}>
            {/* section-1  */}
            <Box sx={{
                flex: 1,
                position: "relative",
            }}>
                <Box sx={
                    {
                        position: "absolute",
                        width: "700px",
                        top: "-90px",
                        left: "-140px"

                    }
                }>
                    <Image src={assets.svgs.grid} alt='' />
                </Box>
                <Typography variant='h3' component='h1' fontWeight={600}>Health Hearts</Typography>
                <Typography variant='h3' component='h1' fontWeight={600}>Come From</Typography>
                <Typography variant='h3' color='primary.main' component='h1' fontWeight={600}>Preventive Care</Typography>

                <Typography variant='h6' component='p' fontWeight={400} sx={{

                    my: '5px'
                }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel esse ab, obcaecati quas vero ut eligendi perferendis numquam laboriosam.</Typography>

                <Box sx={{ display: "flex", gap: "2", my: "20px" }}>
                    <Button>Make Appointment</Button>
                    <Button variant='outlined' sx={{ ml: '8px' }}>Contact Us</Button>
                </Box>


            </Box>

            {/* section-2  */}
            <Box sx={{
                p: 1,
                flex: 1,
                display: "flex",
                justifyContent: 'center',
                position: "relative",
                mt: 0,
            }}>
                <Box sx={{
                    position: "absolute",
                    left: '200px',
                    top: '-30px'

                }}>
                    <Image src={assets.svgs.arrow} width={100} height={100} alt='arrow'></Image>
                </Box>

                <Box sx={{ display: "flex", gap: 2, }}>
                    <Box mt={4}>
                        <Image src={assets.images.doctor1}
                            width={240}
                            height={380}
                            alt='doctor-1'>
                        </Image>
                    </Box>
                    <Box>
                        <Image src={assets.images.doctor2}
                            width={240}
                            height={350} alt='doctor-2'>
                        </Image>
                    </Box>
                </Box>
                <Box sx={{
                    position: 'absolute', top: "220px",
                    left: "140"
                }}>
                    <Image
                        width={230}
                        height={230}
                        src={assets.images.doctor3} alt='doctor-3'></Image>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: "-50px",
                    right: 0,
                    zIndex: "-1"
                }}>
                    <Image
                        width={180}
                        height={180}
                        src={assets.images.stethoscope} alt='doctor-3'></Image>
                </Box>
            </Box>
        </Container>
    );
};

export default HeroSections;