import { IMeta } from '@/types';
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';

const DoctorSchedulesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDoctorSchedule: build.mutation({
            query: (data) => ({
                url: '/doctor-schedule',
                method: 'POST',
                data
            }),
            invalidatesTags: [tagTypes.doctorSchedule],
        }),
        getAllDoctorSchedule: build.query({
            query: (arg: Record<string, any>) => ({
                url: '/doctor-schedule',
                method: 'GET',
                params: arg,
            }),
            transformErrorResponse: (response: [], meta: IMeta) => {
                return {
                    schedules: response,
                    meta
                }
            },
            providesTags: [tagTypes.doctorSchedule]
        }),
        getDoctorSchedule: build.query({
            query: (id: string | string[] | undefined) => ({
                url: `/doctor-schedule/${id}`,
                method: 'GET',
            }),
            providesTags: [tagTypes.doctorSchedule]
        }),
        getMySchedule: build.query({
            query: () => ({
                url: '/doctor-schedule/my-schedule',
                method: 'GET'
            }),
            providesTags: [tagTypes.doctorSchedule]
        }),
        deletedDoctorSchedule: build.mutation({
            query: (id: string) => ({
                url: `/doctor-schedule/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [tagTypes.doctorSchedule],
        })

    })
})

export const {
    useCreateDoctorScheduleMutation,
    useGetAllDoctorScheduleQuery,
    useGetDoctorScheduleQuery,
    useGetMyScheduleQuery,
    useDeletedDoctorScheduleMutation
} = DoctorSchedulesApi;