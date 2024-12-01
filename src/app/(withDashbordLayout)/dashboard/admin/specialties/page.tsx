'use client'
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>

                {/* item-1  */}
                <Button onClick={() => setIsModalOpen(true)}>
                    Create Specialty
                </Button>

                {/* Modal-components  */}
                <SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />

                {/* item-2  */}
                <TextField placeholder="Search Specialist" size="small">

                </TextField>
            </Stack>
        </Box>
    );
};

export default SpecialtiesPage;