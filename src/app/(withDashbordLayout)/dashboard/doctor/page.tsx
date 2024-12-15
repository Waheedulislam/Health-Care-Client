import { Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import DoctorScheduleModal from "./schedules/components/DoctorScheduleModal";
import { useEffect } from "react";
import { dateFormatter } from "@/Components/Forms/dateFormatter";
import { ISchedule } from "@/types/schedules";
import dayjs from "dayjs";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { useGetAllSchedulesQuery } from "@/redux/api/schedulesApi";
import { useGetAllDoctorScheduleQuery } from "@/redux/api/doctorSchedulesApi";

const DoctorPage = () => {
    const [isModalOpen, SetIsModalOpen] = useState<boolean>(false);
    const [allSchedule, setAllSchedule] = useState<any>([]);
    const { data, isLoading } = useGetAllDoctorScheduleQuery({});
    console.log(data)

    const schedules = data?.doctorSchedules;
    const meta = data?.meta;

    useEffect(() => {
        const updateData = schedules?.map((schedule: ISchedule, index: number) => {
            return {
                sl: index + 1,
                id: schedule?.doctorId,
                // startDate: dateFormatter(schedule?.schedule?.startDate),
                startDate: dateFormatter(schedule?.startDate),
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
            <button onClick={() => SetIsModalOpen(true)}>
                Create Doctor Schedule
            </button>
            <DoctorScheduleModal open={isModalOpen} setOpen={SetIsModalOpen} />

            <Box sx={{ mb: 5 }}>
                <Box>
                    {!isLoading ? (
                        <Box my={2}>
                            <DataGrid rows={allSchedule ?? []} columns={columns} />
                        </Box>
                    ) : (
                        <h1>Loading.....</h1>
                    )}
                </Box>
            </Box>
        </Box>

    );
};

export default DoctorPage;