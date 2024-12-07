'use client'
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { useGetALLSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete'
import { useDebounced } from "@/redux/hooks";
import { useDeleteDoctorMutation } from "@/redux/api/doctorApi";
import { toast } from "sonner";


const DoctorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const query: Record<string, any> = {}
    const [searchTerm, setSearchTerm] = useState<string>('')


    const debouncedTerm = useDebounced(
        {
            searchQuery: searchTerm,
            delay: 600
        }
    );
    if (!!debouncedTerm) {
        query['searchTerm'] = searchTerm;
    }

    query['searchTerm'] = searchTerm;


    const { data, isLoading } = useGetALLSpecialtiesQuery({ ...query });
    const [deleteDoctor] = useDeleteDoctorMutation()

    const doctors = data?.doctors;
    const meta = data?.meta
    // console.log(data)
    const handleDelete = async (id: string) => {
        // console.log(id)
        try {
            const res = await deleteDoctor(id).unwrap();
            if (res?.id) {
                toast.success('Doctor deleted successfully')
            }
        } catch (err: any) {
            console.log(err.message)
        }
    }

    const columns: GridColDef[] = [
        // note
        // field name hocca data r  property and headerName hocca table r head Name;

        { field: 'Name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'contactNumber', headerName: 'ContactNumber', flex: 1 },
        { field: 'gender', headerName: 'Gender', flex: 1 },
        { field: 'apointmentFee', headerName: 'AppointmentFee', flex: 1 },

        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: ({ row }) => {
                return (
                    <IconButton onClick={() => handleDelete(row.id)} aria-label='delete'>
                        <DeleteIcon />
                    </IconButton>
                );
            }

        },



    ];

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
                <TextField onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Doctor" size="small">

                </TextField>
            </Stack>

            {!isLoading ? (<Box my={2}>
                <DataGrid
                    rows={doctors}
                    columns={columns}

                />
            </Box>) :
                (
                    <h1>Loading ....</h1>
                )
            }
        </Box>
    );
};

export default DoctorsPage;