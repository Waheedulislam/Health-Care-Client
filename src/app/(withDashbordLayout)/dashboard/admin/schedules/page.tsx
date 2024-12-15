'use client'
import { Box, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ScheduleModal from "./component/SchedulesModal";
import { useGetALLSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { dateFormatter } from "@/Components/Forms/dateFormatter";
import dayjs from "dayjs";
import { ISchedule } from "@/types/schedules";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";

const SchedulesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [allSchedule, setAllSchedule] = useState<any>([]);
    const { data, isLoading } = useGetALLSpecialtiesQuery({});

    const schedules = data?.schedules;
    const meta = data?.meta;

    useEffect(() => {
        const updateData = schedules?.map((schedule: ISchedule) => {
            return {
                id: schedule?.id,
                startDate: dateFormatter(schedule.startDate),
                endDate: dateFormatter(schedule.endDate),
                startTime: dayjs(schedule?.startDate).format('hh:mm a'),
                endTime: dayjs(schedule?.endDate).format('hh:mm a'),
            }
        });
        setAllSchedule(updateData);
    }, [schedules]);
    const columns: GridColDef[] = [
        { field: 'sl', headerName: 'SL' },
        { field: 'startDate', headerName: 'Date', flex: 1 },
        { field: 'startTime', headerName: 'Start Time', flex: 1 },
        { field: 'endTime', headerName: 'End Time', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: ({ row }) => {
                return (
                    <IconButton aria-label='delete'>
                        <GridDeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                );
            },
        },
    ];
    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
            <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
            {!isLoading ? (
                <Box my={2}>
                    <DataGrid rows={allSchedule ?? []} columns={columns} />
                </Box>
            ) : (
                <h1>Loading.....</h1>
            )}
        </Box>
    );
};

export default SchedulesPage;