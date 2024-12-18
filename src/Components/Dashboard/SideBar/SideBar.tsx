import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItems from "./SidebarItems";
import { getUserInfo } from "@/Services/auth.services";
import { useEffect, useState } from "react";


const SideBar = () => {
    const [userRole, setUserRole] = useState('');

    useEffect(() => {

        const { role } = getUserInfo() as any;
        setUserRole(role.toLowerCase())
        console.log(role)
    }, [])
    return (
        <Box>
            <Stack
                sx={{
                    py: 1,
                    mt: 1
                }}
                direction='row'
                justifyContent='center'
                alignItems='center'
                gap={1}
                component={Link}
                href='/'

            >
                <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
                <Typography variant="h6" component='h1'
                >
                    PH Health
                </Typography>
            </Stack>
            <List>
                {drawerItems(userRole as UserRole).map((item, index) => (
                    <SidebarItems key={index} item={item} />
                ))}
            </List>
        </Box>
    );
};

export default SideBar;