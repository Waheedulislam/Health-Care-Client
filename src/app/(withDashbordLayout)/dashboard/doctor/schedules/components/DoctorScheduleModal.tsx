import PHModal from '@/Components/Shared/PHModal/PHModal';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useGetAllSchedulesQuery } from '@/redux/api/schedulesApi';
import MultipleSelectFiledChip from './MultipleSelectFiledChip';
import { Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCreateDoctorScheduleMutation } from '@/redux/api/doctorSchedulesApi';


type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs(new Date().toISOString()));

    const [selectedScheduleIds, setSelectedScheduleIds] = React.useState<string[]>([]);

    const query: Record<string, any> = {};

    if (!!selectedDate) {
        query['startDate'] = dayjs(selectedDate).hour(0).minute(0).millisecond(0).toISOString()
        query['startDate'] = dayjs(selectedDate).hour(23).minute(59).millisecond(999).toISOString()
    }


    const { data, } = useGetAllSchedulesQuery(query)
    const schedules = data?.schedules;
    console.log(schedules)
    const [createDoctorSchedule, { isLoading }] = useCreateDoctorScheduleMutation();

    const onSubmit = async () => {
        try {
            const res = await createDoctorSchedule({ schedules: selectedScheduleIds })
            console.log(res)
            setOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PHModal open={open} setOpen={setOpen} title='Create Doctor Schedule'>

            <Stack direction={'column'} gap={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <DatePicker
                        label="Controlled picker"
                        value={dayjs(selectedDate)}
                        onChange={(newValue) => setSelectedDate(dayjs(newValue))}
                        sx={{ width: '100' }}
                    />

                </LocalizationProvider>

                <MultipleSelectFiledChip schedules={schedules} selectedScheduleIds={selectedScheduleIds} setSelectedScheduleIds={setSelectedScheduleIds} />

                <LoadingButton
                    size="small"
                    onClick={onSubmit}
                    loading={isLoading}
                    loadingIndicator="submitting...."
                    variant="contained"
                >
                    Fetch data
                </LoadingButton>
            </Stack>

        </PHModal>
    );
};

export default DoctorScheduleModal;