'use client'
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";
import { useDeleteSpecialtiesMutation, useGetALLSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete'
import { toast } from "sonner";

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { data, isLoading } = useGetALLSpecialtiesQuery({});
    const [deleteSpecialties] = useDeleteSpecialtiesMutation()
    // console.log(data)

    const handleDelete = async (id: string) => {
        // console.log(id)
        try {
            const res = await deleteSpecialties(id).unwrap();
            if (res?.id) {
                toast.success('Specialties Deleted successfully')
            }
        } catch (err: any) {
            console.log(err.message)
        }
    }

    const columns: GridColDef[] = [
        // note
        // field name hocca data r  property and headerName hocca table r head Name;

        { field: 'title', headerName: 'Title', width: 400 },
        {
            field: 'icon',
            headerName: 'Icon',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box>
                        {row?.icon ? (
                            <Image src={row.icon} width={40} height={40} alt="icon" />
                        ) : (
                            <span>No Icon</span>
                        )}
                    </Box>
                );
            }

        },
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
                    Create Specialty
                </Button>

                {/* Modal-components  */}
                <SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />

                {/* item-2  */}
                <TextField placeholder="Search Specialist" size="small">

                </TextField>
            </Stack>
            {!isLoading ? (<Box my={2}>
                <DataGrid
                    rows={data}
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

export default SpecialtiesPage;