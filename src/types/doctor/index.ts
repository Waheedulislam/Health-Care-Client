
export interface IDoctor {
    id: string;
    name: string;
    profilePhoto: string;
    address: string;
    registrationNumber: string;
    experience: number | undefined;
    gender: 'MALE|FEMALE';
    apointmentFee: number | undefined;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    specialties?: ISpecialties[];
}

export interface ISpecialties {
    specialties: string;
    isDeleted?: null;
}
export interface IDoctorFormData {
    doctor: IDoctor;
    password: string;
}