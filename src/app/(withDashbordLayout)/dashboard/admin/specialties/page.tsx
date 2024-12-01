import PHModal from "@/Components/Shared/PHModal/PHModal";
import { Box, Button, Stack, TextField } from "@mui/material";

const SpecialtiesPage = () => {
    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>

                {/* item-1  */}
                <Button>
                    Create Specialty
                </Button>
                <PHModal />

                {/* item-2  */}
                <TextField placeholder="Search Specialist" size="small">

                </TextField>
            </Stack>
        </Box>
    );
};

export default SpecialtiesPage;