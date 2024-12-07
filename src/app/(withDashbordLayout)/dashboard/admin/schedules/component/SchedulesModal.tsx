import PHDatePicker from '@/Components/Forms/PHDatePicker';
import PHForm from '@/Components/Forms/PHForm';
import PHModal from '@/Components/Shared/PHModal/PHModal';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScheduleModal = ({ open, setOpen }: TProps) => {
    const handleFormSubmit = async (values: FieldValues) => {
        try {

        } catch (err: any) {
            console.log(err.message)
        }
    }
    return (
        <PHModal open={open} setOpen={setOpen} title='Create Schedule'>
            <PHForm onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <PHDatePicker />
                    </Grid>
                </Grid>
                <Button type='submit'>Create</Button>
            </PHForm>
        </PHModal>
    );
};

export default ScheduleModal;