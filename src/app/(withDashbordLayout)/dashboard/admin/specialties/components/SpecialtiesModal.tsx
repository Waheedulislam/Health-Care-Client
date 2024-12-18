import PHFileUploader from '@/Components/Forms/PHFileUploder';
import PHForm from '@/Components/Forms/PHForm';
import PHInput from '@/Components/Forms/PHInput';
import PHModal from '@/Components/Shared/PHModal/PHModal';
import { useCreateSpecialtiesMutation } from '@/redux/api/specialtiesApi';
import { modifyPayload } from '@/utils/modifyPayload';
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialtyModal = ({ open, setOpen }: TProps) => {

    const [createSpecialties] = useCreateSpecialtiesMutation();



    const handleFormSubmit = async (values: FieldValues) => {

        const data = modifyPayload(values);
        try {
            const res = await createSpecialties(data).unwrap();
            if (res?.id) {
                toast.success('Specialty created successfully !!')
                setOpen(false);
            }
            console.log(res)
        } catch (err: any) {

        }

    }
    return (
        <PHModal open={open} setOpen={setOpen} title='Create A New Specialist'>
            <PHForm onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <PHInput name='title' size='small' label='Title'></PHInput>
                    </Grid>
                    <Grid item md={6}>
                        <PHFileUploader name='file' label='Upload File' />
                    </Grid>
                </Grid>
                <Button type='submit' sx={{ mt: 1 }}>Create</Button>
            </PHForm>
        </PHModal>

    )
};

export default SpecialtyModal;