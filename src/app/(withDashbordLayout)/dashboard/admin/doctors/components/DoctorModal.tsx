import { defaultValues } from '@/app/Register/page';
import PHFileUploader from '@/Components/Forms/PHFileUploder';
import PHForm from '@/Components/Forms/PHForm';
import PHInput from '@/Components/Forms/PHInput';
import PHSelectField from '@/Components/Forms/PHSelectField';
import PHFullScreenModal from '@/Components/Shared/PHModal/PHFullScreenModal';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { Gender } from "@/types/common";
import { useCreateDoctorMutation } from '@/redux/api/doctorApi';
import { modifyPayload } from '@/utils/modifyPayload';
import { toast } from 'sonner';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DoctorModal = ({ open, setOpen }: TProps) => {
    const [createDoctor] = useCreateDoctorMutation();

    const handleFormSubmit = async (values: FieldValues) => {
        values.doctor.experience = Number(values.doctor.experience)
        values.doctor.apointmentFee = Number(values.doctor.apointmentFee)

        const data = modifyPayload(values)
        try {
            const res = await createDoctor(data).unwrap();
            if (res?.id) {
                toast.success('Doctor Create Successfully');
                setOpen(false)
            }
            console.log(res)
        } catch (err: any) {
            console.log(err)
        }
    }
    const defaultValues = {
        doctor: {
            email: "",
            name: "",
            contactNumber: "",
            address: "",
            registrationNumber: "",
            gender: "",
            experience: 0,
            apointmentFee: 0,
            qualification: "",
            currentWorkingPlace: "",
            designation: "",
            profilePhoto: "",
        },
        password: "",
    };
    return (
        <PHFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
            <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.name"
                            label="Name"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.email"
                            type="email"
                            label="Email"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.contactNumber"
                            label="Contract Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.address"
                            label="Address"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.registrationNumber"
                            label="Registration Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.experience"
                            type="number"
                            label="Experience"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHSelectField
                            items={Gender}
                            name="doctor.gender"
                            label="Gender"
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.apointmentFee"
                            type="number"
                            label="ApointmentFee"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.qualification"
                            label="Qualification"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.currentWorkingPlace"
                            label="Current Working Place"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="doctor.designation"
                            label="Designation"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>

                <Button type="submit">Create</Button>
            </PHForm>
        </PHFullScreenModal>
    );
};

export default DoctorModal;