'use client'
import { Box, Button, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>

                {/* item-1  */}
                <Button onClick={() => setIsModalOpen(true)}>
                    Create Doctor
                </Button>

                {/* Modal-components  */}
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />

                {/* item-2  */}
                <TextField placeholder="Search Specialist" size="small">

                </TextField>
            </Stack>

        </Box>
    );
};

export default DoctorsPage;