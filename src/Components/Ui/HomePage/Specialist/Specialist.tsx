import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Specialist = async () => {
    const res = await fetch('http://localhost:5000/api/v1/specialties', {
        next: {
            revalidate: 30,
        }
    })
    const { data: specialties } = await res.json();
    // console.log(specialties)
    return (
        <Container>
            <Box sx={{
                margin: '40px 0px',
                textAlign: 'center'
            }}>
                <Box sx={{
                    textAlign: 'start'
                }}>
                    <Typography variant='h4' fontWeight={600}>Explore Treatments Across Specialist</Typography>

                    <Typography component='p' fontWeight={600}
                        fontSize={18}>Experienced Doctors Across All Specialties
                    </Typography>
                </Box>

                <Stack direction="row" gap={4} mt={5}>
                    {specialties.map((specialty: any) => (
                        <Box key={specialty?.id} sx={{
                            flex: 1,
                            width: '150px',
                            background: "rgb(245,245,245,1)",
                            border: '1px solid rgb(250,250,250,1)',
                            borderRadius: '10px',
                            textAlign: 'center',
                            padding: '40px 10px',
                            "& img": {
                                width: '50px',
                                height: '50px',
                                margin: '0 auto'
                            },
                            "&:hover": {
                                border: '1px solid blue',
                                padding: '40px 10px',
                                borderRadius: '10px',
                            }
                        }}>
                            {specialty?.icon ? (
                                <Image
                                    src={specialty.icon}
                                    width={100}
                                    height={100}
                                    alt="specialty icon"
                                />
                            ) : (
                                <Typography>No Image Available</Typography>
                            )}
                            <Box>
                                <Typography component='p' fontWeight={600}
                                    fontSize={18} mt={2}>
                                    {specialty.title}
                                </Typography>
                            </Box>

                        </Box>
                    ))}
                </Stack>
                <Button variant='outlined' sx={{
                    marginTop: '10px'
                }}>View all</Button>

            </Box>
        </Container>
    );
};

export default Specialist;