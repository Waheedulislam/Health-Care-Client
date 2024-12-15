import { dateFormatter } from '@/Components/Forms/dateFormatter';
import PHDatePicker from '@/Components/Forms/PHDatePicker';
import PHForm from '@/Components/Forms/PHForm';
import PHTimePicker from '@/Components/Forms/PHTimePicker';
import { timeFormatter } from '@/Components/Forms/timeFormatter';
import PHModal from '@/Components/Shared/PHModal/PHModal';
import { useCreateScheduleMutation } from '@/redux/api/schedulesApi';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScheduleModal = ({ open, setOpen }: TProps) => {

    const [createSchedule] = useCreateScheduleMutation();



    const handleFormSubmit = async (values: FieldValues) => {

        values.startDate = dateFormatter(values.startDate)
        values.endDate = dateFormatter(values.endDate)
        values.startTime = timeFormatter(values.startTime)
        values.endTime = timeFormatter(values.endTime)
        console.log(values)
        try {
            // console.log(values)
            const res = await createSchedule(values);
            // console.log(res)
            if (res?.data?.length) {
                toast.success('Schedules Created Successfully')
                setOpen(false)
            }
        } catch (err: any) {
            console.log(err.message)
        }
    }
    return (
        <PHModal open={open} setOpen={setOpen} title='Create Schedule'>
            <PHForm onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={12} sm={12} sx={{ width: "400px" }}>
                        <PHDatePicker
                            label='Start Date'
                            name='startDate' />
                    </Grid>
                    <Grid item md={12} sm={12} >
                        <PHDatePicker
                            label='End Date'
                            name='endDate' />
                    </Grid>
                    <Grid item md={6} sm={12} >
                        <PHTimePicker name='startTime' label='Start Time' />

                    </Grid>
                    <Grid item md={6} sm={12} >
                        <PHTimePicker name='endTime' label='End Time' />

                    </Grid>
                </Grid>
                <Button type='submit' sx={{ mt: 1 }}>Create</Button>
            </PHForm>
        </PHModal>
    );
};

export default ScheduleModal;